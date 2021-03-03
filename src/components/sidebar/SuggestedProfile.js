import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import image from "../../images/avatars/orwell.jpg";

const SuggestedProfile = ({ profile, userId }) => {
    const [followed, setFollowed] = useState(false);

    async function handleFollowUser() {
        setFollowed(true);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 flex mr-3"
                    src={image}
                    alt=""
                />
                <Link to={`/p/${profile.username}`}>
                    <p className="font-bold text-sm">{profile.username}</p>
                </Link>
            </div>

            <button
                type="button"
                onClick={() => console.log("followed")}
                className="text-xs font-bold text-blue-medium"
            >
                Follow
            </button>
        </div>
    ) : null;
};

SuggestedProfile.propTypes = {
    userId: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired,
};

export default SuggestedProfile;
