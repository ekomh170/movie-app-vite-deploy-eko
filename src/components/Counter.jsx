// Counter.js

// Import useState dan useEffect untuk menggunakan state dan side effect.
import { useState, useEffect } from 'react';
import styles from './Movies/Movies.module.css';

export default function Counter() {
    /**
     * ============================
     * useState - Tanpa Destructuring
     * ============================
     */
    // useState mengembalikan sepasang value
    const stateAngka = useState(0);

    // Menyimpan state dari index 0
    const angka = stateAngka[0];

    // Menyimpan fungsi dari index 1
    const setAngka = stateAngka[1];

    // Fungsi untuk menambah angka
    const addAngka = () => {
        setAngka(angka + 1);
        console.log('Tambah angka:', angka + 1);
    };

    /**
     * ============================
     * useEffect - Side Effect
     * ============================
     * Menjalankan useEffect untuk melakukan side effect.
     * Parameter pertama (callback):
     * - Dijalankan setelah render (lifecycle mount dan update)
     */
    useEffect(() => {
        console.log('Lifecycle: Component dimount');
    });

    console.log('Lifecycle: Component dirender');

    return (
        <div>
            {/* Menampilkan angka */}
            <p style={{ textAlign: 'center' }}>Result: {angka}</p>

            {/* Tombol untuk menambah angka */}
            <button
                onClick={addAngka}
                className={styles.button}
                style={{
                    display: 'block',
                    margin: 'auto',
                    marginBottom: '20px',
                }}>
                Add
            </button>
        </div>
    );
}

/**
 * ============================
 * Destructuring Array - useState
 * ============================
 * useState mengembalikan sepasang value
 * Melakukan destructuring array untuk mengambil value.
 *
 * const [angka, setAngka] = useState(0);
 */
