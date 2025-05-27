import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    background-color: ${({ variant, theme }) =>
        theme.colors[variant] || theme.colors.primary};

    // PROPS FULL
    ${({ full }) =>
        full &&
        css`
            display: block;
            width: 100%;
        `}
`;

export default Button;
