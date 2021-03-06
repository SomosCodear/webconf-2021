import * as R from 'ramda';
import propTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
import { Checkbox } from '~/components/common';
import { Step } from './Step';

const GuidelinesDescription = styled.div`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 400;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 1.5rem;
    font-size: 1.75rem;
  }
`;

const GuidelinesFeatures = styled.div`
  font-size: 1.25rem;
  line-height: 120%;
  margin-top: 2rem;

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.cfpStepTitle};
    border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    font-size: 1.15rem;
  }
`;

const GuidelinesFeature = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

const GuidelinesCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.colors.cfpGuidelineCheckboxText};
  font-weight: 500;
`;

const guidelines = {
  talks: [
    <>
      <strong>Nos enfocamos en conceptos.</strong> Las charlas deben tener un foco en conceptos, no
      en librerías ni en frameworks específicos, de manera que el contenido explorado sea útil para
      todas las personas.
    </>,
    <>
      <strong>Una charla no es publicidad.</strong> No aceptaremos charlas centradas en la venta de
      una empresa, producto, o difusión de propaganda política o religiosa, ya que creemos que no
      son contenidos constructivos para el espacio.
    </>,
    <>
      <strong>Hablamos español.</strong> Nos interesa que el contenido que se genere en nuestros
      eventos sea accesible al público hispanohablante en general.
    </>,
    <>
      <strong>Lo social nos moviliza.</strong> Ninguna solución de software existe aislada de lo
      social. Nos interesa ver cómo la tecnología tiene un impacto en la comunidad, desde ejes como
      la inclusión, la diversidad de género, y más.
    </>,
    <>
      <strong>Somos un espacio abierto.</strong> Como parte de nuestra misión, buscamos hacer crecer
      la participación de la comunidad, por lo que pretendemos dar espacios y soporte a todas las
      personas disertantes que quieran participar en WebConf, mas allá de si participaron
      anteriormente o no en otras conferencias.
    </>,
    <>
      <strong>Fomentamos el respeto y la cooperación.</strong> Tu participación implica la
      aceptación del{' '}
      <a href="https://codear.org/coc" target="_blank" rel="noopener noreferrer">
        Código de Conducta de CoDeAr
      </a>
      .
    </>,
  ],
  workshops: [
    <>
      <strong>Buscamos un intercambio de ideas.</strong> En un espacio más descontracturado como un
      taller, apuntamos a un ida y vuelta de ideas y propuestas entre quien facilita el taller y las
      personas que participan de la actividad. Queremos que quienes sean parte de esta experiencia
      puedan llevarse un aprendizaje, algo concreto para aplicar en su carrera profesional.
    </>,
    <>
      <strong>Hablamos español.</strong> Nos interesa que el contenido que se genere en nuestros
      eventos sea accesible al público hispanohablante en general.
    </>,
    <>
      <strong>Somos un espacio abierto.</strong> Como parte de nuestra misión, buscamos hacer crecer
      la participación de la comunidad, por lo que pretendemos dar espacios y soporte a todas las
      personas disertantes que quieran participar en WebConf, mas allá de si participaron
      anteriormente o no en otras conferencias.
    </>,
    <>
      <strong>Fomentamos el respeto y la cooperación.</strong> Tu participación implica la
      aceptación del{' '}
      <a href="https://codear.org/coc" target="_blank" rel="noopener noreferrer">
        Código de Conducta de CoDeAr
      </a>
      .
    </>,
  ],
};

export const Step1 = ({ type = 'talks' }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Step.Title>Antes de continuar...</Step.Title>
      <GuidelinesDescription>
        Te pedimos que te asegures de haber leído nuestros lineamientos de selección:
        <GuidelinesFeatures>
          {guidelines[type].map((guidelineFeature, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <GuidelinesFeature key={`guideline${index}`}>{guidelineFeature}</GuidelinesFeature>
          ))}
        </GuidelinesFeatures>
      </GuidelinesDescription>
      <Step.FieldContainer>
        <Step.Field style={{ marginTop: 0 }}>
          <GuidelinesCheckbox
            id="terms-checkbox"
            {...register('checkGuidelines')}
            hasError={errors.checkGuidelines != null}
          >
            Declaro que leí los lineamientos de selección.
          </GuidelinesCheckbox>
          {errors.checkGuidelines ? (
            <Step.FieldError>{errors.checkGuidelines.message}</Step.FieldError>
          ) : null}
        </Step.Field>
      </Step.FieldContainer>
    </>
  );
};

Step1.propTypes = {
  type: propTypes.oneOf(['talks', 'workshops']),
};

Step1.defaultProps = {
  type: 'talks',
};

Step1.validationSchema = R.pick(['checkGuidelines'], cfpFieldValidations);
