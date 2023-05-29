import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/authAction';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';

const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../../pages/SignInPage/SignInPage'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? ( <b>Refreshing user...</b> ) : (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
            <Route index element={
                <PrivateRoute>
                <ContactsPage />
                </PrivateRoute>} />
            <Route path="contacts" element={
                <PrivateRoute>
                    <ContactsPage />
                </PrivateRoute>
                }
            />
            <Route path="register" element={
                <PublicRoute>
                    <SignUpPage />
                </PublicRoute>
            }
            />
            <Route path="login" element={
                <PublicRoute>
                    <SignInPage />
                </PublicRoute>
            }
            />
            </Route>
        </Routes>
  );
};