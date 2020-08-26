import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';

import PostHeader from './PostHeader';
import LikeSection from './LikeSection';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
 
  return (
    <div className='posts-container-wrapper'>
      {posts.map((item) => (
        <Post key = {item.id} post = {item} likePost={likePost}   />
      ))}
    

      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
   
    </div>
  );
};

export default Posts;
