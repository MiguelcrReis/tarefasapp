import React from 'react';
import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item;
}

export const List = ({ item }: Props) => {
  const [isChecked, setIsChacked] = useState(item.check);

  return (
    <C.Constainer check={isChecked}>
      <input 
      type='checkbox' 
      checked={isChecked}
      onChange={e => setIsChacked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Constainer>
      
    
  )
}