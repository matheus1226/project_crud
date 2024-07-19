import Logo from '@/src/components/Logo/logo'
import { CartItem } from '@/Types/types';
import { useEffect, useState } from 'react';

interface CardFooterProps {
    cart: CartItem[];
    handleClearItemsCard: () => void;
  }

export default function navbar({ cart, handleClearItemsCard } : CardFooterProps){  
    const [valor, setValor] = useState<number>(0)

    useEffect(() => {
        somaTotal()
    })


    function somaTotal(){
        let result = 0;
        cart.map((c : CartItem)=>{
            result = result + c.price
        })

        
        setValor(result)
    }

    
    return( 
        <header>
            <nav>
                <Logo/>
                <div className="nav-bar-actions">
                    <div className='nav-bar-total'>
                        <span className='nav-bar-total-quantity'>{cart.length} cursos</span>
                        <span className='nav-bar-total-price'>R$ {valor.toFixed(2)}</span>
                    </div>
                    <button className='clean-btn' onClick={() => handleClearItemsCard()}>limpar</button>
                </div>
            </nav>
        </header>
    )

}