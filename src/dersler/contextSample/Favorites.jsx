import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { favoritesContext } from './FavoritesContext'

function Favorites() {

    const { favorites, setfavorites } = useContext(favoritesContext);

    const removeToFav = (id) => {
        let filteredFavorites = favorites.filter(q => q.id != id);
        setfavorites([...filteredFavorites])
        }

    return (<>
    {
        favorites.length > 0 ?  <Button onClick={() => setfavorites([])}>Empty</Button> : <></>
    }
   
        <ul>
            {
                favorites && favorites.map(item => <>
                 <li>
                     <span>{item.name}</span>
                     <Button onClick={() => removeToFav(item.id)}>Remove</Button>
                 </li>
                </>)
            }
        </ul>
    </>)
}

export default Favorites