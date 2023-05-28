import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Raleway';

    & p {
        color: royalblue;
    }
`;

export const Button = styled.button`
    font-weight: 500;
    padding: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    :hover,
    :focus {
        background-color: rgb(35, 149, 207);
        color: white;
    };
`;