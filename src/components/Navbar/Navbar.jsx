import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: 0 2px 16px rgba(76, 187, 23, 0.1);
    border-radius: 0 0 18px 18px;
    margin-bottom: 2rem;
    padding: 1.2rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 100;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1.2rem 4rem;
    }
`;
const Brand = styled.div`
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: 2.5px;
    color: #fff;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
    margin-bottom: 1rem;
    padding: 0.3em 1.2em;
    background: rgba(76, 187, 23, 0.92);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(76, 187, 23, 0.13);
    display: inline-block;
    font-family: 'Montserrat', 'Inter', sans-serif;
    letter-spacing: 2px;
    transition: background 0.2s;
    &:hover {
        background: #39ff12;
        color: #222;
    }
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;
const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 0;
    }
`;
const NavItem = styled.li`
    margin-bottom: 0.5rem;
    @media (min-width: 768px) {
        margin: 0 1.2rem;
    }
    @media (min-width: 992px) {
        margin: 0 2rem;
    }
`;
const NavLink = styled.a`
    text-decoration: none;
    color: #fff !important;
    font-size: 1.08rem;
    font-weight: 600;
    padding: 0.45em 1.2em;
    border-radius: 8px;
    background: transparent;
    transition: color 0.2s, background 0.2s, box-shadow 0.2s;
    box-shadow: none;
    display: inline-block;
    position: relative;
    &:hover,
    &:focus {
        color: #222 !important;
        background: #e0ffe0;
        box-shadow: 0 2px 12px rgba(76, 187, 23, 0.13);
        outline: none;
    }
    &::after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 0%;
        height: 2px;
        background: #fff;
        transition: width 0.3s;
    }
    &:hover::after,
    &:focus::after {
        width: 60%;
        background: #4cbb17;
    }
`;

export default function Navbar() {
    return (
        <NavbarWrapper>
            <Brand>Movie App</Brand>
            <NavList>
                <NavItem>
                    <Link as={NavLink} to="/">
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link as={NavLink} to="/add-movie">
                        Add Movie
                    </Link>
                </NavItem>
                <NavItem>
                    <Link as={NavLink} to="/popular">
                        Popular
                    </Link>
                </NavItem>
                <NavItem>
                    <Link as={NavLink} to="/now-playing">
                        Now Playing
                    </Link>
                </NavItem>
                <NavItem>
                    <Link as={NavLink} to="/top-rated">
                        Top Rated
                    </Link>
                </NavItem>
            </NavList>
        </NavbarWrapper>
    );
}
