import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { getUserByUserId } from "../../services/firebase";
import Image from "./Image";
import Actions from "./actions";
import Footer from "./Footer";
import Comments from "./Comments";

const Post = ({ content }) => {
    const commentInput = useRef(null);

    const handleFocus = () => commentInput.current.focus();
    const [postUserImage, setPostUserImage] = useState("");
    // console.log(content);
    // const userImg =
    // console.log(user);

    useEffect(() => {
        const handleGetUserById = async () => {
            const res = await getUserByUserId(content.userId);
            setPostUserImage(res[0].img);
        };
        handleGetUserById();
    }, []);
    return (
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
            <Header username={content.username} image={postUserImage} />
            <Image src={content.imageSrc} caption={content.caption} />
            <Actions
                docId={content.docId}
                totalLikes={content.likes.length}
                likedPhoto={content.userLikedPhoto}
                handleFocus={handleFocus}
            />
            <Footer caption={content.caption} username={content.username} />
            <Comments
                docId={content.docId}
                comments={content.comments}
                posted={content.dateCreated}
                commentInput={commentInput}
            />
        </div>
    );
};

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired,
        userId: PropTypes.string.isRequired,
    }),
};
export default Post;
