import React from 'react';
import ItemCard from '../../components/itemCard/itemCard';
import { connect } from 'react-redux';
import './productsPage.scss';

const ProductsPage = (props) => {
  const items = props.items;

  return (
    <div className='items'>
      {items.map(({ id, name, price, imageUrl }) => (
        <ItemCard key={id} name={name} price={price} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.graphicCards.items,
  };
};

export default connect(mapStateToProps)(ProductsPage);
