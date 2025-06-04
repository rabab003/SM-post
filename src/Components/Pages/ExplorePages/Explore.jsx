import React from 'react';
import PostsList from './PostsList';

function Explore() {
  return (
    <div className='container px-4 py-6 mx-auto'>
      <PostsList/>
    </div>
  );
}

export default React.memo(Explore);