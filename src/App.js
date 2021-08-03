import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authOperations } from './redux/auth';

import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])



  return (
      <>
        <AppBar />

        <Suspense fallback = {<h1>Loading...</h1>}>
         <Switch>
          <PublicRoute  exact path="/" component={HomeView} />
           <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
         </Switch>
        </Suspense>

        <ToastContainer autoClose={3700} position="top-center" />
      </>
    );
  }
