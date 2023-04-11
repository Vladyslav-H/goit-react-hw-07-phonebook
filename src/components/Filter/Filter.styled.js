import styled from 'styled-components';

export const Label = styled.label`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  background-color: #f1da8d;

  &:focus {
    background-color: #e4ecfc;
  }
`;
