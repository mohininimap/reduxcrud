// src/actions/postActions.js
import * as types from './types';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: types.FETCH_POSTS_REQUEST });

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    dispatch({ type: types.FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_POSTS_FAILURE, payload: error.message });
  }
};

export const addPost = (newPost) => {
    return {
      type: types.ADD_POST,
      payload: newPost,
    };
  };
 
  export const deletePost = (postId) => ({
    type: types.DELETE_POST,
    payload: postId,
  });