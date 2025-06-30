import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/counter/MailSlice';
import userReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
