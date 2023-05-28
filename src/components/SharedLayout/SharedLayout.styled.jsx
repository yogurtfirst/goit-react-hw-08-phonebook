import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin: 24px auto;
    width: 300px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid grey;
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    text-decoration: none;
    gap: 12px;
`;

export const Navlink = styled(NavLink)`
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    color: darkblue;
    font-family: 'Raleway';

    &.active {
        color: royalblue;
        border-bottom: 1px solid blue;
    }

    &:hover,
    &:focus {
        color: blue;
    }
`;