import React from 'react';
import {AppHeader} from "../app-header/app-header";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"
import {Modal} from "../modal/modal";
import {IngredientDetails} from '../ingredient-details/ingredient-details'
import {OrderDetails} from '../order-details/order-details'
import {api} from "../../utils/api";

function App() {
    const [data, setData] = React.useState([]);
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [ingredient, setIngredient] = React.useState(null);

    const closeModal = () => {
        setIngredient(null)
        setIsOpenModal(false)
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const handleIngredientClick = (ingredient) => {
        setIngredient(ingredient)
        openModal()
    }

    const handleOrderClick = () => {
        openModal()
    }

    React.useEffect(() => {
        api.getIngredients()
            .then(data => setData(data.data))
            .catch(error => console.warn(error))
    }, [])

    return (
        <div className="App">
            <AppHeader/>
            <main className={styles.main}>
                <BurgerIngredients ingredients={data} handleIngredientClick={handleIngredientClick}/>
                <BurgerConstructor handleOrderClick={handleOrderClick} ingredients={data.filter(ingredient => ingredient.type !== 'bun')}/>
            </main>
            {isOpenModal && <Modal header={ingredient ? 'Детали ингредиента' : ''} onClose={closeModal}>{
                ingredient ? <IngredientDetails ingredient={ingredient}/> : <OrderDetails/>
            }</Modal>}
        </div>
    );
}

export default App;
