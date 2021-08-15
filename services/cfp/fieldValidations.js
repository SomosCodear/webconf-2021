import * as joi from 'joi';

const COMMON_ERRORS = {
  generic: '¿Podés revisar este campo?',
  textareaMaxLength: '¡Con lo que escribiste hasta acá, ya tenemos suficiente!',
  textareaMinLength: '¿Podés contarnos un poco más? Animate a escribir en detalle.',
};

const CFP_ERRORS = {
  checkGuidelines: {
    required: 'Para participar, es necesario que aceptes nuestros lineamientos de selección.',
  },
  talkTitle: {
    minLength: 'El titulo deberia tener un minimo de 5 caracteres',
    required: COMMON_ERRORS.generic,
  },
  talkLength: {
    required: COMMON_ERRORS.generic,
    only: 'La charla puede ser standard o lightning',
  },
  talkTweet: {
    minLength: COMMON_ERRORS.textareaMinLength,
    maxLength: COMMON_ERRORS.textareaMaxLength,
    required: COMMON_ERRORS.generic,
  },
  talkHashtags: {
    required: COMMON_ERRORS.generic,
    pattern: 'Seguí el formato de hashtags!',
  },
  talkSummary: {
    minLength: COMMON_ERRORS.textareaMinLength,
    required: COMMON_ERRORS.generic,
  },
  speakerName: {
    minLength: 'Tu nombre debería tener más de 5 caracteres',
    required: COMMON_ERRORS.generic,
  },
  speakerIsAdult: {
    required:
      'A fines legales, necesitamos saber si sos mayor de edad o no. Por favor, seleccioná una opción.',
  },
  speakerCity: {
    minLength: 'La información de tu ciudad debería tener más de 10 caracteres',
    required: COMMON_ERRORS.generic,
  },
  speakerEmail: {
    invalidEmail: 'Esto no parece ser una dirección de e-mail. ¿Podés revisar?',
    required: COMMON_ERRORS.generic,
  },
};

export const cfpFieldValidations = {
  checkGuidelines: joi.boolean().invalid(false).required().messages({
    'boolean.base': CFP_ERRORS.checkGuidelines.required,
    'any.required': CFP_ERRORS.checkGuidelines.required,
    'any.invalid': CFP_ERRORS.checkGuidelines.required,
  }),
  talkTitle: joi.string().min(5).required().messages({
    'string.empty': CFP_ERRORS.talkTitle.required,
    'string.min': CFP_ERRORS.talkTitle.minLength,
    'string.base': CFP_ERRORS.talkTitle.required,
    'any.required': CFP_ERRORS.talkTitle.required,
  }),
  talkLength: joi
    .string()
    .required()
    .valid('standard', 'lightning', 'short-workshop', 'standard-workshop', 'deepdive-workshop')
    .messages({
      'string.empty': CFP_ERRORS.talkLength.required,
      'string.base': CFP_ERRORS.talkLength.required,
      'any.required': CFP_ERRORS.talkLength.required,
      'any.only': CFP_ERRORS.talkLength.only,
    }),
  talkTweet: joi.string().min(10).max(200).required().messages({
    'string.empty': CFP_ERRORS.talkTweet.required,
    'string.min': CFP_ERRORS.talkTweet.minLength,
    'string.max': CFP_ERRORS.talkTweet.maxLength,
    'string.base': CFP_ERRORS.talkTweet.required,
    'any.required': CFP_ERRORS.talkTweet.required,
  }),
  talkHashtags: joi
    .string()
    .pattern(/(?:#[a-zA-Z0-9_\-$áéíóúÁÉÍÓÚüÜñÑ]+(?:\s|$))+$/)
    .required()
    .messages({
      'string.empty': CFP_ERRORS.talkHashtags.required,
      'string.pattern.base': CFP_ERRORS.talkHashtags.pattern,
      'string.base': CFP_ERRORS.talkHashtags.required,
      'any.required': CFP_ERRORS.talkHashtags.required,
    }),
  talkSummary: joi.string().min(10).required().messages({
    'string.empty': CFP_ERRORS.talkSummary.required,
    'string.min': CFP_ERRORS.talkSummary.minLength,
    'string.base': CFP_ERRORS.talkSummary.required,
    'any.required': CFP_ERRORS.talkSummary.required,
  }),
  speakerName: joi.string().min(5).required().messages({
    'string.empty': CFP_ERRORS.speakerName.required,
    'string.min': CFP_ERRORS.speakerName.minLength,
    'string.base': CFP_ERRORS.speakerName.required,
    'any.required': CFP_ERRORS.speakerName.required,
  }),
  speakerIsAdult: joi.boolean().required().messages({
    'boolean.base': CFP_ERRORS.speakerIsAdult.required,
    'any.required': CFP_ERRORS.speakerIsAdult.required,
  }),
  speakerCity: joi.string().min(10).required().messages({
    'string.empty': CFP_ERRORS.speakerCity.required,
    'string.min': CFP_ERRORS.speakerCity.minLength,
    'string.base': CFP_ERRORS.speakerCity.required,
    'any.required': CFP_ERRORS.speakerCity.required,
  }),
  speakerEmail: joi
    .string()
    .email({
      tlds: {
        allow: false,
      },
    })
    .required()
    .messages({
      'string.empty': CFP_ERRORS.speakerEmail.required,
      'string.email': CFP_ERRORS.speakerEmail.invalidEmail,
      'string.base': CFP_ERRORS.speakerEmail.required,
      'any.required': CFP_ERRORS.speakerEmail.required,
    }),
  representingOrganization: joi.string().valid('company', 'community'),
  organizationName: joi.string(),
  extra: joi.string().allow('').optional(),
};
