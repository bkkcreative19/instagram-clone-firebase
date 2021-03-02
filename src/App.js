import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/Not-Found"));

function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                <Route exact path={ROUTES.LOGIN} component={Login} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
                <Route exact path={ROUTES.NOT_FOUND} component={NotFound} />
            </Switch>
        </Suspense>
    );
}

export default App;
