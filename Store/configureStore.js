import {createStore} from 'redux';
import toggleUserDatas from './Reducers/userReducer';

export default createStore(toggleUserDatas);