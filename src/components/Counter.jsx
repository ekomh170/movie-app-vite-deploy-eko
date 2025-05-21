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
    // const stateAngka = useState(0);
    // const angka = stateAngka[0];
    // const setAngka = stateAngka[1];

    // ✅ Diganti ke bentuk destructuring agar lebih clean
    const [angka, setAngka] = useState(0);

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

    // ❌ useEffect hanya jalan saat mount → tidak bereaksi terhadap angka
    // useEffect(() => {
    //     console.log('Lifecycle: Component dimount');
    //     document.title = `Result: ${angka}`;
    // }, []);

    // ✅ Perubahan baru: efek dijalankan setiap kali angka berubah
    useEffect(() => {
        console.log('Lifecycle: Component dimount or update'); // ✅ bisa digunakan untuk mount & update
        document.title = `Result: ${angka}`; // ✅ akses DOM: ubah title dokumen
    }, [angka]); // ✅ efek dijalankan saat angka berubah

    // ✅ Ini selalu dicetak setiap kali komponen dirender (baik saat mount maupun update)
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
 *
 * ============================
 * Penjelasan Lifecycle (Sesuai Gambar)
 * ============================
 * - console.log("Lifecycle: Component dirender") akan muncul setiap render.
 * - useEffect(() => {...}, [angka]) dijalankan setiap kali angka berubah.
 * - document.title adalah contoh side effect: akses DOM (bukan bagian dari UI langsung).
 *
 * Catatan Perubahan:
 * - useEffect yang hanya dijalankan saat mount (dengan []) dikomentari sebagai referensi.
 * - useEffect aktif sekarang berjalan setiap kali `angka` berubah.
 */
