import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import SHOP_DATA from './shop.data'

export default class ShopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA,
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}
