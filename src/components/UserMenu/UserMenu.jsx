import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../redux/auth/authAction';
import { UserMenuWrapper, Button } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <UserMenuWrapper>
            <p> <b> {user.name}</b> </p>
            <Button
                type="button"
                onClick={() => dispatch(logout())}
            >
                Logout
            </Button>
        </UserMenuWrapper>
    );
};