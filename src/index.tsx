import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./services/reducers";
import { BrowserRouter as Router } from 'react-router-dom';
import {socketMiddleware} from "./services/middleware/socket-middleware";
import {wsUrl} from "./utils/constants";
import { wsActions, wsActionsUser } from "./services/actions/websockets";
import {getCookie} from "./utils/cookie";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(socketMiddleware('wss://norma.nomoreparties.space/orders/all', wsActions))
        .concat(socketMiddleware('wss://norma.nomoreparties.space/orders' + `?token=${getCookie('access')}`, wsActionsUser))
})

root.render(
    <Router>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
