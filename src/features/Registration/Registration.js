import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormAuthRegistration from '../../components/FormAuthRegistration';

const Registration = () => {
  return (
    <>
      <Header isSignInVisible={false} isBackLinkVisible />
      <FormAuthRegistration />
      <Footer />
    </>
  );
};

export default Registration;
