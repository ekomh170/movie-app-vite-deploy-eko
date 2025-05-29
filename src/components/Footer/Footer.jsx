import styled from 'styled-components';

const FooterWrapper = styled.footer`
    width: 100%;
    background: #222;
    color: #fff;
    padding: 2rem 1rem 1rem 1rem;
    border-radius: 0 0 18px 18px;
    box-shadow: 0 2px 8px rgba(76, 187, 23, 0.08);
    text-align: center;
`;
const FooterTitle = styled.h2`
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
`;
const FooterAuthor = styled.p`
    margin-bottom: 0;
    font-size: 1rem;
    color: #e0ffe0;
`;

function Footer() {
    return (
        <FooterWrapper>
            <FooterTitle>Movie App</FooterTitle>
            <FooterAuthor>Created by: Eko Muchamad Haryono</FooterAuthor>
        </FooterWrapper>
    );
}
export default Footer;
