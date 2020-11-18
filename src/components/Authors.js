import React from 'react';
import UpdateBirth from './UpdateBirth';
import { useQuery } from '@apollo/client';
import { ALL_AUTHORS } from '../queries';

const Authors = (props) => {
	const result = useQuery(ALL_AUTHORS);

	if (result.loading) {
		return <div>loading...</div>
	}

	const authors = result.data.allAuthors;

	//this controlls which component is rendered(shown to user). Simple but gets the job done
	if (!props.show) {
		return null;
	}

	return (
		<div>

			<h2>authors</h2>
			<table>
				<tbody>
					<tr>
						<th></th>
						<th>born</th>
						<th>books</th>
					</tr>
					{authors.map((a) => (
						<tr key={a.name}>
							<td>{a.name}</td>
							<td>{a.born}</td>
							<td>{a.bookCount}</td>
						</tr>
					))}
				</tbody>
			</table>

			<UpdateBirth />

		</div>
	);
}

export default Authors;
