import {USER_TO_PROFILE, LOGOUT, LENGTH_PORT, LENGTH_NEW, LENGTH_USER, LENGTH_BLOG, HOME_BLOG} from '../action/Types'

const authData = JSON.parse(window.localStorage.getItem('auth'))
const initilAuth = authData ? !!authData.token : false
const initilId = authData ? authData.user.id : null
const initialToken = authData ? authData.token : null
const initilRole = authData ? authData.user.role: null


const initilState = {
    auth: initilAuth,
    userId: initilId,
    role: initilRole,
    token: initialToken,
    lengthPort: 0,
    lengthNews: 0,
    lengthUser: 0,
    lengthBlog: 0,
    page: ''
}

const userReducers = (state = initilState, action) => {

    switch (action.type) {
        case USER_TO_PROFILE:
            
        const auth = action.payload.token ? true : false

        return {
            ...state,
            auth: auth,
            token: action.payload.token,
            userId: action.payload.user.id,
            role: action.payload.user.role
        }
            
        case LOGOUT:

        return {
            ...state,
            auth: false,
            token: null,
            role: null,
            userId: null
        }

        case LENGTH_PORT: 

        return {
            ...state,
            lengthPort: action.payload
        }
        case LENGTH_NEW: 

        return {
            ...state,
            lengthNews: action.payload
        }
        case LENGTH_USER: 

        return {
            ...state,
            lengthUser: action.payload
        }
        case LENGTH_BLOG: 

        return {
            ...state,
            lengthBlog: action.payload
        }
        case HOME_BLOG: 

        return {
            ...state,
            page: action.payload
        }
    
        default:
            return state
    }
}

export default userReducers