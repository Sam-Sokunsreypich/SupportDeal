import React from 'react'

export default function register() {
  const initailValues= {
    name : "",
    email:"",
    password: "",
    role:"user"
  }
  const validationSchema={
    name: Yup.string().required("username is required!"),
    email: Yup.string().required("email is required!"),
    password: Yup.string().required("password is required!"),
  }
 const handleSubmit = async (values, { setSubmitting, resetForm }) =>{}
    return (
    <Formik
     initailValues={initailValues}
     validationSchema={validationSchema}
     onSubmit={
    values => console.log('values', values)
  }
     >
      
    </Formik>
  )
}
