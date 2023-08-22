// src/reducers/postReducer.js
import * as types from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: null };
    case types.FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case types.ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
        case types.DELETE_POST:
          const updatedPosts = state.posts.filter(post => post.id !== action.payload);
          return {
            ...state,
            posts: updatedPosts,
          };
    default:
      return state;
  }
};

export default postReducer;
