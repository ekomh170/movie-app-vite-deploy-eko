import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMoviesContext } from "../../context/MoviesContext";
import styles from "./MovieForm.module.css";
import Alert from "../Alert/Alert";
import { Form, Label, Input } from "../UI/Form/Form";
import Button from "../UI/Button/Button";

export default function AddMovieForm() {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "Movie",
    });
    const [errors, setErrors] = useState({});
    const { title, date, poster, type } = formData;
    const navigate = useNavigate();
    const { movies, setMovies } = useMoviesContext();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    }

    function validate() {
        const newErrors = {};
        if (title.trim() === "") newErrors.title = true;
        if (date.trim() === "") newErrors.date = true;
        if (poster.trim() === "") newErrors.poster = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function addMovie(e) {
        e.preventDefault();
        if (!validate()) return;
        const newMovie = {
            id: nanoid(),
            title,
            year: date,
            type,
            poster,
        };
        setMovies([...movies, newMovie]);
        setFormData({ title: "", date: "", poster: "", type: "Movie" });
        setErrors({});
        navigate("/");
    }

    return (
        <Form
            onSubmit={addMovie}
            style={{ marginBottom: "20px" }}
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
