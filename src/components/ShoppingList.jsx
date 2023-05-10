import { plantList } from '../datas/plantList'
import { PlantItem } from './PlantItem'
import '../styles/ShoppingList.css'

export const ShoppingList = ({ cart, updateCart }) => {
    const categories = plantList.reduce(
        (accumulator, plant) =>
            accumulator.includes(plant.category)
                ? accumulator
                : accumulator.concat(plant.category),
        []
    )

    return (
        <div className="lmj-shopping-list">
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
