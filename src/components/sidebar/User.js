import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import image from "../../images/avatars/karl.jpg";

const User = ({ user }) =>
    !user.username || !user.fullName ? (
        <Skeleton count={1} height={61} />
    ) : (
        <Link
            to={`/p/${user.username}`}
            className="grid grid-cols-4 gap-4 mb-6 items-center"
        >
            <div className="flex items-center justify-between col-span-1">
                <img
                    src={image}
                    className="rounded-full w-16 flex mr-3"
                    alt=""
                />
            </div>
            <div className="col-span-3">
                <p className="font-bold text-sm">{user.username}</p>
                <p className=" text-sm">{user.fullName}</p>
            </div>
        </Link>
    );

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
