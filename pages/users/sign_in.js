import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { errorHelper } from "helper/functions"
const Loader = dynamic(() => import("helper/loader"))

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import axios from "axios"

const SignIn = () => {
  const [formType, setFormType] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry the email is required")
        .email("This is no a valid email"),
      password: Yup.string().required("Sorry, the password is required"),
    }),
    onSubmit: (values) => {
      submitForm(values)
    },
  })

  const submitForm = async (values) => {
    if (formType) {
      /// register
      axios
        .post("/api/auth/register", values)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      ///login
    }
  }

  const handleFormType = () => {
    setFormType(!formType)
  }

  return (
    <div className='container full_vh small top-space'>
      <>
        <h1>{formType ? "Register" : "Sign in"}</h1>
        <form className='mt-3' onSubmit={formik.handleSubmit}>
          <div className='form-group'>
            <TextField
              style={{ width: "100%" }}
              name='email'
              label='Enter your email'
              variant='outlined'
              {...formik.getFieldProps("email")}
              {...errorHelper(formik, "email")}
            />
          </div>

          <div className='form-group'>
            <TextField
              style={{ width: "100%" }}
              name='password'
              label='Enter your password'
              variant='outlined'
              type='password'
              {...formik.getFieldProps("password")}
              {...errorHelper(formik, "password")}
            />
          </div>

          <div className='mb-3'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              size='small'
              className='mr-2'
            >
              {formType ? "Register" : "Sign in"}
            </Button>
            <Button
              variant='contained'
              color='default'
              size='small'
              onClick={handleFormType}
            >
              {formType
                ? "Already registered, click here"
                : "Already signed in, click here"}
            </Button>
          </div>
        </form>
      </>
    </div>
  )
}

export default SignIn
