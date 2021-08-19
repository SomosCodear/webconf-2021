import { createDomMotionComponent } from 'framer-motion';

/** IE 11 supported version of the motion component */
export const motion = {
  div: createDomMotionComponent('div'),
  span: createDomMotionComponent('span'),
  p: createDomMotionComponent('p'),
  button: createDomMotionComponent('button'),
};
