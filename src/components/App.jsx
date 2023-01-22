import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/sharedLayout';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { getIsRefreshing } from 'redux/auth/selectors';
import { PrivatRoute } from './privatRoute';
import { RestrictedRoute } from './restrictedRoute';
import { lazy } from 'react';



const Homepage = lazy(() => import('../pages/homepage/homepage') )
const LoginPage = lazy(() => import('../pages/login/loginPage') )
const RegisterPage = lazy(() => import('../pages/register/registerPage') )
const Phonebook = lazy(() => import('../pages/phonebook/phonebook'))

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>User refreshing</p>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route
          path="/contacts"
          element={
            <PrivatRoute redirectTo="/login" component={<Phonebook />} />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
