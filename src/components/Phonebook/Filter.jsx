import PropTypes from 'prop-types';

export const Filter = ({ hendleChangeFilter, filter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={hendleChangeFilter}
        value={filter}
      />
    </div>
  );
};
Filter.propTypes = {
  hendleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
