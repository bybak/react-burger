import React from 'react';
import {AppHeader} from "../app-header/app-header";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"
import { data } from '../../utils/data'

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main className={styles.main}>
                <BurgerIngredients ingredients={data}/>
                <BurgerConstructor ingredients={data.filter(ingredient => ingredient.type !== 'bun')}/>
            </main>
        </div>
    );
}

export default App;
