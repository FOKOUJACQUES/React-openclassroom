import React from 'react';
import { useState } from 'react';

import '../styles/Cart.css'

function Cart(){

    const monsteraPrice = 8
    const ivyPrice = 10 
    const flowerPrice = 15
    const [cart, updateCart] = useState (0)

    return (<div className='lmj-cart'>
        <h2>Panier</h2>
        <div>
            Monstera : {monsteraPrice} €
            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
        </div>
        <h3>Total: {monsteraPrice * cart}€</h3>

        <ul>
            
            <li>Lierre : {ivyPrice} €</li>
            <li>Fleurs : {flowerPrice}€</li>
        </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice}€
    </div>)
}

export default Cart