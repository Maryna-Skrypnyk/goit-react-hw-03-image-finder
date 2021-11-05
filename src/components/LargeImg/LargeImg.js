import React from 'react';
import PropTypes from 'prop-types';

import styles from './LargeImg.module.scss';

const LargeImg = ({ largeImageURL, tags }) => {
  return <img src={largeImageURL} alt={tags} className={styles.LargeImg} />;
};

LargeImg.defaultProps = {
  largeImageURL: 'no image',
};

LargeImg.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default LargeImg;
