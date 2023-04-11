import styled from 'styled-components';

export const FormStyled = styled.form`
  position: relative;
  width: 400px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: #e0a219;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`;

export const Button = styled.button`
  min-width: 150px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #ffc459;
  background-color: #008630;
  font-size: 18px;
  box-shadow: 4px 0px 10px -2px rgba(0, 0, 0, 0.75);
  transition: all 250ms linear;

  &:hover {
    color: #008630;
    background-color: #ffc459;
    transform: scale(1.05);
  }
`;

export const Label = styled.label`
  color: #50322c;
  font-size: 22px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  margin-left: 30px;
  background-color: #f1da8d;

  &:focus {
    background-color: #e4ecfc;
  }
`;
