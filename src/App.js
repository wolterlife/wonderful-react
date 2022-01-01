import React from 'react';
import './normalize.scss';
// import './App.scss'; // delete this line after relocate to react
import { Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Admin from './features/Admin/Admin';
import SignIn from './features/SignIn/SignIn';
import NotFoundPage from './features/NotFoundPage/NotFoundPage';
import Registration from './features/Registration/Registration';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default App;
