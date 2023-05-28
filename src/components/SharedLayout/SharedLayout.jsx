import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Wrapper, Header, Navlink } from './SharedLayout.styled';

export const SharedLayout = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Wrapper>
            <Header>
                <nav>
                    <Navlink to="/contacts"> Contacts</Navlink>
                </nav>
                <div>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </div>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Wrapper>
    );
};