import styled from 'styled-components';

const StyledMovie = styled.div`
    margin-bottom: 1rem;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 16px rgba(76, 187, 23, 0.08),
        0 1.5px 6px rgba(0, 0, 0, 0.04);
    padding: 1.2rem 1rem 1.5rem 1rem;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        transform: translateY(-4px) scale(1.03);
        box-shadow: 0 8px 32px rgba(76, 187, 23, 0.16),
            0 3px 12px rgba(0, 0, 0, 0.08);
    }
    img {
        border-radius: 16px;
        max-width: 100%;
        height: 320px;
        object-fit: cover;
        margin-bottom: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
    h3 {
        color: #222;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        text-align: center;
    }
    p {
        color: #64748b;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    @media (min-width: 768px) {
        flex-basis: 50%;
    }
    @media (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
    }
`;

export default StyledMovie;
