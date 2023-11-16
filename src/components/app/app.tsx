import React, { useCallback } from 'react';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';
import { deleteIngredientDetails } from '../../services/actions/ingredient-details';
import {Routes, Route, useLocation} from 'react-router-dom';
import { Registration } from '../../pages/registration';
import { Authorization } from '../../pages/authorization';
import { ForgotPassword } from '../../pages/forgot-password';
import { ResetPassword } from '../../pages/reset-password';
import { Profile } from '../../pages/profile';
import { Main } from '../../pages/main';
import { IngredientInfo } from '../../pages/ingredient-info';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Feed } from '../../pages/feed';
import { useNavigate } from 'react-router-dom';

export default function App() {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const state = location?.state?.backgroundLocation;

    React.useEffect(() => {
        // @ts-ignore
        dispatch(getBurgerIngredients())
    }, [dispatch])


    const closeIngredientsModal = useCallback(() => {
        dispatch(deleteIngredientDetails())
        navigate('/')
    }, [dispatch])


    return (
        <>
            <AppHeader />

            <Routes location={state || location}>
                <Route path="/" element={<Main/>} />
                <Route path="/register" element={<Registration/>} />
                <Route path="/login" element={<Authorization/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/reset-password" element={<ResetPassword/>} />
                <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
                <Route path="/feed" element={<ProtectedRoute><Feed/></ProtectedRoute>} />
                <Route path="/ingredients/:id" element={<IngredientInfo />}/>
            </Routes>

            {state && (
                <Routes>
                    <Route path="/ingredients/:id" element={(
                        <Modal onClose={closeIngredientsModal} header='Детали ингредиента'>
                            <IngredientDetails />
                        </Modal>
                    )}>
                    </Route>
                </Routes>
            )}
        </>
    )
}
