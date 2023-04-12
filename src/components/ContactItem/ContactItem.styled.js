import styled from 'styled-components';

export const ButtonDel = styled.div`
  width: 100px;
  margin-left: 20px;
  padding: 4px;
  display: flex;
  justify-content: space-around;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffc459;
  background-color: red;
  box-shadow: 4px 0px 16px -2px rgba(0, 0, 0, 0.5);
  transition: all 250ms linear;

  &:hover {
    background-color: black;
    color: red;
    transform: scale(1.05);
  }
`;

export const ContactItemStyled = styled.li`
  position: relative;
  min-width: 300px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 0px 11px -5px rgba(0, 0, 0, 0.75);

  &:nth-child(4n + 1) {
    background-color: #c4dfe6;
    color: #003b46;
  }
  &:nth-child(4n + 2) {
    background-color: #66a5ad;
    color: #07575b;
  }
  &:nth-child(4n + 3) {
    background-color: #07575b;
    color: #66a5ad;
  }
  &:nth-child(4n + 4) {
    background-color: #003b46;
    color: #c4dfe6;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemWrap = styled.div`
  display: flex;

  gap: 5px;
`;
export const ContactWrap = styled(ItemWrap)`
  flex-direction: column;
`;
