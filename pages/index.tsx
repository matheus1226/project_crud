// Index.tsx
import React, { useState } from 'react';
import Navbar from '@/src/components/Navbar/navbar';
import CardCurso from '@/src/components/CardCurso/cardCurso';
import CardFooter from '@/src/components/FooterCard/footerCard';
import { CartItem } from '@/Types/types'; // Importe o tipo CartItem

const Index: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);


    const handleClickDelete = (cartForDelete: CartItem) => {
        const filteredCart = cart.filter(cart => cart.id !== cartForDelete.id);
        setCart(filteredCart);
    };


    function handleAddItemCard(url: string, name: string, price: number) {
        const cartObject = { id: cart.length + 1, url, name, price };
        setCart([...cart, cartObject]);
    }

    function handleClearItemsCard(){
        setCart([])
    }

    return (
        <>
            <Navbar cart={cart} handleClearItemsCard={handleClearItemsCard}/>
            <CardCurso handleAddItemCard={handleAddItemCard} />
            <CardFooter cart={cart} handleClickDelete={handleClickDelete} />
        </>
    );
};

export default Index;

