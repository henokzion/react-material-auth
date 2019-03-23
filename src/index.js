import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import reducers from "./reducers"
import authGuard from "./components/HOCs/auth-guard";

const JWT_TOKEN = localStorage.getItem("JWT_TOKEN")

ReactDOM.render(
    <Provider store={createStore(reducers, {
        auth :{
            token : JWT_TOKEN,
            isAuthenticated: JWT_TOKEN? true : false
        }
    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={authGuard(Home)} />
                <Route exact path="/login" component={Signin} />
                <Route exact path="/signup" component={Signup} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
