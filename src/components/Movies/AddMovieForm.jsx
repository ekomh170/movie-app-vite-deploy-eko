import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './MovieForm.module.css';
import Alert from '../Alert/Alert';

export default function AddMovieForm({ movies, setMovies }) {
    // Menambahkan atribut name di setiap input.
    // Tujuannya agar fungsi mengupdate state berdasarkan name.
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        poster: '',
        type: 'Movie',
    });

    const [errors, setErrors] = useState({
        title: false,
        date: false,
        poster: false,
    });

    // Handler tunggal berdasarkan atribut name
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // Validasi input
    function validate() {
        const newErrors = {
            title: formData.title === '',
            date: formData.date === '',
            poster: formData.poster === '',
        };
        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    }

    // Tambah movie baru
    function addMovie() {
        const newMovie = {
            id: nanoid(),
            title: formData.title,
            year: formData.date,
            type: formData.type,
            poster: formData.poster,
        };
        setMovies([...movies, newMovie]);
        resetForm();
    }

    // Reset form ke awal
    function resetForm() {
        setFormData({
            title: '',
            date: '',
            poster: '',
            type: 'Movie',
        });
    }

    // Submit form
    function handleSubmit(e) {
        e.preventDefault();
        validate() && addMovie();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.formContainer}
            style={{ marginBottom: '20px' }}>
            {/* Menambahkan atribut name untuk mengaitkan input dengan state */}
            <input
                id="title"
                type="text"
                value={formData.title}
                name="title"
                onChange={handleChange}
                className={styles.input}
                placeholder="Judul Film"
            />
            {errors.title && <Alert>Title wajib diisi</Alert>}

            <input
                id="date"
                type="text"
                value={formData.date}
                name="date"
                onChange={handleChange}
                className={styles.input}
                placeholder="Tahun Rilis"
            />
            {errors.date && <Alert>Date wajib diisi</Alert>}

            <input
                id="poster"
                type="text"
                value={formData.poster}
                name="poster"
                onChange={handleChange}
                className={styles.input}
                placeholder="URL Poster"
            />
            {errors.poster && <Alert>Poster wajib diisi</Alert>}

            <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={styles.input}>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
            </select>

            <button type="submit" className={styles.button}>
                Add Movie
            </button>
        </form>
    );
}
