import styled from 'styled-components';

const StyledImage = styled.img`
    max-width: 100%;
    border-radius: ${({ $rounded }) => ($rounded ? '16px' : '0')};
    box-shadow: ${({ $shadow }) =>
        $shadow ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'};
`;

export default StyledImage;
