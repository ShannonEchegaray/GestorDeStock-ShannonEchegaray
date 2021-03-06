import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import "./ItemList.css";

const ItemList = ({items}) => {

  return (
    <div className="ItemList">
        {items.map(el => <Item key={el.id} item={el} />)}
    </div>
  )
}

export default ItemList;