// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts, addPost, deletePost } from '../actions/postActions';
// import PostForm from './PostForm'; // Import the PostForm component

// const PostList = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.posts);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const handleAddPost = (values) => {
//     dispatch(addPost(values)); // Dispatch the addPost action
//     closeForm();
//   };
//   const handleDeletePost = (postId) => {
//     dispatch(deletePost(postId)); // Dispatch the deletePost action
//   };

//   return (
//     <div className="container">
//       <button className="btn btn-primary btn-sm mb-3" onClick={openForm}>
//         Add New Post
//       </button>

//       {isFormOpen && (
//         <PostForm onSubmit={handleAddPost} />
//       )}

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}
//             <button className="btn btn-danger btn-sm ml-2" onClick={() => handleDeletePost(post.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts, addPost, deletePost } from '../actions/postActions';
// import PostForm from './PostForm';

// const PostList = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.posts);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   const handleAddPost = (values) => {
//     dispatch(addPost(values));
//     closeForm();
//   };

//   const handleDeletePost = (postId) => {
//     dispatch(deletePost(postId));
//   };

//   return (
//     <div className="container">
//       <button className="btn btn-primary btn-sm mb-3" onClick={openForm}>
//         Add New Post
//       </button>

//       {isFormOpen && (
//         <PostForm onSubmit={handleAddPost} />
//       )}

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id} className="d-flex justify-content-between align-items-center">
//             <div>{post.title}</div>
//             <button className="btn btn-danger btn-sm" onClick={() => handleDeletePost(post.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, addPost, deletePost } from '../actions/postActions';
import PostForm from './PostForm';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleAddPost = (values) => {
    dispatch(addPost(values));
    closeForm();
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className="container">
      <button className="btn btn-primary btn-sm mb-3" onClick={openForm}>
        Add New Post
      </button>

      {isFormOpen && (
        <PostForm onSubmit={handleAddPost} />
      )}

      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={post.id} className={`post-item ${index !== posts.length - 1 ? 'border-bottom' : ''}`}>
            <div className="d-flex justify-content-between align-items-center">
              <div>{post.title}</div>
              <button className="btn btn-danger btn-sm" onClick={() => handleDeletePost(post.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;


