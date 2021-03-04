import { useState, useEffect, useContext } from "react";

import UserContext from "../context/user";
import { getUserByUserId, getPhotos } from "../services/firebase";

const usePhotos = () => {
    const [photos, setPhotos] = useState(null);

    const {
        user: { uid: userId = "" },
    } = useContext(UserContext);

    useEffect(() => {
        async function getTimelinePhotos() {
            const user = await getUserByUserId(userId);
            let followedUserPhotos = [];

            if (user[0].following.length > 0) {
                followedUserPhotos = await getPhotos(userId, user[0].following);
            }
            followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(followedUserPhotos);
        }
        // console.log(userId);
        getTimelinePhotos();
    }, [userId]);
    return { photos };
};

export default usePhotos;
