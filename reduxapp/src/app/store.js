
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from '../features/dragonsSlice';
import missionsReducer from '../features/missionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
});

export default store;
