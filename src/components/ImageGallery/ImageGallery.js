import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import PropTypes from 'prop-types';

import styles from './ImageGallery.module.scss';

const ImageGallery = ({ images }) => {
  <ul className={styles.ImageGallery}>
    {images.map(({ id, image, onClickItem }) => (
      <ImageGalleryItem key={id} image={image} onClick={onClickItem} />
    ))}
  </ul>;
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      //   image: PropTypes.string.isRequired,
      onClickItem: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
