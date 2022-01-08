import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormAuthSignIn from '../../components/FormAuthSignIn';

const SignIn = () => {
  return (
    <>
      <Header isSignInVisible={false} isBackLinkVisible />
      <FormAuthSignIn />
      <Footer />
    </>
  );
};

export default SignIn;
