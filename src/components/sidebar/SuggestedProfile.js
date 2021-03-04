import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import image from "../../images/avatars/orwell.jpg";
import {
    updateLoggedInUserFollowing,
    updateFollowedUserFollowers,
} from "../../services/firebase";

const SuggestedProfile = ({ profile, user }) => {
    const [followed, setFollowed] = useState(false);

    async function handleFollowUser() {
        setFollowed(true);
        await updateLoggedInUserFollowing(user.docId, profile.userId, false);
        await updateFollowedUserFollowers(profile.docId, user.userId, false);
    }
    // console.log(profile);
    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 flex mr-3"
                    src={profile.img}
                    alt=""
                />
                <Link to={`/p/${profile.username}`}>
                    <p className="font-bold text-sm">{profile.username}</p>
                </Link>
            </div>

            <button
                type="button"
                onClick={handleFollowUser}
                className="text-xs font-bold text-blue-medium"
            >
                Follow
            </button>
        </div>
    ) : null;
};

SuggestedProfile.propTypes = {
    user: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

export default SuggestedProfile;
