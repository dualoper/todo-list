import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Todo from './Todo';
import Registration from './Registration';
import Profile from './Profile';
import Navbar from './Navbar';
import NoPage from './NoPage';

const Main = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Todo />} />
          <Route path='profile' element={<Profile />} />
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main;