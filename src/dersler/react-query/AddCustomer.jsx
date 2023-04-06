import { QueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'

function AddCustomer() {

    const [companyName, setcompanyName] = useState('');
    const [contactName, setcontactName] = useState('');


    const add = (values) => {

        axios.post('https://northwind.vercel.app/api/customers', values)
            .then(res => {
                console.log('Success')
            })
    }


    const mutation = useMutation({
        mutationFn: add,
        onSuccess: () => {
            // Invalidate and refetch
             QueryClient.invalidateQueries({ queryKey: ['customers'] })
        },
    })

    return (<>
        <div>
            <label>Company Name: </label>
            <input type='text' onChange={(e) => setcompanyName(e.target.value)} />
        </div>
        <div>
            <label>Contact Name: </label>
            <input type='text' onChange={(e) => setcontactName(e.target.value)} />
        </div>
        <div>
            <button onClick={() => {
                mutation.mutate({
                    companyName,
                    contactName
                })
            }}>Add</button>
        </div>
    </>
    )
}

export default AddCustomer