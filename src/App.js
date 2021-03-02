import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/Not-Found"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
    const { user } = useAuthListener();
    return (
        <>
            <UserContext.Provider value={{ user }}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route exact path={ROUTES.LOGIN} component={Login} />
                        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
                        <Route
                            exact
                            path={ROUTES.DASHBOARD}
                            component={Dashboard}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </UserContext.Provider>
        </>
    );
};

export default App;
