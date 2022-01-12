import { useRouter } from "next/router"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import axios from "axios"

const SignIn = () => {
  const [fromType, setFormType] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("This is not a valid email"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const handleFormType = () => {
    setFormType(!fromType)
  }

  return (
    <div className='container full_vh small top-space'>
      <>
        <h1>{fromType ? "Register" : "Sign in"}</h1>
        <form className='mt-3' onSubmit={formik.handleSubmit}>
          <div className='form-group'>
            <TextField
              style={{ width: "100%" }}
              name='email'
              label='Enter your email'
              variant='outlined'
              {...formik.getFieldProps("email")}
            ></TextField>
          </div>

          <div className='form-group'>
            <TextField
              style={{ width: "100%" }}
              name='password'
              label='Enter your password'
              variant='outlined'
              type='password'
              {...formik.getFieldProps("password")}
            ></TextField>
          </div>

          <div className='mb-3'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              size='small'
              className='mr-2'
            >
              {fromType ? "Register" : "Sign In"}
            </Button>

            <Button
              variant='contained'
              color='default'
              size='small'
              onClick={handleFormType}
            >
              {fromType
                ? "Already registerd, click here"
                : "Already signed, click here"}
            </Button>
          </div>
        </form>
      </>
    </div>
  )
}

export default SignIn
