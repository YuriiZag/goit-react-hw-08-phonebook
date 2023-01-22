import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer } from './phonebook/contactSlice';
import filterSlice from './phonebook/filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: ['payload.headers', 'payload.config', 'payload.request'],
    },
  }),
];

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}



export const store = configureStore({
  reducer: {
    authentification: persistReducer(persistConfig, authReducer),
    contacts: contactReducer,
    filter: filterSlice.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store)


