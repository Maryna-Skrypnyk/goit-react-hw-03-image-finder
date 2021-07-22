import React, { Component } from 'react';
// import axios from 'axios';
import imagesAPI from '../api/images-api';

import { ToastContainer, toast, Zoom } from 'react-toastify';

import Layout from '../components/Layout';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoaderSpinner from './LoaderSpinner';
import Modal from './Modal';
import ButtonIcon from './ButtonIcon';
import { HiOutlineX } from 'react-icons/hi';
import Button from './Button';

import { animateScroll as scroll } from 'react-scroll';

// import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';

import styles from './App.module.scss';

class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
    page: 1,
    largeImageURL: '',
    tags: '',
    showModal: false,
    error: null,
    // status: 'idle',
    message: '',
  };

  // componentDidMount() {
  //   (async () => {
  //     try {
  //       this.setState({ loading: true });
  //       const imagesList = await imagesAPI
  //         .fetchImages
  //         // this.state.searchQuery,
  //         // this.state.page,
  //         ();
  //       this.setState({ images: imagesList, loading: false });
  //     } catch (error) {
  //       this.setState({ error: 'error', loading: false });
  //     }
  //   })();
  // }

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   imagesAPI
  //     .fetchImages()
  //     .then(response => {
  //       this.setState({ images: response.data.hits });
  //     })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], page: 0, error: null });
      this.renderImagesList();
    }
  }

  renderImagesList = async () => {
    const { searchQuery, page } = this.state;

    try {
      this.setState({ loading: true });
      const imagesList = await imagesAPI.fetchImages(searchQuery, page);

      this.setState(({ images, page }) => ({
        images: [...images, ...imagesList],
        page: page + 1,
        loading: false,
      }));

      if (imagesList.length === 0) {
        return toast.warn('There are no images on request', {
          position: 'top-center',
          transition: Zoom,
          style: { top: 60, textAlign: 'center' },
        });
      }
    } catch (error) {
      this.setState({
        error: 'Whoops, something went wrong. Enter your request again',
        loading: false,
      });
    }
  };

  scroll = () => {
    scroll.scrollToBottom();
  };

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMore = () => {
    // const { page } = this.state;
    // this.setState({ page: page + 1 });
    this.renderImagesList();
    this.scroll();
  };

  render() {
    const { images, tags, largeImageURL, showModal, loading, error } =
      this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loading && <LoaderSpinner />}
        {images.length > 0 && !error && (
          <ImageGallery images={images} onClickImg={this.toggleModal} />
        )}

        {images.length > 11 && !error && <Button onLoadMore={this.loadMore} />}

        {/* <Button onLoadMore={this.loadMore} /> */}

        {images.length === 0 && <h1>{this.state.message}</h1>}
        {/* <h1>{this.state.message}</h1> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
            <ButtonIcon
              className={styles.ButtonIcon}
              onClick={this.toggleModal}
              aria-label="Close image"
            >
              <HiOutlineX />
            </ButtonIcon>
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </Layout>
    );
  }
}

export default App;
