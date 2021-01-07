import React from "react";
import "./posts.css";

const Posts = ({
  postTitle,
  postBody,
  postId
}) => {
  return (
    <div className="postDiv">
        <div className="postTitle">
            <div>{postTitle}</div>
        </div>
        <div className="postBody">
            <div>{postBody}</div>
        </div>
    </div>
  );
};

export default Posts;
