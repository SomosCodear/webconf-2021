import * as R from 'ramda';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { Step1 } from './Step1';
import { Step } from './Step';

const STEPS = [
  Step1,
  Step1,
  Step1,
  Step1,
  Step1,
];
const INITAL_STEPS_DATA = [
  { acceptTerms: false },
  { acceptTerms: false },
  { acceptTerms: false },
  { acceptTerms: false },
  { acceptTerms: false },
];

const Container = styled.main`
  min-height: 100%;
  padding: 3.75rem 7.5rem;
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    'logo progress'
    'logo   step  ';
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr;
  grid-gap: 4.375rem;
`;

const Logo = styled.div`
  grid-area: logo;
  padding-right: 6rem;
  padding-top: calc(50vh - 226px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 0.062rem solid ${({ theme }) => theme.colors.separator};
`;

const Progress = styled.header`
  grid-area: progress;

  h1 {
    color: ${({ theme }) => theme.colors.cfpProgressTitle};
    font-size: 1.625rem;
    font-weight: 900;
  }
`;

const ProgressBar = styled.div`
  height: 1rem;
  margin-top: 1.625rem;
  display: flex;
  flex-direction: row;
`;

const completeStyle = css`
  background-color: ${({ theme }) => theme.colors.cfpProgressCompletedStepBackground};
  border-color: ${({ theme }) => theme.colors.cfpProgressCompletedStepBorder};
`;

const ProgressBit = styled.div`
  flex: 1;
  border: 0.062rem solid ${({ theme }) => theme.colors.cfpProgressIncompleteStepBorder};
  ${({ completed }) => (completed ? completeStyle : '')}

  & + & {
    border-left: none;
  }
`;

const ProgressArrow = styled.div`
  margin-top: 0.5rem;
  margin-left: calc(${({ currentStep }) => (100 / STEPS.length) * (currentStep + 1)}% - 0.75rem);
  width: 0;
  height: 0;
  border-left: 0.75rem solid transparent;
  border-right: 0.75rem solid transparent;
  border-bottom: 1.25rem solid ${({ theme }) => theme.colors.cfpProgressArrow};
`;

export const CFP = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsData, setStepsData] = useState(INITAL_STEPS_DATA);
  const CurrentStepComponent = STEPS[currentStep];

  const updateCurrentStepData = useCallback((data) => {
    setStepsData((oldStepsData) => R.update(currentStep, data, oldStepsData));
  }, [currentStep, setStepsData]);
  const nextStep = useCallback((data) => {
    updateCurrentStepData(data);
    setCurrentStep((oldStep) => Math.min(oldStep + 1, STEPS.length - 1));
  }, [updateCurrentStepData, setCurrentStep]);
  const previousStep = useCallback((data) => {
    if (data) {
      updateCurrentStepData(data);
    }
    setCurrentStep((oldStep) => Math.max(oldStep - 1, 0));
  }, [updateCurrentStepData, setCurrentStep]);

  return (
    <Container>
      <Logo>
        <Image src="/logo.svg" alt="Webconf Logo" width="288" height="332" />
      </Logo>
      <Progress>
        <h1>¡Proponé tu charla para WebConf 2021!</h1>
        <ProgressBar>
          {STEPS.map((_, index) => (
            <ProgressBit
              key={index /* eslint-disable-line react/no-array-index-key */}
              completed={index <= currentStep}
            />
          ))}
        </ProgressBar>
        <ProgressArrow currentStep={currentStep} />
      </Progress>
      <Step
        key={currentStep}
        onNext={nextStep}
        onPrevious={previousStep}
        isFirst={currentStep === 0}
        isLaste={currentStep === STEPS.length - 1}
        defaultValues={stepsData[currentStep]}
      >
        <CurrentStepComponent />
      </Step>
    </Container>
  );
};
