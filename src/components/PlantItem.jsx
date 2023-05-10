import { CareScale } from './CareScale'
import '../styles/PlantItem.css'

export const PlantItem = ({ name, cover, light, water, price }) => {
    const handleClick = (plantName) => {
        alert(
            `Voulez-vous avez acheter un(e) ${plantName.toUpperCase()} pour ${price}€ ?`
        )
    }
    return (
        <li className="lmj-plant-item" onClick={() => handleClick(name)}>
            <span className="lmj-plant-item-price">{price}€</span>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}
