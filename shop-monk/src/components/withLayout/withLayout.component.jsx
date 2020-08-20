import React from 'react'
import Header from '../header/header.component'

const withLayout = (WrappedComponent) => () => (
  <div>
    <Header />
    <WrappedComponent />
  </div>
)
export default withLayout
