import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} className={styles.Button}>
    Load More
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
