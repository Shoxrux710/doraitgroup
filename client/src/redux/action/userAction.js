import {USER_LOGIN, USER_REGISTER} from './Types'

export const userProfile = (items) => {

    window.localStorage.setItem('auth', JSON.stringify(items))

    return {
        type: USER_LOGIN,
        payload: items
    }
}
export const resProfile = (items) => {

    window.localStorage.setItem('resAuth', JSON.stringify(items))

    return {
        type: USER_REGISTER,
        payload: items
    }
}