import React from 'react';
import CardItem from '../CardItem/CardItem';

const Card = ({ items, onRemove }) => {
  return (
    <div>
      {items.map((item) => (
        <CardItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Card;
