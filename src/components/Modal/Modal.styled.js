import styled from 'styled-components';

export const ModalWrapp = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  min-height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  color: #fcf189;
  background-color: #ff6666;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
`;

export const ButtonWrapp = styled.div`
  display: flex;
  gap: 40px;
`;

export const Btn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-weight: 700;
  color: white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.2;
  }
`;

export const BtnY = styled(Btn)`
  &:hover {
    color: #cc0000;
  }
`;
export const BtnN = styled(Btn)`
  &:hover {
    color: #00ff00;
  }
`;


