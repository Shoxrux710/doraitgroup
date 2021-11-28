import {USER_LOGIN} from '../action/Types'

const authData = JSON.parse(window.localStorage.getItem('auth'))
const initilAuth = authData ? !!authData.token : false
const initialToken = authData ? authData.token : null

const initilState = {
    auth: initilAuth,
    token: initialToken,
}

const userReducers = (state = initilState, action) => {

    switch (action.type) {
        case USER_LOGIN:

        const auth = action.payload.token ? true : false
        return {
            ...state,
            auth: auth,
            token: action.payload.token
        }
    
        default:
            return state;
    }
}

export default userReducers