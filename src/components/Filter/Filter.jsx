import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filter/filterSlice';

import { FilterWrapper, Text, Input } from '../../styled';

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = event => dispatch(changeFilter(event.target.value));

  return (
    <FilterWrapper>
      <Text>Find contacts by name</Text>
      <Input onChange={onChangeFilter}></Input>
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
