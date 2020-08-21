import React from 'react'
import Header from '../header/header.component'

const withLayout = (WrappedComponent) => () => (
  <>
    <Header />
    <WrappedComponent />
  </>
)
export default withLayout
