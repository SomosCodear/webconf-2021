import * as joi from 'joi';
import AWSSDK from 'aws-sdk';
import nodemailer from 'nodemailer';

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
  '<p>Queremos agradecerte por habernos mandado tu propuesta para la WebConf 2020; nos pone súper-contentos ver la confianza y el interés que mostrás en esta nueva edición de la conferencia.</p>',
  '<p>Durante las próximas semanas vamos a estar analizando tu charla para entender en profundidad la temática que propusiste. Te contactaremos nuevamente acercándote novedades, dudas o feedback sobre tu postulación.</p>',
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

const ERRORS = {
  checkGuidelines: {
    required: 'Checkea la cajita de que leiste las guidelines',
  },
  talkTitle: {
    minLength: 'El titulo deberia tener un minimo de 5 caracteres',
    required: 'Falta el titulo de la charla',
  },
  talkLength: {
    required: 'Falta especificar la duración de la charla',
  },
  talkTweet: {
    minLength: 'El tweet debe tener más de 10 caracteres',
    maxLength: 'El tweet no puede tener más de 200 caracteres',
    required: 'Falta el tweet sobre la charla',
  },
  talkHashtags: {
    required: 'Faltan los hashtags',
    pattern: 'La lista de hashtags es invalida',
  },
  talkSummary: {
    minLength: 'La descripción de la charla debe tener más de 10 caracteres',
    required: 'Falta la descripción de la charla',
  },
  speakerName: {
    minLength: 'Tu nombre debe tener más de 5 caracteres',
    required: 'Falta tu nombre',
  },
  speakerIsAdult: {
    required: 'Tenes que ser mayor de edad',
  },
  speakerCity: {
    minLength: 'La información de tu ciudad debe tener más de 10 caracteres',
    required: 'Falta la información de tu ciudad',
  },
  speakerEmail: {
    minLength: 'La dirección de email debe tener más de 5 caracteres',
    invalidEmail: 'La direccón de email no es valida',
    required: 'Falta el email',
  },
};

const schema = joi.object({
  checkGuidelines: joi.boolean().required().messages({
    'boolean.base': ERRORS.checkGuidelines.required,
    'any.required': ERRORS.checkGuidelines.required,
  }),
  talkTitle: joi.string().min(5).required().messages({
    'string.min': ERRORS.talkTitle.minLength,
    'string.base': ERRORS.talkTitle.required,
    'any.required': ERRORS.talkTitle.required,
  }),
  talkLength: joi.string().required().messages({
    'string.base': ERRORS.talkLength.required,
    'any.required': ERRORS.talkLength.required,
  }),
  talkTweet: joi.string().min(10).max(200).required().messages({
    'string.min': ERRORS.talkTweet.minLength,
    'string.max': ERRORS.talkTweet.maxLength,
    'string.base': ERRORS.talkTweet.required,
    'any.required': ERRORS.talkTweet.required,
  }),
  talkHashtags: joi
    .string()
    .pattern(/(?:#[a-zA-Z0-9_\-$]+(?:\s|$))+$/)
    .required()
    .messages({
      'string.pattern.base': ERRORS.talkHashtags.pattern,
      'string.base': ERRORS.talkHashtags.required,
      'any.required': ERRORS.talkHashtags.required,
    }),
  talkSummary: joi.string().min(10).required().messages({
    'string.min': ERRORS.talkSummary.minLength,
    'string.base': ERRORS.talkSummary.required,
    'any.required': ERRORS.talkSummary.required,
  }),
  speakerName: joi.string().min(5).required().messages({
    'string.min': ERRORS.speakerName.minLength,
    'string.base': ERRORS.speakerName.required,
    'any.required': ERRORS.speakerName.required,
  }),
  speakerIsAdult: joi.boolean().required().messages({
    'boolean.base': ERRORS.speakerIsAdult.required,
    'any.required': ERRORS.speakerIsAdult.required,
  }),
  speakerCity: joi.string().min(10).required().messages({
    'string.min': ERRORS.speakerCity.minLength,
    'string.base': ERRORS.speakerCity.required,
    'any.required': ERRORS.speakerCity.required,
  }),
  speakerEmail: joi.string().min(5).email().required().messages({
    'string.email': ERRORS.speakerEmail.invalidEmail,
    'string.min': ERRORS.speakerEmail.minLength,
    'string.base': ERRORS.speakerEmail.required,
    'any.required': ERRORS.speakerEmail.required,
  }),
  extra: joi.string(),
});

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
