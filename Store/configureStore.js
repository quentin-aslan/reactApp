import {createStore} from 'redux';
import toggleUserDatas from './Reducers/userReducer';
import { persistStore, persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: "brkp", // Mettre ce que on veut ?
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, toggleUserDatas);
export const Store =  createStore(persistedReducer);
export const Persistor = persistStore(Store);