import React from 'react';
import { plantList } from '../datas/plantList'
import CareScale from './CareScale';
import '../styles/ShoppingList.css'

function ShoppingList() {
    // - La méthode reduce() parcourt chaque élément de plantList et accumule les catégories uniques dans l'accumulateur (accumulateur).
const categories = plantList.reduce(    
    (accumulateur, plant) => accumulateur.includes(plant.category) ? accumulateur : accumulateur.concat(plant.category),
    []  
    //   - Si l'accumulateur (accumulateur) contient déjà la catégorie de la plante (accumulateur.includes(plant.category)), il ne fait rien.
    //   - Sinon, il ajoute la catégorie de la plante à l'accumulateur (accumulateur.concat(plant.category)).
);

    return (
        <div className='lmj-boody'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {/* Utilisation la méthode map() pour parcourir la liste des plantes */}
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {/* Affichez le nom de la plante */}
                        <img className='lmj-img' src={plant.PlayerImageURL} alt={plant.name} /><br/>
                        {plant.name}
                        {/* Utilisation d'une condition ternaire pour afficher l'indicateur de meilleures ventes si c'est égal à true afficher ce qui est avant : sinon afficher ce qui est aprés*/}
                        {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList