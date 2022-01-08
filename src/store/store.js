import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import phonebookReducer from './phonebook/phonebook-reducer';

const phonebookPersistConfig = {
    key: 'contact',
    storage,
    blacklist: ['filter'],
};

const configStore = configureStore({
    reducer: {
        contacts: persistReducer(phonebookPersistConfig, phonebookReducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(configStore);

const store = { configStore, persistor };
export default store;
