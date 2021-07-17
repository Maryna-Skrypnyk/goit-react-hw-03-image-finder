import React, { Component } from 'react';

import Layout from '../components/Layout';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import Loader from './Loader';
import Modal from './Modal';
import Button from './Button';

import Loader from 'react-loader-spinner';

import './App.module.scss';

// class App extends Component {
//   // state = {
//   //   images: [],
//   //   // filter: '',
//   // };

//   // addSearch = ({ image }) => {
//   //   // const { images } = this.state;

//   //   this.setState(({ images }) => ({
//   //     images: [image, ...images],
//   //   }));
//   // };

//   // changeFilter = e => {
//   //   this.setState({ filter: e.target.value });
//   // };

//   // getVisibleContacts = () => {
//   //   const { contacts, filter } = this.state;

//   //   const normalizedFilter = filter.toLowerCase();
//   //   return contacts.filter(contact =>
//   //     contact.name.toLowerCase().includes(normalizedFilter),
//   //   );
//   // };

//   // getVisibleContactsSortByName = () => {
//   //   const visibleContacts = this.getVisibleContacts();

//   //   const visibleContactsSortByName = visibleContacts.sort((a, b) => {
//   //     const nameA = a.name.toUpperCase();
//   //     const nameB = b.name.toUpperCase();

//   //     if (nameA < nameB) {
//   //       return -1;
//   //     }
//   //     if (nameA > nameB) {
//   //       return 1;
//   //     }
//   //     return 0;
//   //   });

//   //   return visibleContactsSortByName;
//   // };

//   // deleteContact = contactId => {
//   //   this.setState(({ contacts }) => ({
//   //     contacts: contacts.filter(contact => contact.id !== contactId),
//   //   }));
//   // };

//   // componentDidMount() {
//   //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//   //   if (parsedContacts) {
//   //     this.setState({ contacts: parsedContacts });
//   //   }
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.contacts !== prevState.contacts) {
//   //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   //   }
//   // }

//   render() {
//     // const { images } = this.state;

//     // const filteredContacts = this.getVisibleContactsSortByName();

//     return (
//       <Layout>
//         <Searchbar />

//         <ImageGallery />

//         {/* {images.length === 0 ? (
//           <p>...</p>
//         ) : (
//           <Button onLoadMore={this.loadMore} />
//         )} */}

//         {/* {images.length > 0 && <Button onLoadMore={this.loadMore} />} */}

//         <Button />
//         <Loader
//           type="Puff"
//           color="#00BFFF"
//           height={100}
//           width={100}
//           timeout={3000} //3 secs
//         />

//         <Modal />
//       </Layout>
//     );
//   }
// }

const App = () => {
  return (
    <Layout>
      <Searchbar />

      <ImageGallery />

      {/* {images.length === 0 ? (
          <p>...</p>
        ) : (
          <Button onLoadMore={this.loadMore} />
        )} */}

      {/* {images.length > 0 && <Button onLoadMore={this.loadMore} />} */}

      <Button />
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />

      <Modal />
    </Layout>
  );
};

export default App;
