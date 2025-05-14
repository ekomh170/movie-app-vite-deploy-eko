import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './MovieForm.module.css';
import Alert from '../Alert/Alert';

export default function AddMovieForm({ movies, setMovies }) {
    // Membuat state formData untuk menyimpan data form
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        poster: '',
        type: '',
    });

    const [errors, setErrors] = useState({
        title: false,
        date: false,
        poster: false,
    });

    // Fungsi untuk menangani perubahan input
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // Destructuring state formData
    const { title, date, poster, type } = formData;

    // Fungsi validasi
    function validate() {
        const newErrors = {
            title: title === '',
            date: date === '',
            poster: poster === '',
        };
        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    }

    // Fungsi tambah movie baru
    function addMovie() {
        const newMovie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: poster,
        };
        setMovies([...movies, newMovie]);
        resetForm();
    }

    // Reset form ke nilai awal
    function resetForm() {
        setFormData({
            title: '',
            date: '',
            poster: '',
            type: '',
        });
    }

    // Fungsi submit form
    function handleSubmit(e) {
        e.preventDefault();
        validate() && addMovie();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.formContainer}
            style={{ marginBottom: '20px' }}>
            {/* Input Title */}
            <input
                id="title"
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
                className={styles.input}
                placeholder="Judul Film"
            />
            {errors.title && <Alert>Title wajib diisi</Alert>}

            {/* Input Date */}
            <input
                id="date"
                type="text"
                value={date}
                name="date"
                onChange={handleChange}
                className={styles.input}
                placeholder="Tahun Rilis"
            />
            {errors.date && <Alert>Date wajib diisi</Alert>}

            {/* Input Poster */}
            <input
                id="poster"
                type="text"
                value={poster}
                name="poster"
                onChange={handleChange}
                className={styles.input}
                placeholder="URL Poster"
            />
            {errors.poster && <Alert>Poster wajib diisi</Alert>}

            {/* Select Type */}
            <select
                id="type"
                value={type}
                name="type"
                onChange={handleChange}
                className={styles.input}>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
            </select>

            {/* Tombol Submit */}
            <button type="submit" className={styles.button}>
                Add Movie
            </button>
        </form>
    );
}
