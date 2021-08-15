import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% {
    opacity: 0;
    transform: rotate(30deg) scale(1) translateX(0%);
  }
  5% {
    opacity: 1;
  }
  99.5% {
    transform: rotate(30deg) scale(2) translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: rotate(30deg) scale(1) translateX(0%);
    opacity: 0;
  }
`;

const moveMobile = keyframes`
  0% {
    opacity: 0;
    transform: rotate(30deg) scale(1) translateX(0%);
  }
  5% {
    opacity: 1;
  }
  100% {
    transform: rotate(30deg) scale(1.5) translateX(-5%);
    opacity: 1;
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(135deg, #828282ff 20%, #c4c4c400 70%);
  mix-blend-mode: hard-light;
`;

const ActualBackground = styled.div`
  background: url('images/WebConfPattern.png');
  width: 200%;
  height: 250%;
  background-size: 100px;
  transform: rotate(30deg);
  position: absolute;
  left: -50%;
  top: -50%;
  mix-blend-mode: hard-light;
  animation: ${moveMobile} 20s linear forwards;
  filter: brightness(1.15) saturate(1.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 200%;
    background-size: 200px;
    animation: ${move} 60s linear infinite;
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const BackgroundBlur = styled(ActualBackground)`
  filter: blur(5px);
`;

export const Background = (props) => (
  <Container {...props}>
    <Mask>
      <ActualBackground />
    </Mask>
    <BackgroundBlur />
  </Container>
);
