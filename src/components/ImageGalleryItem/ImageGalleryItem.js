import React from 'react';

import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ image }) => {
  <li className={styles.ImageGalleryItem}>
    <img src={image} alt="" className={styles.ImageGalleryItemImage} />
  </li>;
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  // onClickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
