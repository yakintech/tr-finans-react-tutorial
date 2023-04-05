import axios from 'axios'
import { Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


const addSupplierFormValidationSchema = Yup.object().shape({
    companyName: Yup.string().min(5,"Minimum 5 karakter olmalıdır!").required("Company Name boş geçilemez! "),
    contactName: Yup.string().required('Contact Name boş geçilemez! ')
})

function AddSupplierForm() {



    return (<>
        <Formik
            initialValues={{
                companyName: '',
                contactName: '',
                contactTitle: ''
            }}
            validationSchema={addSupplierFormValidationSchema}
            onSubmit={values => {
                axios.post('https://northwind.vercel.app/api/suppliers', values)
                    .then(res => {
                        alert('Success!! ')
                    })
            }}
        >

            {({ errors }) => (
                <Form>
                    <div>
                        <label>Company Name</label>
                        <Field name="companyName" />
                        <p style={{ color: 'tomato' }}>{errors.companyName}</p>
                    </div>
                    <div>
                        <label>Concat Name</label>
                        <Field name="contactName" />
                        <p style={{ color: 'tomato' }}>{errors.contactName}</p>
                    </div>
                    <div>
                        <label>Concat Title</label>
                        <Field name="contactTitle" />     
                        <p style={{ color: 'tomato' }}>{errors.contactTitle}</p>
                    </div>



                    <button type="submit">Submit</button>

                </Form>
            )}

        </Formik>
    </>
    )
}

export default AddSupplierForm