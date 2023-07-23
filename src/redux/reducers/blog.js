import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog_list: null,
  blog_list_category: null,
  filtered_posts: null,
  post: null,
  count: null,
  next: null,
  previous: null,
};
const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    GET_BLOG_LIST_SUCCESS(state, action) {
      state.blog_list = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    GET_BLOG_LIST_FAIL(state, action) {
      state.blog_list = null;
      state.count = null;
      state.next = null;
      state.previous = null;
    },
    GET_BLOG_SUCCESS(state, action) {
      state.blog_list = action.payload.post;
    },
    GET_BLOG_FAIL(state, action) {
      state.blog_list = null;
    },
    GET_BLOG_LIST_CATEGORIES_SUCCESS(state, action) {
      state.blog_list_category = action.payload.results.posts;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    GET_BLOG_LIST_CATEGORIES_FAIL(state, action) {
      state.blog_list_category = null;
      state.count = null;
      state.next = null;
      state.previous = null;
    },
    GET_SEARCH_BLOG_SUCCESS(state, action) {
      state.filtered_posts = action.payload.results.filtered_posts;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    GET_SEARCH_BLOG_FAIL(state, action) {
      state.filtered_posts = null;
      state.count = null;
      state.next = null;
      state.previous = null;
    },
  },
});
export const {
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_LIST_CATEGORIES_SUCCESS,
  GET_BLOG_LIST_CATEGORIES_FAIL,
  GET_SEARCH_BLOG_SUCCESS,
  GET_SEARCH_BLOG_FAIL,
} = blogSlice.actions;
export default blogSlice.reducer;
