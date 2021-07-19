import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  // state = {
  //   largeImageURL: '',
  // };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleEventOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    // const { largeImageURL } = this.state;

    return createPortal(
      <div className={styles.Overlay} onClick={this.handleEventOverlay}>
        <div className={styles.Modal}>
          {this.props.children}
          {/* <img src={largeImage} alt="" /> */}
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
