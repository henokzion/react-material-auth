import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" component={Home}/>
        </App>
    </BrowserRouter>
    , document.querySelector("#root"));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
