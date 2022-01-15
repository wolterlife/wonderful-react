import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormChangeUser from './components/FormChangeUser';

const Profile = () => {
  if (localStorage.getItem('currentUser') == null) return <Navigate to="/" />;
  return (
    <>
      <Header isHeaderLinkVisible={false} isBackLinkVisible />
      <FormChangeUser />
      <Footer />
    </>
  );
};

export default Profile;
