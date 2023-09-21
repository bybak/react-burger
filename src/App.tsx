import React from 'react';
import {AppHeader} from "./components/app-header/app-header";
import {BurgerIngredients} from "./components/burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "./components/burger-constructor/burger-constructor";
import styles from "./App.module.css"
import { data } from './utils/data'

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main className={styles.main}>
                <BurgerIngredients ingredients={data}/>
                <BurgerConstructor ingredients={data}/>
            </main>
        </div>
    );
}

export default App;
