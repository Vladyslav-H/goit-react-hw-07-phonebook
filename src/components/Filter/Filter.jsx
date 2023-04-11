import { add } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <Label>
      <span> Find contacts by name</span>
      <Input
        type="text"
        placeholder="search"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={e => dispatch(add(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
