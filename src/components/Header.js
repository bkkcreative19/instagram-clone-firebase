import React, { useContext } from "react";
import { firebase } from "../lib/firebase";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import FireBaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import Logo from "../images/logo.png";
// import * as Images from "../images/avatars";

const Header = () => {
    const { firebase } = useContext(FireBaseContext);
    const { user } = useContext(UserContext);

    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1 className="flex justify-center w-full">
                            <Link
                                to={ROUTES.DASHBOARD}
                                aria-label="instagram logo"
                            >
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="mt-2 w-6/12"
                                />
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray-700 text-center flex items-center align-items">
                        {user ? (
                            <>
                                <Link
                                    to={ROUTES.DASHBOARD}
                                    aria-label="instagram-logo"
                                >
                                    <i className="fas fa-home text-2xl"></i>
                                </Link>
                                <button
                                    type="button"
                                    title="Sign Out"
                                    className="ml-1"
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            firebase.auth().signOut();
                                        }
                                    }}
                                >
                                    <i className="fas fa-sign-out-alt text-2xl ml-4"></i>
                                </button>
                                <div className="flex items-center cursor-pointer">
                                    <Link to={`/p/${user.displayName}`}>
                                        {/* <img
                                            className="rounded-full h-8 w-8 flex"
                                            src="../../public/dali.jpg"
                                            alt=""
                                        /> */}
                                        {user.displayName}
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to={ROUTES.LOGIN}>
                                    <button
                                        className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                                        type="button"
                                    >
                                        Log In
                                    </button>
                                </Link>
                                <Link to={ROUTES.SIGN_UP}>
                                    <button
                                        className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                                        type="button"
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
