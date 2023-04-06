import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseNetwork } from '../network/baseNetwork';

function CategoriesList() {

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);


    const loadCategories = () => {
        baseNetwork.getAll("categories")
            .then(res => {
                setcategories(res)
            })
    }

    const deleteCategoryById = (id) => {

        baseNetwork.delete('categories', id)
            .then(res => {
                loadCategories();
            })
    }

    return (<>
        <ul>
            {
                categories && categories.map(item => <>
                    <li>
                        <Link to={'/categories/' + item.id}> {item.name}</Link>
                        <button onClick={() => deleteCategoryById(item.id)}>Delete Category</button>
                    </li>
                </>)
            }
        </ul>
    </>)
}

export default CategoriesList