import * as joi from 'joi';
import AWSSDK from 'aws-sdk';
import nodemailer from 'nodemailer';
import { cfpFieldValidations } from '~/services/cfp';

const envOr = (varName, fallback = '') => process.env[`WEBCONF_2021_CFP_${varName}`] || fallback;

const keyToLabel = (key) => {
  const label = key.replace(/([a-z])([A-Z])/g, '$1 $2');
  return `${label[0].toUpperCase()}${label.substr(1).toLowerCase()}`;
};

const dictionaryToReport = (dict) =>
  Object.entries(dict)
    .reduce(
      (acc, [key, value]) => [...acc, `<strong>${keyToLabel(key)}:</strong><br />${value}`],
      [],
    )
    .join('<br /><br />')
    .replace(/(?:<br \/>)+$/, '');

const DEFAULT_ADDRESS = 'contenido@webconf.tech';
const CONFIG = {
  notification: {
    address: envOr('NOTIFICATIONS_EMAIL', DEFAULT_ADDRESS),
    subject: envOr('NOTIFICATIONS_SUBJECT', '¡Nueva propuesta de charla!'),
  },
  confirmation: {
    address: envOr('CONFIRMATION_EMAIL', DEFAULT_ADDRESS),
    subject: envOr('CONFIRMATION_SUBJECT', 'WebConf 2021 - ¡Gracias por sumarte!'),
  },
};

/* eslint-disable max-len */
const CONFIRMATION_TEMPLATE = [
  '<p>¡Hola!</p>',
  '<p>Queremos agradecerte por habernos mandado tu propuesta para la WebConf 2021; nos pone súper-contentos ver la confianza y el interés que mostrás en esta nueva edición de la conferencia.</p>',
  '<p>Durante las próximas semanas vamos a estar analizando tu taller para entender en profundidad la temática que propusiste. Te contactaremos nuevamente acercándote novedades, dudas o feedback sobre tu postulación.</p>',
  '<p>Te pedimos que tengas paciencia y estés pendiente de nuestros mails. Dependiendo del volumen de propuestas puede que tardemos en contactarnos, pero nuestra intención es la de tener una buena cadencia para avanzar con el proceso lo más rápido posible.</p>',
  '<p>De nuevo, ¡muchas gracias por animarte y seguimos en contacto!</p>',
  '<p>--</p>',
  '<p>',
  '<a href="https://codear.org"><img src="https://i.imgur.com/ZlaT5Go.png" alt="Logo de CoDeAr" /></a>',
  '<br /><strong>Equipo de contenido de WebConf</strong>',
  '</p>',
  '<p>',
  '<strong><em>Nuestras redes sociales</em></strong><br />',
  '<strong>Instagram:</strong> https://instagram.com/somoscodear<br />',
  '<strong>Twitter:</strong> https://twitter.com/somoscodear<br />',
  '</p>',
].join('\n');
/* eslint-enable max-len */

const schema = joi.object(cfpFieldValidations);

AWSSDK.config.update({
  accessKeyId: process.env.WEBCONF_2021_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.WEBCONF_2021_AWS_SECRET_ACCESS_KEY,
  region: process.env.WEBCONF_2021_AWS_REGION || 'us-east-1',
});

const mailer = nodemailer.createTransport({
  SES: new AWSSDK.SES(),
});

export default async (req, res) => {
  const data = schema.validate(req.body, { stripUnknown: true });
  if (data.error) {
    return res.status(400).json({
      error: data.error.message,
    });
  }

  try {
    await Promise.all([
      mailer.sendMail({
        from: CONFIG.notification.address,
        to: CONFIG.notification.address,
        subject: CONFIG.notification.subject,
        html: dictionaryToReport(data.value),
      }),
      mailer.sendMail({
        from: CONFIG.confirmation.address,
        to: data.value.speakerEmail,
        subject: CONFIG.confirmation.subject,
        html: CONFIRMATION_TEMPLATE,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
