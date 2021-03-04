import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { getUserByUserId } from "../../services/firebase";
import Image from "./Image";

const Post = ({ content }) => {
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
