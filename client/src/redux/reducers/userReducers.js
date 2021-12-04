import {USER_LOGIN, LOGOUT, LANGS} from '../action/Types'
import cookie from 'js-cookie';

const authData = JSON.parse(window.localStorage.getItem('auth'))
const initilAuth = authData ? !!authData.token : false
const initialToken = authData ? authData.token : null
const initilLang = cookie.get('i18next') || 'uz'

const initilState = {
    auth: initilAuth,
    token: initialToken,
    lang: initilLang
}

const userReducers = (state = initilState, action) => {

    switch (action.type) {
        case USER_LOGIN:

        const auth = action.payload.token ? true : false
        return {
            ...state,
            auth: auth,
            token: action.payload.token,
        }

        case LOGOUT: 

        return {
            ...state,
            auth: false,
            token: null,
        }
        case LANGS: 

        return {
            ...state,
            lang: action.payload
        }
    
        default:
            return state;
    }
}

export default userReducers