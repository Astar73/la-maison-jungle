import { Banner } from './Banner'
import { Cart } from './Cart'
import { ShoppingList } from './ShoppingList'

export const App = () => {
    return (
        <div className="App">
            <Banner />
            <Cart />            
            <ShoppingList />
        </div>
    )
}
