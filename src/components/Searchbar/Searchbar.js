import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from '../ButtonIcon';
import { HiOutlineSearch } from 'react-icons/hi';

import styles from './Searchbar.module.scss';

const Searchbar = ({ handleSubmit, handleChange, searchQuery }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <ButtonIcon type="submit" aria-label="Search images">
          <HiOutlineSearch />
        </ButtonIcon>

        <input
          className={styles.SearchFormInput}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

// handleChange = e => {
//   const { value } = e.target;
//   this.setState({ searchQuery: value.toLowerCase() });
// };

// handleSubmit = e => {
//   e.preventDefault();

//   const { searchQuery } = this.state;

//   if (searchQuery.trim() === '') {
//     return toast.warn('Enter your request', {
//       position: 'top-center',
//       transition: Zoom,
//       style: { top: 60, textAlign: 'center' },
//     });
//   }

//   this.props.onSubmit(searchQuery);

//   // this.reset();
// };

// reset = () => {
//   this.setState({ searchQuery: '' });
// };

// render() {
//   const { searchQuery } = this.state;

export default Searchbar;
