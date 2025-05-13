import React from 'react';

function Hello(props) {
    const { name } = props;
    return (
        <div>
            <h2>Hello React</h2>
            <p>
                Saya {name} - Mahasiswa Sekolah Tinggi Teknologi Terpadu Nurul
                Fikri
            </p>
        </div>
    );
}

export default Hello;
