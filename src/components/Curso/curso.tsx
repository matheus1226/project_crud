import React from 'react'

interface cursoDetails {
  logo: string;
  title: string;
  preco: number;
  handleAddItemCard: any
}

function curso( {logo, title, preco, handleAddItemCard} : cursoDetails ) {
  return (
    <div className='cardCurso'>
        <img className='card-logo' src={logo} alt=''/>
        <h1 className='card-title'>{title} preço: {preco}</h1>
        <button onClick={() => handleAddItemCard(logo, title, preco)}>Adicionar</button>
    </div>
  )
}

export default curso
