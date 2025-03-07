import React, { useState } from 'react';

const LikeButton = ({ isLiked, onToggle }) => {
  return (
    <button
      onClick={onToggle}>
      {isLiked ? '❤️ Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;