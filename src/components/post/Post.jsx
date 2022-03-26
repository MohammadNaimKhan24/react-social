import { MoreVert } from "@material-ui/icons";
import React, { useState } from "react";
import { Users } from "../../dummyData";
import "./post.css";

export default function Post({ post }) {
   const [like, setLike] = useState(post.like);
   const [isLiked, setIsLiked] = useState(false);

   const likeHandler = () => {
      setLike(isLiked ? like -1 : like + 1);
      setIsLiked(!isLiked);
   }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="post-profile"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="couple" />
        </div>
        <div className="postBottom">

          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="like" className="likeIcon" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="like" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>

        </div>
      </div>
    </div>
  );
}
