import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username)
        .get();

    return result.docs.map((user) => user.data().length > 0);
}
// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where("userId", "==", userId)
        .get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));

    return user;
}

export async function getSuggestedProfiles(userId, following) {
    const result = await firebase
        .firestore()
        .collection("users")
        .limit(10)
        .get();
    const suggestedProfiles = result.docs
        .map((item) => ({
            ...item.data(),
            docId: item.id,
        }))
        .filter(
            (profile) =>
                profile.userId !== userId && !following.includes(profile.userId)
        );

    return suggestedProfiles;
}

export async function updateLoggedInUserFollowing(
    userDocId,
    profileUserId,
    isFollowingProfile
) {
    return firebase
        .firestore()
        .collection("users")
        .doc(userDocId)
        .update({
            following: isFollowingProfile
                ? FieldValue.arrayRemove(profileUserId)
                : FieldValue.arrayUnion(profileUserId),
        });
}
export async function updateFollowedUserFollowers(
    profileDocId,
    userUserId,
    isFollowingProfile
) {
    return firebase
        .firestore()
        .collection("users")
        .doc(profileDocId)
        .update({
            followers: isFollowingProfile
                ? FieldValue.arrayRemove(userUserId)
                : FieldValue.arrayUnion(userUserId),
        });
}
