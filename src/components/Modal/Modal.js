import React from 'react';

import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const Modal = ({ largeImage }) => {
  <div className={styles.Overlay}>
    <div className={styles.Modal}>
      <img src={largeImage} alt="" />
    </div>
  </div>;
};

Modal.PropTypes = {
  largeImage: PropTypes.string.isRequired,
};

export default Modal;
