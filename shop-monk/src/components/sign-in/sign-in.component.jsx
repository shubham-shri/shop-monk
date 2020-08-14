import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
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
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              value="Submit"
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
