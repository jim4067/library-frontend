import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_BIRTH } from '../queries';

const UpdateBirth = () => {
    const [name, setName] = useState("");
    const [born, setBorn] = useState('');

    const [editBirth] = useMutation(EDIT_BIRTH);

    //updating the birth year
    const updateBirth = (event) => {
        event.preventDefault();

        editBirth({ variables: { name, setBornTo: born } });
        setName("");
        setBorn("");
    }

    return (
        <div>

            <h2>Set Birthyear</h2>

            <form onSubmit={updateBirth}>
                <input
                    placeholder='author'
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                <br />
                <input
                    placeholder="born"
                    value={born}
                    onChange={({ target }) => setBorn(target.value)}
                />
                <br />
                <button type="submit">update</button>
            </form>

        </div>
    );
}


export default UpdateBirth;