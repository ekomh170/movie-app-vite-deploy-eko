import styled, { css } from 'styled-components';

const sizeMap = {
    sm: {
        fontSize: '0.8rem',
        padding: '0.2rem 0.5rem',
    },
    md: {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
    },
    lg: {
        fontSize: '1.3rem',
        padding: '0.5rem 1rem',
    },
};

const Button = styled.button`
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    background-color: ${({ variant, theme }) =>
        theme.colors[variant] || theme.colors.primary};
    font-size: ${({ size = 'md' }) => sizeMap[size].fontSize};
    padding: ${({ size = 'md' }) => sizeMap[size].padding};

    // PROPS FULL
    ${({ full }) =>
        full &&
        css`
            display: block;
            width: 100%;
        `}
`;

export default Button;
