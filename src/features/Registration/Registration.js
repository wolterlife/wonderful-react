import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormAuthRegistration from '../../components/FormAuthRegistration';

const Registration = () => {
  // FIX THIS REDIRECT
  // SHOULD CHANGE PAGE TO '/', IN PAGES Registration and SignIn
  const navigate = useNavigate();
  const data = localStorage.getItem('currentUser');
  if (data.length !== null) navigate('/');
  return (
    <>
      <Header isSignInVisible={false} isBackLinkVisible />
      <FormAuthRegistration />
      <Footer />
    </>
  );
};

export default Registration;
