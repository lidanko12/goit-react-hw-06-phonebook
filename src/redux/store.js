
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import phonebookReducer from './phonebook/phonebook-reducer';


const persistConfig = {
    key: 'contact',
    storage,
    blacklist:['filter']
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
export const store = configureStore({
  reducer: persistReducer(persistConfig, phonebookReducer),
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);