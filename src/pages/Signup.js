import React, {useState} from 'react'
import SignupForm from '../components/SignupForm'
import SignupSuccess from '../components/SignupSuccess'
import '../styles/Signup.css'

function Signup() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false)

  const submitForm = () => {
    setFormIsSubmitted(true)
  }
  return (
    <div>
      {!formIsSubmitted ? <SignupForm submitForm={submitForm}/> : <SignupSuccess />}
    </div>
  )
}

export default Signup
