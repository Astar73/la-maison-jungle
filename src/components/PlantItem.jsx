import { CareScale } from './CareScale'
import '../styles/PlantItem.css'

export const PlantItem = ({ name, cover, id, light, water }) => {
    const handleClick = (plantName) => {
        alert(`Vous avez acheter 1 ${plantName}`)
    }
    return (
        <li className="lmj-plant-item" onClick={() => handleClick(name)}>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}
