import React, { useCallback } from 'react';
import styles from './app.module.css';
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
import { ProfileOrders } from '../../pages/profile-orders';
import { useNavigate } from 'react-router-dom';
import {OrderInfo} from "../../pages/order-info";
import { ProfileOrderInfo } from '../../pages/profile-order-info';
import {useAppDispatch} from "../../utils/hooks";

export default function App() {

    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const state = location?.state?.backgroundLocation;

    React.useEffect(() => {
        dispatch(getBurgerIngredients())
    }, [dispatch])


    const closeIngredientsModal = useCallback(() => {
        dispatch(deleteIngredientDetails())
        navigate('/')
    }, [dispatch])

    const closeFeedModal = useCallback(() => {
        navigate('/feed')
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
                <Route path="/profile/orders" element={<ProtectedRoute><ProfileOrders/></ProtectedRoute>} />
                <Route path="/profile/orders/:id" element={<ProtectedRoute><ProfileOrderInfo/></ProtectedRoute>} />
                <Route path="/feed" element={<Feed/>} />
                <Route path="/feed/:id" element={<OrderInfo/>} />
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
                    <Route path="/feed/:id" element={(
                        <Modal onClose={closeFeedModal} header='Детали заказа'>
                            <OrderInfo />
                        </Modal>
                    )}>
                    </Route>
                </Routes>
            )}
        </>
    )
}
