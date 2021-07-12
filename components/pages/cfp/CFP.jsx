import * as R from 'ramda';
import propTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Step } from './Step';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import { Step6 } from './Step6';
import { Submitting } from './Submitting';
import { Success } from './Success';
import { track } from '~/services/gtag';

const STEPS = [Step1, Step2, Step3, Step4, Step5, Step6];
const INITAL_STEPS_DATA = R.map(R.propOr({}, 'defaultStepValues'))(STEPS);

const Container = styled.main`
  min-height: 100%;
  padding: 2.5rem 0;
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    '  logo  '
    'progress'
    '  step  ';
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content 1fr;
  grid-row-gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 3.75rem 7.5rem;
    grid-template-areas:
      'logo progress'
      'logo   step  ';
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 4.375rem;
  }
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-right: 6rem;
    padding-top: calc(50vh - 226px);
    border-right: 0.062rem solid ${({ theme }) => theme.colors.separator};
  }
`;

const DesktopLogoContainer = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: initial;
  }
`;

const MobileLogoContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  hr {
    width: 1rem;
    border: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Progress = styled.header`
  grid-area: progress;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    align-self: center;
    color: ${({ theme }) => theme.colors.cfpProgressTitle};
    font-size: inherit;
    font-weight: 900;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    h1 {
      font-size: 1.625rem;
    }
  }
`;

const ProgressBar = styled.div`
  position: relative;
  height: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 1rem;
    margin-top: 1.625rem;
  }
`;

const ProgressStep = styled.div`
  flex: 1;
  border: 0.062rem solid ${({ theme }) => theme.colors.cfpProgressIncompleteStepBorder};

  & + & {
    border-left: none;
  }
`;

const ProgressFill = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${({ currentStep }) => 100 - (100 / STEPS.length) * (currentStep + 1)}%;
  background-color: ${({ theme }) => theme.colors.cfpProgressFillBackground};
  will-change: right;
  transition: right 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const ProgressArrow = styled.div`
  display: ${({ currentStep }) => (currentStep === STEPS.length - 1 ? 'none' : 'block')};
  margin-top: 0.25rem;
  margin-left: calc(${({ currentStep }) => (100 / STEPS.length) * (currentStep + 1)}% - 0.4375rem);
  width: 0;
  height: 0;
  border-left: 0.4375rem solid transparent;
  border-right: 0.4375rem solid transparent;
  border-bottom: 0.875rem solid ${({ theme }) => theme.colors.cfpProgressArrow};
  will-change: margin-left;
  transition: margin-left 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    margin-top: 0.5rem;
    margin-left: calc(${({ currentStep }) => (100 / STEPS.length) * (currentStep + 1)}% - 0.75rem);
    border-left-width: 0.75rem;
    border-right-width: 0.75rem;
    border-bottom-width: 1.25rem;
  }
`;

const messages = {
  talks: {
    subject: 'charla',
  },
  workshops: {
    subject: 'taller',
  },
};

const endpoints = {
  talks: '/private-cfp',
  workshops: '/workshop-cfp',
};

export const CFP = ({ type = 'talks' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsData, setStepsData] = useState(INITAL_STEPS_DATA);
  const CurrentStepComponent = STEPS[currentStep];

  const updateCurrentStepData = useCallback(
    (data) => {
      setStepsData((oldStepsData) => R.update(currentStep, data, oldStepsData));
    },
    [currentStep, setStepsData],
  );
  const nextStep = useCallback(
    (data) => {
      updateCurrentStepData(data);
      setCurrentStep((oldStep) => oldStep + 1);
    },
    [updateCurrentStepData, setCurrentStep],
  );
  const previousStep = useCallback(
    (data) => {
      if (data) {
        updateCurrentStepData(data);
      }
      setCurrentStep((oldStep) => Math.max(oldStep - 1, 0));
    },
    [updateCurrentStepData, setCurrentStep],
  );

  const {
    isLoading,
    isSuccess,
    mutate: submit,
    reset: resetSubmitState,
  } = useMutation(async (data) => {
    const response = await fetch(`/api${endpoints[type]}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
  });

  const reset = useCallback(() => {
    setStepsData(INITAL_STEPS_DATA);
    resetSubmitState();
    setCurrentStep(0);
  }, [setStepsData, resetSubmitState, setCurrentStep]);

  useEffect(() => {
    if (currentStep === STEPS.length && !isSuccess) {
      const data = R.mergeAll(stepsData);
      submit(data);
      track('submit', 'cfp', 'form');
    }
  }, [currentStep, isSuccess, stepsData, submit]);
  useEffect(() => {
    if (currentStep < STEPS.length) {
      track('change', 'cfp', 'step', currentStep);
    }
  }, [currentStep]);

  return (
    <Container>
      <Logo>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a target="_blank">
            <DesktopLogoContainer>
              <Image src="/images/desktop-logo.svg" alt="Webconf Logo" width="288" height="332" />
            </DesktopLogoContainer>
            {!isLoading && !isSuccess ? (
              <MobileLogoContainer>
                <Image src="/images/mobile-logo-1.svg" alt="Webconf Logo" width="74" height="74" />
                <hr />
                <Image src="/images/mobile-logo-2.svg" alt="Webconf Logo" width="184" height="64" />
              </MobileLogoContainer>
            ) : null}
          </a>
        </Link>
      </Logo>
      {currentStep < STEPS.length ? (
        <>
          <Progress>
            <h1>¡Proponé tu {messages[type].subject} para WebConf 2021!</h1>
            <ProgressBar>
              {STEPS.map((_, index) => (
                <ProgressStep key={index /* eslint-disable-line react/no-array-index-key */} />
              ))}
              <ProgressFill currentStep={currentStep} />
            </ProgressBar>
            <ProgressArrow currentStep={currentStep} />
          </Progress>
          <Step
            key={currentStep}
            onNext={nextStep}
            onPrevious={previousStep}
            isFirst={currentStep === 0}
            isLast={currentStep === STEPS.length - 1}
            defaultValues={stepsData[currentStep]}
            validationSchema={CurrentStepComponent.validationSchema}
          >
            <CurrentStepComponent type={type} />
          </Step>
        </>
      ) : null}
      {isLoading ? <Submitting /> : null}
      {isSuccess ? <Success onReset={reset} /> : null}
    </Container>
  );
};

CFP.propTypes = {
  type: propTypes.oneOf(['talks', 'workshops']),
};

CFP.defaultProps = {
  type: 'talks',
};
