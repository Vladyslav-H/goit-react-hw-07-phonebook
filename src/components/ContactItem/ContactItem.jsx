import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import {
  ContactItemStyled,
  ButtonDel,
  ItemWrap,
  ContactWrap,
} from 'components/ContactItem/ContactItem.styled';
import { ItemIconStyled } from 'components/IconStyled/IconStyled';

import { MdPersonRemoveAlt1, MdPerson, MdLocalPhone } from 'react-icons/md';

const ContactItem = ({ name, number, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <ContactItemStyled>
      <ContactWrap>
        <ItemWrap>
          <MdPerson style={ItemIconStyled} /> {name}
        </ItemWrap>
        <ItemWrap>
          <MdLocalPhone style={ItemIconStyled} /> {number}
        </ItemWrap>
      </ContactWrap>
      <ButtonDel type="button" onClick={open}>
        Remove
        <MdPersonRemoveAlt1 style={ItemIconStyled} />
      </ButtonDel>
      {isOpen && <Modal onClose={close} name={name} id={id} />}
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
