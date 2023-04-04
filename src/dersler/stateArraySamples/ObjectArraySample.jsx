import React, { useState } from 'react'
import { categoriesData } from '../data/categoriesData'

function ObjectArraySample() {

    const [categories, setcategories] = useState(categoriesData);
    const [isSortedByName, setisSortedByName] = useState(false);

    const removeCategory = (id) => {
        //filter method ( csharp lambda expressions)
        let filteredCategories = categories.filter(q => q.id != id);
        setcategories(filteredCategories)
    }

    const sortByName = () => {

        let sortedCategories = [];
        if (!isSortedByName) {
            sortedCategories = categories.sort((a, b) => a.name.localeCompare(b.name));
            setisSortedByName(true);
        }
        else{
            sortedCategories = categories.sort((a, b) => b.name.localeCompare(a.name));
            setisSortedByName(false);
        }


        setcategories([...sortedCategories])
    }

    const loadCategories = () => {
        setcategories(categoriesData);
    }

    return (<>
        <h1>Length: {categories.length}</h1>
        <ul>
            {
                categories && categories.map(item => <li style={{ cursor: 'pointer' }} onClick={() => removeCategory(item.id)}>{item.name}</li>)
            }
        </ul>

        <button onClick={() => setcategories([])}>Clear All</button>
        <button onClick={() => sortByName()}>Sort By Name</button>
        <button onClick={() => loadCategories()}>Load Data</button>
    </>
    )
}

export default ObjectArraySample