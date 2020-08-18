import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'
import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="custom-button">
        <CustomButton onClick={() => addItem(item)} inverted>
          Add To Cart
        </CustomButton>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})
export default connect(null, mapDispatchToProps)(CollectionItem)
