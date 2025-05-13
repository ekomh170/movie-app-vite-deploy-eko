import styles from '../components/Movies/Movies.module.css';
import { useState } from 'react';

export default function Counter() {
    const [result, setResult] = useState(0);

    /**
     * Membuat fungsi handleClick1
     * Dijalankan ketika button diklik
     */
    const handleClick1 = () => {
        setResult(result + 1);
    };

    // Menambahkan event click pada button

    return (
        <div>
            <p style={{ textAlign: 'center' }}>Result: {result}</p>
            <button
                type="submit"
                onClick={handleClick1}
                className={styles.button}
                style={{
                    // Ketengahkan button
                    display: 'block',
                    margin: 'auto',
                    // Buat Kebawah Space Dengan Form
                    marginBottom: '20px',
                }}>
                Add
            </button>
        </div>
    );
}
