import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
    margin: 24px auto;
    width: 300px;
    padding: 6px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

export const ListTitle = styled.h2`
    display: none
`;

export const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
`;