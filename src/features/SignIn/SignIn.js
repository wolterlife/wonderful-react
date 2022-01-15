import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormAuthSignIn from '../../components/FormAuthSignIn';

const SignIn = () => {
  if (localStorage.getItem('currentUser') !== null) return <Navigate to="/" />;
  return (
    <>
      <Header isHeaderLinkVisible={false} isBackLinkVisible />
      <FormAuthSignIn />
      <Footer />
    </>
  );
};

export default SignIn;
