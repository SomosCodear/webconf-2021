import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 900;
  line-height: 80%;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.landingSectionTitle};
  padding: 0 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0;
    font-size: 6.25rem;
  }
`;

const FirstUnderline = styled.div`
  height: 0.75rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.landingSectionTitleUnderline};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 1.25rem;
  }
`;

const SecondUnderline = styled.div`
  height: 0.375rem;
  margin-top: 0.125rem;
  width: 45%;
  background: ${({ theme }) => theme.colors.landingSectionTitleUnderlineAccent};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 0.625rem;
    margin-top: 0.25rem;
  }
`;

export const SectionTitle = ({ children, ...props }) => (
  <Container {...props}>
    <Title>{children}</Title>
    <FirstUnderline />
    <SecondUnderline />
  </Container>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
