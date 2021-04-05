import * as R from 'ramda';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Step } from './Step';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import { Step6 } from './Step6';

const STEPS = [Step1, Step2, Step3, Step4, Step5, Step6];
const INITAL_STEPS_DATA = R.map(R.propOr({}, 'defaultStepValues'))(STEPS);

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
  grid-row-gap: 1.5rem;
  grid-column-gap: 4.375rem;
`;

const Logo = styled.div`
  grid-area: logo;
  padding-right: 6rem;
  padding-top: calc(50vh - 226px);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  position: relative;
  height: 1rem;
  margin-top: 1.625rem;
  display: flex;
  flex-direction: row;
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
  margin-top: 0.5rem;
  margin-left: calc(${({ currentStep }) => (100 / STEPS.length) * (currentStep + 1)}% - 0.75rem);
  width: 0;
  height: 0;
  border-left: 0.75rem solid transparent;
  border-right: 0.75rem solid transparent;
  border-bottom: 1.25rem solid ${({ theme }) => theme.colors.cfpProgressArrow};
  will-change: margin-left;
  transition: margin-left 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

export const CFP = () => {
  // eslint-disable-next-line no-unused-vars
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
      setCurrentStep((oldStep) => Math.min(oldStep + 1, STEPS.length - 1));
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

  return (
    <Container>
      <Logo>
        <Image src="/logo.svg" alt="Webconf Logo" width="288" height="332" />
      </Logo>
      <Progress>
        <h1>¡Proponé tu charla para WebConf 2021!</h1>
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
      >
        <CurrentStepComponent />
      </Step>
    </Container>
  );
};
