import React, { useState } from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div >
      <div >
        <img
          src={post.profileImage}
          alt="profile"
          
        />
        <span >{post.username}</span>
      </div>
      <p >{post.content}</p>
      <div >
        <LikeButton isLiked={liked} onToggle={handleLikeToggle} />
      </div>
    </div>
  );
};

export default PostCard;