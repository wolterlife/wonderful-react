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
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default App;
