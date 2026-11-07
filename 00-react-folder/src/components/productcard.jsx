import React from 'react'
import { Trash } from 'lucide-react'

const Productcard = (props) => {
  return (
    <div className='product-card'>
      <div className='productImageBox'>
        <img src={props.productImage} className='product-image'/>
      </div>

      <div className='productDetailsBox'>
         <h3 className='product-card-title'>{props.productTitle}</h3>
         <p className='product-card-description'>{props.productDescription}</p>
        <h4 className='product-card-price'>${props.productPrice}</h4>
      </div>

      <div className='product-card-footer'>
         <div className='instockBox'>
            <p className='product-card-instock'>In Stock : {props.productStock}</p>
         </div>
         <div className='deletecontainer'>
        <div className='deleteBox'>
          <Trash size={24} />
        </div>
        </div>
      </div>

    </div>
  )
}

export default Productcard
