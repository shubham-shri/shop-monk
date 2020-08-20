import React, { Component } from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'
import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="sign-in">
        <div className="sign-in__box">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
              onChange={this.handleChange}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              onChange={this.handleChange}
              label="password"
              required
            />
            <div className="buttons">
              <CustomButton type="submit" value="Submit">
                Sign In
              </CustomButton>
              <div className="margin-small" />
              <CustomButton
                onClick={signInWithGoogle}
                type="button"
                isGoogleSignIn
                value="Submit"
              >
                Sign In With Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
