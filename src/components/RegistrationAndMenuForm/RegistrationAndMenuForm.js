import React from 'react';
import './RegistrationAndMenuForm.scss';
import FormAuthRegistration from '../FormAuthRegistration';
import FormAddMenu from '../FormAddMenu';

const RegistrationAndMenuForm = () => {
  return (
    <div className="registration-menu-form">
      <FormAuthRegistration />
      <FormAddMenu />
    </div>
  );
};

export default RegistrationAndMenuForm;
