import React from 'react';
import './normalize.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Admin from './features/Admin/Admin';
import SignIn from './features/SignIn/SignIn';
import NotFoundPage from './features/NotFoundPage/NotFoundPage';
import Registration from './features/Registration/Registration';
import Profile from './features/Profile/Profile';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/wonderful-react/" element={<Home />} />
        <Route path="/wonderful-react/admin" element={<Admin />} />
        <Route path="/wonderful-react/registration" element={<Registration />} />
        <Route path="/wonderful-react/signIn" element={<SignIn />} />
        <Route path="/wonderful-react/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default App;
