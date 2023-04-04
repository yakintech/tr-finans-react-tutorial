import axios from 'axios'
import React, { useState } from 'react'

function DeleteRequestWithAxios() {

    const [id, setid] = useState(0)

    const deleteCategory = () => {
        axios.delete(`https://northwind.vercel.app/api/categories/` + id)
        .then(res => {
            alert('SUCCESS!! ')
        })
    }

  return (<>
  <div>
      <label>Id: </label>
      <input type='text' value={id} onChange={(e) => setid(e.target.value)}/>
      <button onClick={() => deleteCategory()}>Delete</button>
  </div>
  </>)
}

export default DeleteRequestWithAxios