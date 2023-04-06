import React, { useState } from 'react'
import { baseNetwork } from '../network/baseNetwork';

function AddCategory() {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    const add = () => {

        let newCategory = {
            name: name,
            description: description
        }

        baseNetwork.add("categories", newCategory)
            .then(res => {
                alert('Success!')
            })

    }

    return (<>

        <div>
            <label>Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>

        <div>
            <label>Description: </label>
            <input type='text' onChange={(e) => setdescription(e.target.value)} />
        </div>

        <div>
            <button onClick={add}>Add</button>
        </div>

    </>
    )
}

export default AddCategory