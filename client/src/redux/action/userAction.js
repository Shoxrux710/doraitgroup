import {USER_LOGIN, USER_REGISTER, LOGOUT, LANGS} from './Types'

export const userProfile = (items) => {

    window.localStorage.setItem('auth', JSON.stringify(items))

    return {
        type: USER_LOGIN,
        payload: items
    }
}
export const resProfile = (items) => {

    window.localStorage.setItem('auth', JSON.stringify(items))

    return {
        type: USER_REGISTER,
        payload: items
    }
}

export const logOut = () => {
    
    window.localStorage.removeItem('auth')

    return {
        type: LOGOUT
    }
}

export const langThree = (langs) => {
    
    return {
        type: LANGS,
        payload: langs
    }
}