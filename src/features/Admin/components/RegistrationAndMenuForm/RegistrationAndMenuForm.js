import React from 'react';
import './RegistrationAndMenuForm.scss';
import FormAuthRegistration from '../../../../components/FormAuthRegistration';
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
