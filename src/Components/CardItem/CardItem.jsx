import React from 'react';

const CardItem = ({ item, onRemove }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
};

export default CardItem;
