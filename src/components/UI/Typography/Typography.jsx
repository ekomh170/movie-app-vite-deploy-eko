import styled from 'styled-components';

export const Heading = styled.h1`
    font-weight: 700;
    color: #222;
    margin-bottom: 0.5em;
    font-size: ${({ level }) => {
        switch (level) {
            case 1:
                return '2.5rem';
            case 2:
                return '2rem';
            case 3:
                return '1.5rem';
            case 4:
                return '1.2rem';
            case 5:
                return '1rem';
            default:
                return '2rem';
        }
    }};
`;

export const Paragraph = styled.p`
    color: #444;
    font-size: 1rem;
    margin-bottom: 1em;
`;
