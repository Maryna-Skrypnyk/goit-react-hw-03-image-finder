import React, { Component } from 'react';

import Layout from '../components/Layout';

// import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';
// import Loader from './Loader';
import Modal from './Modal';
import ButtonIcon from './ButtonIcon';
import { HiOutlineX } from 'react-icons/hi';

// import Button from './Button';

// import Loader from 'react-loader-spinner';

// import PropTypes from 'prop-types';

import styles from './App.module.scss';

class App extends Component {
  state = {
    images: [],
    largeImageURL: '',
    showModal: true,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // addSearch = ({ image }) => {
  //   // const { images } = this.state;

  //   this.setState(({ images }) => ({
  //     images: [image, ...images],
  //   }));
  // };

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    const { images, largeImageURL, showModal } = this.state;

    return (
      <Layout>
        {/* <Searchbar /> */}

        {/* <ImageGallery images={images} onClick={this.toggleModal} /> */}

        {/* {images.length === 0 ? (
          <p>...</p>
        ) : (
          <Button onLoadMore={this.loadMore} />
        )} */}

        {/* {images.length > 0 && <Button onLoadMore={this.loadMore} />} */}

        {/* <Button />
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        /> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
            <ButtonIcon
              className={styles.ButtonIcon}
              onClick={this.toggleModal}
              aria-label="Close image"
            >
              <HiOutlineX />
            </ButtonIcon>
          </Modal>
        )}
      </Layout>
    );
  }
}

export default App;
