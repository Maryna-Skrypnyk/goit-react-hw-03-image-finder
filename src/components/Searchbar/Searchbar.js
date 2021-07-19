import React from 'react';

import PropTypes from 'prop-types';

import ButtonIcon from '../ButtonIcon';
import { HiOutlineSearch } from 'react-icons/hi';

import styles from './Searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <ButtonIcon type="submit" aria-label="Search images">
        <HiOutlineSearch />
      </ButtonIcon>

      {/* <button type="submit" className={styles.SearchFormButton}>
        <HiOutlineSearch />
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button> */}

      <input
        className={styles.SearchFormInput}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>;
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
