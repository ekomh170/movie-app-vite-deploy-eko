import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './MovieForm.module.css';

export default function AddMovieForm(props) {
    const { movies, setMovies } = props;

    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleSubmit(e) {
        if (title === '') {
            setIsTitleError(true);
        } else if (date === '') {
            setIsDateError(true);
        } else {
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: 'Movie',
                poster: 'https://m.media-amazon.com/images/M/MV5BNDJmMzQyMzAtMzMxMy00NTI3LTgzOGMtZDU3Yzc4MjRjNzkwXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_SX300.jpg',
            };
            setMovies([...movies, movie]);

            setIsTitleError(false);
            setIsDateError(false);
        }
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={handleTitle}
                    className={styles.input}
                />
                {isTitleError && <p>Title Wajib Diisi</p>}

                <input
                    id="date"
                    type="text"
                    value={date}
                    onChange={handleDate}
                    className={styles.input}
                />
                {isDateError && <p>Date Wajib Diisi</p>}

                <button type="submit" className={styles.button}>
                    Add Movie
                </button>
            </form>
        </>
    );
}
