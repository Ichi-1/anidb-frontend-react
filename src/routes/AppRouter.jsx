import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { GuestOnlyRoutes } from './GuestOnlyRoutes';
import { UserOnlyRoutes } from './UserOnlyRoutes';

import { NotFound404 } from '../pages/NotFound404';
import { HomePage } from '../pages/HomePage';
import { AccountPage } from '../pages/AccountPage.jsx'
import { AuthorizationPage } from '../pages/AuthorizationPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { PasswordResetPage } from '../pages/PasswordResetPage';



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NotFound404 />} />

                    <Route element={<UserOnlyRoutes />}>
                        <Route path="/account" element={<AccountPage />} />
                    </Route>


                    <Route element={<GuestOnlyRoutes />}>
                        <Route path="/login" element={<AuthorizationPage />} />
                        <Route path="/sign_up" element={<RegistrationPage />} />
                        <Route path="/users/password/reset" element={<PasswordResetPage />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
