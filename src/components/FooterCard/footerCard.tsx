
import React from 'react';
import FooterItem from '../FooterItem/footerItem';
import { CartItem } from '@/Types/types'; // Importe o tipo CartItem

interface CardFooterProps {
  cart: CartItem[];
  handleClickDelete: (cartForDelete: CartItem) => void;
}

export default function cardFooter({ cart, handleClickDelete }: CardFooterProps) {
  return (
    <footer>
      <ul>
        {cart.map((cartItem: CartItem, index: number) => (
          <FooterItem 
            cartItem={cartItem} 
            key={index}
            handleClickDelete={handleClickDelete}
             />
        ))}
      </ul>
    </footer>
  );
}
