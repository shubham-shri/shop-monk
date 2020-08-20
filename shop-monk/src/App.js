import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import withLayout from './components/withLayout/withLayout.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignIn from './pages/sign-in/sign-in.component.jsx'
import SignUp from './pages/sign-up/sign-up.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selectors'
import './App.css'

class App extends Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route exact path="/" component={withLayout(HomePage)} />
          <Route path="/shop" component={withLayout(ShopPage)} />
          <Route exact path="/checkout" component={withLayout(CheckoutPage)} />
          <HomePage />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
