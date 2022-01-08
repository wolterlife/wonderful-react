import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserList from '../../components/UserList';
import PromoAll from '../../components/PromoAll';
import RegistrationAndMenuForm from '../../components/RegistrationAndMenuForm';
import ItemsList from '../../components/ItemsList';

const Admin = () => {
  return (
    <>
      <Header showSignIn={false} showBack />
      <UserList />
      <RegistrationAndMenuForm />
      <ItemsList />
      <PromoAll />
      <Footer />
    </>
  );
};

export default Admin;
