import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const addProductSchema = yup.object({
    name: yup.string().required("Ürün adı boş geçilemez! "),
    unitPrice: yup.number("Lütfen para formatı giriniz! ").required('Fiyat alanı boş geçilemez! ')
})


function AddProductForm() {

    const { register, handleSubmit, formState:{ errors }  } = useForm({
        resolver: yupResolver(addProductSchema)
    });


    const addProduct = (values) => {

        axios.post(`https://northwind.vercel.app/api/products`, values)
            .then(res => {
                console.log('Response ', res);
            })

    }

    return (<>
        <form onSubmit={handleSubmit(addProduct)}>
            <div>
                <label>Name: </label>
                <input type='text' {...register("name")} />
            </div>
            <p style={{color:'tomato'}}>{errors.name?.message}</p>

            <div>
                <label>Unit Price: </label>
                <input type='text' {...register("unitPrice")} />
            </div>
            <p style={{color:'tomato'}}>{errors.unitPrice?.message}</p>

            <div>
                <label>Units In Stock: </label>
                <input type='text' {...register("unitsInStock")} />
            </div>

            <button>Submit</button>

        </form>
    </>)
}

export default AddProductForm