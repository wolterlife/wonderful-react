import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserList from '../../components/UserList';

const Admin = () => {
  return (
    <>
      <Header showSignIn={false} showBack />
      <UserList />
      <Footer />
    </>
  );
};

export default Admin;
