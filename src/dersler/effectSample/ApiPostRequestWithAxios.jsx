import axios from 'axios';
import React, { useState } from 'react'

function ApiPostRequestWithAxios() {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    const add = () => {
        let newCategory = {
            name: name,
            description: description
        }

        axios.post('https://northwind.vercel.app/api/categories', newCategory)
            .then(res => {
                console.log('Response ', res);
            })
    }

    return (<>
        <div>
            <label>Name: </label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Description: </label>
            <input type='text' value={description} onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
    </>)
}

export default ApiPostRequestWithAxios