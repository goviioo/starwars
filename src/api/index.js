import axios from 'axios';
import config from '../../config.json';
import { getCharActionError, getCharActionPending, getCharActionSuccess } from '../redux/actions';
import apiConstants from './apiConstants.json';
axios.defaults.baseURL = config.baseUrl;

const api = axios.create();


export const getCharacterList = (url = apiConstants.getCharacterList) => {
    return dispatch => {
        dispatch(getCharActionPending(true));
        api.get(url).then(res => {
            dispatch(getCharActionSuccess(res.data));
            console.log(res);
        }).catch(err => {
            dispatch(getCharActionError(err));
        });
    }
}