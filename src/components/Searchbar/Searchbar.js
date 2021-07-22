import React, { Component } from 'react';
import { toast, Zoom } from 'react-toastify';
import PropTypes from 'prop-types';

import ButtonIcon from '../ButtonIcon';
import { HiOutlineSearch } from 'react-icons/hi';

import styles from './Searchbar.module.scss';

// const INITIAL_STATE = {
//   searchQuery: '',
// };

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchQuery: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      return toast.warn('Enter your request', {
        position: 'top-center',
        transition: Zoom,
        style: { top: 60, textAlign: 'center' },
      });
    }

    this.props.onSubmit(searchQuery);

    // this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <ButtonIcon type="submit" aria-label="Search images">
            <HiOutlineSearch />
          </ButtonIcon>

          <input
            className={styles.SearchFormInput}
            type="text"
            value={searchQuery}
            onChange={this.handleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
