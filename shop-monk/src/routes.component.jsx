import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import withLayout from './components/withLayout/withLayout.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignIn from './pages/sign-in/sign-in.component.jsx'
import SignUp from './pages/sign-up/sign-up.component.jsx'
import MenSectionPage from './pages/men-section/men-section.component'

const HomePageWithLayout = withLayout(HomePage)
const ShopPageWithLayout = withLayout(ShopPage)
const CheckoutPageWithLayout = withLayout(CheckoutPage)
const MenSectionPageWithLayout = withLayout(MenSectionPage)

const RoutesComponent = (props) => {
  const { currentUser } = props
  return (
    <>
      <Switch>
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route
          exact
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
        />
        <Route
          exact
          path="/"
          render={() =>
            currentUser ? <HomePageWithLayout /> : <Redirect to="/signin" />
          }
        />
        <Route
          path="/shop"
          render={() =>
            currentUser ? <ShopPageWithLayout /> : <Redirect to="/signin" />
          }
        />
        <Route
          exact
          path="/checkout"
          render={() =>
            currentUser ? <CheckoutPageWithLayout /> : <Redirect to="/signin" />
          }
        />
      </Switch>
      <Route
        exact
        path="/men"
        render={() =>
          currentUser ? (
            <MenSectionPageWithLayout sectionName="men" />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
    </>
  )
}
export default RoutesComponent
