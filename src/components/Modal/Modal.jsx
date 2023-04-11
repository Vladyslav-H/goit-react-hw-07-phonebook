import { useDispatch } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/contacts/operations';
import { CiFaceFrown, CiFaceSmile } from 'react-icons/ci';

import {
  ModalWrapp,
  BtnN,
  BtnY,
  ButtonWrapp,
} from './Modal.styled';

import { ModalIconStyled } from 'components/IconStyled/IconStyled';

const Modal = ({ id, onClose, name }) => {
  const dispatch = useDispatch();

  const removeItemCont = id => {
    dispatch(deleteContacts(id))
      .then(() => dispatch(getContacts()))
      .then(() => onClose())
      .catch(e => console.error(e.message));
  };

  return (
    <ModalWrapp>
      <h4>
        You wont to remove <span>'{name}'</span>!
      </h4>
      Are you sure?
      <ButtonWrapp>
        <BtnN type="button" onClick={onClose}>
          <span> No</span> <CiFaceSmile style={ModalIconStyled} />
        </BtnN>
        <BtnY type="button" onClick={() => removeItemCont(id)}>
          <CiFaceFrown style={ModalIconStyled} />
          <span>Yes</span>
        </BtnY>
      </ButtonWrapp>
    </ModalWrapp>
  );
};
export default Modal;
