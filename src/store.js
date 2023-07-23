import { configureStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'

const initialState = {};

const middleware = [thunk];

const store = configureStore(
    rootReducer,
    initialState,
    
);

export default store;