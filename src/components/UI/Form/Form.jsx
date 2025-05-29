import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    padding: 1.5rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(76, 187, 23, 0.08);
`;

export const Label = styled.label`
    font-weight: 500;
    color: #222;
    margin-bottom: 0.3rem;
`;

export const Input = styled.input`
    padding: 0.5rem 1rem;
    border: 1.5px solid #b2dfdb;
    border-radius: 6px;
    font-size: 1rem;
    background: #f8fff8;
    transition: border 0.2s;
    &:focus {
        border: 1.5px solid #4cbb17;
        outline: none;
    }
`;
