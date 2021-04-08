import * as joi from 'joi';

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

export const cfpFieldValidations = {
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
};
