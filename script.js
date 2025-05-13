function Header() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function Main() {
    return (
        <main>
            <Hello />
            <Hello />
            <Hello />
            <Hello />
            <Hello />
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <h2>Copyright @Eko Muchamad Haryono</h2>
            <p>Created by React.js</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
