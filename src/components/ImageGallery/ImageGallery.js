import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import PropTypes from 'prop-types';

import styles from './ImageGallery.module.scss';

const ImageGallery = ({ images }) => {
  <ul className={styles.ImageGallery}>
    {images.map(({ id, image }) => (
      <ImageGalleryItem key={id} image={image} />
    ))}
  </ul>;
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      //   image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
