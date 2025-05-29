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
    background-color: ${({ $variant, theme }) =>
        $variant === 'secondary'
            ? '#b5179e !important'
            : theme.colors[$variant] || theme.colors.primary};
    font-size: ${({ size = 'md' }) => sizeMap[size].fontSize};
    padding: ${({ size = 'md' }) => sizeMap[size].padding};

    // PROPS FULL
    ${({ $full }) =>
        $full &&
        css`
            display: block;
            width: 100%;
        `}

    &:hover {
        border-color: #4cbb17;
        /* background: linear-gradient(90deg, #39ff12 60%, #4cbb17 100%); */
        box-shadow: 0 4px 16px rgba(76, 187, 23, 0.16);
        transform: translateY(-2px) scale(1.04);
    }
`;

export default Button;
