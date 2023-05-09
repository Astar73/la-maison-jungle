import { CareScale } from './CareScale'
import '../styles/PlantItem.css'

export const PlantItem = (name, cover, id, light, water) => {
    return (
        <div>
            <CareScale careType="water" scaleValue={plant.water} />
            <CareScale careType="light" scaleValue={plant.light} />
        </div>
    )
}
