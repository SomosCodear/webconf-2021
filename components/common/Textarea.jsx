import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.textareaBackground};
  border: 0.0625rem solid ${({ theme }) => theme.colors.textareaBorder};
  border-radius: 1rem;
  font-size: 1.375rem;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textareaPlaceholder};
  }
`;
