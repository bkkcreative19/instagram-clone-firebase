import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";

import ProtectedRoute from "./helpers/protected.route";
import IsUserLoggedIn from "./helpers/isUserLoggedIn";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/Not-Found"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
    const { user } = useAuthListener();
    return (
        <>
            <UserContext.Provider value={{ user }}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <IsUserLoggedIn
                            user={user}
                            loggedInPath={ROUTES.DASHBOARD}
                            path={ROUTES.LOGIN}
                        >
                            <Login />
                        </IsUserLoggedIn>
                        <IsUserLoggedIn
                            user={user}
                            loggedInPath={ROUTES.DASHBOARD}
                            path={ROUTES.SIGN_UP}
                        >
                            <SignUp />
                        </IsUserLoggedIn>
                        <Route
                            exact
                            path={ROUTES.PROFILE}
                            component={Profile}
                        />
                        {/* <Route exact path={ROUTES.LOGIN} component={Login} />
                        <Route exact path={ROUTES.SIGN_UP} component={SignUp} /> */}
                        <ProtectedRoute
                            user={user}
                            path={ROUTES.DASHBOARD}
                            exact
                        >
                            <Dashboard />
                        </ProtectedRoute>

                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </UserContext.Provider>
        </>
    );
};

export default App;
