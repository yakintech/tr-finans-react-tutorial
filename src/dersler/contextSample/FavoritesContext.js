import { createContext, useState } from "react";

//ÖNCELİKLE BİR CONTEXT OLUŞTURUYORUMü
export const favoritesContext = createContext(null);


export const FavoritesProvider = ({ children }) => {

    //GLOBAL STATE CONTEXT İÇERİSİNE TANIMLIYORUM

    const [favorites, setfavorites] = useState([]);

    return <favoritesContext.Provider
        value={{ favorites, setfavorites }}>
        {children}
    </favoritesContext.Provider>
}



