import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SignUp from './components/Authontic/SignUp';
import Home from './components/Home';
import { Login } from './components/Authontic/SignUp';
import Protecet from './components/Protected/Protecet';
import Profile from './components/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='userProfile/' element={< Protecet Component={Profile} />} >
        <Route path=':userId'  element={< Protecet Component={Profile} />}/>
        </Route>
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<h1> Not Found</h1>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);


