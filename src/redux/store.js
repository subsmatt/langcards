import { configureStore } from '@reduxjs/toolkit';
import toolbarReducer from './reducers/toolbarSlice';

export default configureStore({
  reducer: {
    toolbar: toolbarReducer,
  },
});