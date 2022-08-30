import React, { useState, useEffect } from 'react'
import validation from './Validation'
import SignupBanner from '../assets/signupBanner.jpg'

function SignupForm({submitForm}) {

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setErrors(validation(values))
    setDataIsCorrect(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true)
    }
  }, [errors])

  return (
    <div className="container" style={{ backgroundImage: `url(${SignupBanner})` }}>
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Your Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="username">
            <label className="label">User Name</label>
            <input
              type="text"
              className="input"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="submit-btn">
            <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignupForm
