import { plantList } from '../datas/plantList'
import { PlantItem } from './PlantItem'
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
            <ul className="lmj-plant-list">
                {plantList.map(({ name, cover, id, light, water }) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}
