import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormAuthRegistration from '../../components/FormAuthRegistration';

const Registration = () => {
  if (localStorage.getItem('currentUser') !== null) return <Navigate to="/" />;
  return (
    <>
      <Header isHeaderLinkVisible={false} isBackLinkVisible />
      <FormAuthRegistration />
      <Footer />
    </>
  );
};

export default Registration;
