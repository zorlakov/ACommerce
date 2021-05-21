import React from 'react';
import './itemCard.scss';

const ItemCard = (props) => {
  const { name, price, imageUrl } = props;
  return (
    <div className='card'>
      <img className='product-image' src={imageUrl} alt=''></img>
      <div className='item-info'>
        <span classname='product-name'> {name}</span>
        <span className='price'>${price}</span>
      </div>
    </div>
  );
};

export default ItemCard;
