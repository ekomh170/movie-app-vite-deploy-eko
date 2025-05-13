import React from 'react';
import ReactDOM from 'react-dom/client';

// Header component
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

// Hello component
function Hello() {
    return <p>Hello, World!</p>;
}

// Main component
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

// Footer component
function Footer() {
    return (
        <footer>
            <h2>Copyright @Eko Muchamad Haryono</h2>
            <p>Created by React.js</p>
        </footer>
    );
}

// Profile component
function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <p>My name is Eko Muchamad Haryono</p>
            <p>I am a software engineer</p>
        </div>
    );
}

// App component
function App() {
    return (
        <div>
            <Header />
            <Profile />
            <Main />
            <Footer />
        </div>
    );
}

// Render the App component
const container = document.getElementById('root'); // Updated to match the "root" ID in index.html
const root = ReactDOM.createRoot(container);
root.render(<App />);
