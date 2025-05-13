// Header, Profile, Main, and Footer components
import React from 'react';
import './App.css';
import Hello from './components/Hello';

// App component
function App() {
    return (
        <div>
            <h2>This Is Create React App</h2>
            {/* Hello komponen Belajar Frontend */}
            <Hello name="Eko Muchamad Haryono" />
            {/* <Hello name="Friends - Muhammad Akbar Maulana" /> */}
        </div>
    );
}

export default App;
