import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

export const ShoppingList = () => {
    const categories = plantList.reduce(
        (accumulator, plant) =>
            accumulator.includes(plant.category)
                ? accumulator
                : accumulator.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
