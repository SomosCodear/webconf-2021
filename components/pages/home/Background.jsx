import styled from 'styled-components';
import propTypes from 'prop-types';

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
  filter: brightness(1.15) saturate(1.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 200%;
    background-size: 200px;
  }
`;

const BackgroundBlur = styled(ActualBackground)`
  filter: blur(5px);
`;

export const Background = ({ hideBlur = false, ...props }) => (
  <Container {...props}>
    <Mask>
      <ActualBackground />
    </Mask>
    {hideBlur ? '' : <BackgroundBlur />}
  </Container>
);

Background.propTypes = {
  hideBlur: propTypes.bool,
};

Background.defaultProps = {
  hideBlur: false,
};
