import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './redux/reducer/index'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SignUp from './components/Authontic/SignUp';
// import Electronic from './components/Electronic/Electronic';
import Faishon from './components/Faishon';
import Gadgets from './components/Electronic/Gadgets';
import Home from './components/Home';
import { Login } from './components/Authontic/SignUp';
import Protecet from './components/Protected/Protecet';
// const store =createStore(rsootReducer);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
      <Route path='electric/' element={< Protecet Component={Gadgets} />}>
        <Route path=':productType' element={<Gadgets />} />
      </Route>
      <Route path='faishon' element={< Protecet Component={Faishon} />} />
      <Route path='*' element={<h1> Not Found</h1>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  // <Provider>
  <RouterProvider router={router} />
  /* </Provider> */
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
