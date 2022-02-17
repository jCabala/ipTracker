import styled, { ThemeConsumer } from 'styled-components';

export const StyledInput = styled.input`
  margin-top: 10px;
  height: 50px;
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.input};
  padding-left: 15px;
  &:focus {
    border: none;
    outline: none;
  }
  margin-left: 50px;
`;

export const InputForm = styled.form`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputButton = styled.button`
  height: 50px;
  width: 50px;
  position: relative;
  right: 50px;
  top: 5px;
  border: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  background: ${({ theme }) => theme.colors.veryDarkGrey};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;
