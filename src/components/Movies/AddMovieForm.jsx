import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './MovieForm.module.css';
import Alert from '../Alert/Alert';
import { Form, Label, Input } from '../UI/Form/Form';
import Button from '../UI/Button/Button';

export default function AddMovieForm({ movies, setMovies }) {
    // State tunggal untuk form input
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        poster: '',
        type: 'Movie',
    });

    // Refactor: State tunggal untuk error, bukan per field
    const [errors, setErrors] = useState({});

    // Destructuring formData
    const { title, date, poster, type } = formData;

    // Handle perubahan input form
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // Reset error ketika user mulai mengetik
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    }

    // Validasi input form
    function validate() {
        const newErrors = {};
        if (title.trim() === '') newErrors.title = true;
        if (date.trim() === '') newErrors.date = true;
        if (poster.trim() === '') newErrors.poster = true;

        setErrors(newErrors);

        // Jika tidak ada error, return true
        return Object.keys(newErrors).length === 0;
    }

    // Tambahkan movie baru ke list
    function addMovie() {
        const newMovie = {
            id: nanoid(),
            title,
            year: date,
            type,
            poster,
        };

        setMovies([...movies, newMovie]);
        resetForm();
    }

    // Reset form input
    function resetForm() {
        setFormData({
            title: '',
            date: '',
            poster: '',
            type: 'Movie',
        });
        setErrors({});
    }

    // Handle submit form
    function handleSubmit(e) {
        e.preventDefault();
        if (validate()) {
            addMovie();
        }
    }

    // Kolaborasi: Jika ingin styling custom, aktifkan import styles dan gunakan className dari CSS module
    // Contoh:
    // <Form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} className={styles.formContainer}>
    // Jika tidak ingin pakai CSS module, cukup gunakan styled-components saja.

    return (
        <Form
            onSubmit={handleSubmit}
            style={{ marginBottom: '20px' }}
            className={styles.formContainer}>
            <Label htmlFor="title">Judul Film</Label>
            <Input
                id="title"
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
                placeholder="Judul Film"
                className={styles.input}
            />
            {errors.title && <Alert>Title wajib diisi</Alert>}

            <Label htmlFor="date">Tahun Rilis</Label>
            <Input
                id="date"
                type="text"
                value={date}
                name="date"
                onChange={handleChange}
                placeholder="Tahun Rilis"
                className={styles.input}
            />
            {errors.date && <Alert>Date wajib diisi</Alert>}

            <Label htmlFor="poster">URL Poster</Label>
            <Input
                id="poster"
                type="text"
                value={poster}
                name="poster"
                onChange={handleChange}
                placeholder="URL Poster"
                className={styles.input}
            />
            {errors.poster && <Alert>Poster wajib diisi</Alert>}

            <Label htmlFor="type">Tipe</Label>
            <Input
                as="select"
                id="type"
                value={type}
                name="type"
                onChange={handleChange}
                className={styles.select}>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
            </Input>

            <Button type="submit" className={styles.button}>
                Add Movie
            </Button>
        </Form>
    );
}
