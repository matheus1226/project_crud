import React from 'react';
import { CartItem } from '@/Types/types'; 

interface FooterItemProps {
  cartItem: CartItem;
  handleClickDelete: (cartForDelete: CartItem) => void; // Adicione handleClickDelete
}

export default function FooterItem({ cartItem, handleClickDelete }: FooterItemProps) { 
  return (
    <li>
      <h2 className='list-title'>{cartItem.name}</h2>
        <span className='list-price'>{cartItem.price}</span>
        <button onClick={() => handleClickDelete(cartItem)}>Delete</button>
    </li>
  );
}