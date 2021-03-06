import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserList from './components/UserList';
import PromoAll from './components/PromoAll';
import RegistrationAndMenuForm from './components/RegistrationAndMenuForm';
import MenuTable from './components/MenuTable';
import OrderList from './components/OrderList';

const Admin = () => {
  return (
    <>
      <Header isHeaderLinkVisible={false} isBackLinkVisible />
      <UserList />
      <OrderList />
      <RegistrationAndMenuForm />
      <MenuTable />
      <PromoAll />
      <Footer />
    </>
  );
};

export default Admin;
