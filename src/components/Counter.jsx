// Import hanya useState, hapus useEffect karena tidak dipakai
import { useState } from 'react';
import styles from './Movies/Movies.module.css';

// Fungsi terpisah untuk manipulasi DOM (refactor)
// HAPUS atau KOMENTARI kode yang mengubah document.title
// function manipulateDOM(angka) {
//     document.title = `Result: ${angka}`;
// }

export default function Counter() {
    /**
     * ============================
     * useState - Tanpa Destructuring
     * ============================
     */
    // const stateAngka = useState(0);
    // const angka = stateAngka[0];
    // const setAngka = stateAngka[1];

    // Diganti ke bentuk destructuring agar lebih clean
    const [angka, setAngka] = useState(0);

    // Fungsi untuk menambah angka
    const addAngka = () => {
        setAngka(angka + 1);
        console.log('Tambah angka:', angka + 1);
    };

    /**
     * ============================
     * useEffect - Side Effect (Update Lifecycle)
     * ============================
     * Digunakan untuk menangani efek samping ketika nilai `angka` berubah
     * (contoh: update title dokumen setiap klik tombol).
     */

    // Ini hanya berjalan sekali saat mount, tidak untuk update
    // useEffect(() => {
    //     console.log('Lifecycle: Component dimount');
    //     document.title = `Result: ${angka}`;
    // }, []);

    // Refactor: Gunakan fungsi luar agar lebih modular & testable
    // HAPUS atau KOMENTARI useEffect yang mengubah document.title
    // useEffect(() => {
    //     manipulateDOM(angka);
    // }, [angka]);

    // Ini akan selalu muncul setiap kali komponen dirender
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
 * Penjelasan Lifecycle (Sesuai Gambar)
 * ============================
 * - `useEffect(() => {...}, [angka])` dipanggil setiap kali `angka` berubah.
 * - `console.log("Lifecycle: Component dirender")` muncul di setiap render.
 * - `document.title` adalah contoh efek samping yang bukan bagian dari UI.
 * - Fungsi `manipulateDOM()` digunakan sebagai refactor agar efek bisa dipisah dari hook.
 *
 * Catatan:
 * - useEffect([]) dikomentari sebagai referensi efek sekali jalan (mount only).
 * - Versi sekarang mengikuti refactor sesuai gambar Hero.jsx.
 */
