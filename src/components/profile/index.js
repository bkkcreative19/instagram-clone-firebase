import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Photos from "./Photos";
import { getUserPhotosByUsername } from "../../services/firebase";

const UserProfile = ({ user }) => {
    const reducer = (state, newState) => ({ ...state, ...newState });
    const initialState = {
        profile: {},
        photosCollection: [],
        followerCount: 0,
    };
    console.log(user);
    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const photos = await getUserPhotosByUsername(user.username);
            console.log(photos);
            dispatch({
                profile: user,
                photosCollection: photos,
                followerCount: user.followers.length,
            });
        }
        getProfileInfoAndPhotos();
    }, [user.username]);
    return (
        <>
            <Header
                followerCount={followerCount}
                photosCount={photosCollection ? photosCollection.length : 0}
                profile={profile}
                setFollowerCount={dispatch}
            />
            <Photos photos={photosCollection} />
        </>
    );
};

export default UserProfile;

UserProfile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number,
        emailAddress: PropTypes.string,
        followers: PropTypes.array,
        following: PropTypes.array,
        fullName: PropTypes.string,
        userId: PropTypes.string,
        username: PropTypes.string,
    }),
};
