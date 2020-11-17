import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ALL_AUTHORS, ALL_BOOKS, CREATE_BOOK } from '../queries';

const NewBook = (props) => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [published, setPublished] = useState("");
	const [genre, setGenre] = useState('');
	const [genres, setGenres] = useState([]);

	const [createBook] = useMutation(CREATE_BOOK, {
		refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }]
	});

	if (!props.show) {
		return null;
	}

	const submit = async (event) => {
		event.preventDefault();

		createBook({ variables: { title, published, author, genres } })
		console.log('add book...');

		setTitle('');
		setPublished('');
		setAuthor('');
		setGenres([]);
		setGenre('');
	}

	const addGenre = () => {
		setGenres(genres.concat(genre));
		console.log("these are the genres added  so far", genres);
		setGenre('');
	}

	return (
		<div>

			<form onSubmit={submit}>
				<div>
					<input
						placeholder='title'
						value={title}
						onChange={({ target }) => setTitle(target.value)}
					/>
				</div>
				<div>
					<input
						placeholder='author'
						value={author}
						onChange={({ target }) => setAuthor(target.value)}
					/>
				</div>
				<div>
					<input
						placeholder='published'
						type="number"
						value={published}
						onChange={({ target }) => setPublished(target.value)}
					/>
				</div>
				<div>
					<input
						value={genre}
						onChange={({ target }) => setGenre(target.value)}
					/>
					<button onClick={addGenre} type="button">
						add genre
					</button>
				</div>
				<div>genres: {genres.join(" ")}</div>
				<button type="submit">create book</button>
			</form>

		</div>
	);
}

export default NewBook