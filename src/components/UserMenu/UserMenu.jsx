import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../redux/auth/authAction';
import { resetContacts } from '../../redux/contacts/contactsSlice';
import { resetFilter } from '../../redux/contacts/filterSlice';
import { UserMenuWrapper, Button } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogout = () => {
        dispatch(resetFilter());
        dispatch(resetContacts());
        dispatch(logout());
    }

    return (
        <UserMenuWrapper>
            <p> <b> {user.name}</b> </p>
            <Button
                type="button"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </UserMenuWrapper>
    );
};