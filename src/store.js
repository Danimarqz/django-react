import { configureStore} from '@reduxjs/toolkit';
import blogReducer from './redux/reducers/blog';
import categoriesReducer from './redux/reducers/categories';

const initialState = {};


const store = configureStore({
    reducer: {
        blog: blogReducer,
        categories: categoriesReducer,
    },
});

export default store;