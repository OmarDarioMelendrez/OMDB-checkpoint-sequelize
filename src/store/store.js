import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './moviesReducer';
import userReducer from './userReducer';

export default configureStore({
  reducer: {
      search: moviesReducer,
      user: userReducer,
  },
})