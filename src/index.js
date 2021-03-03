import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import FireBaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";

ReactDOM.render(
    <FireBaseContext.Provider value={{ firebase, FieldValue }}>
        <Router>
            <App />
        </Router>
    </FireBaseContext.Provider>,
    document.getElementById("root")
);
