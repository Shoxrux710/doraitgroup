import {USER_TO_PROFILE, LOGOUT, LENGTH_PORT, LENGTH_NEW, LENGTH_USER, LENGTH_BLOG, HOME_BLOG} from './Types'


export const userInform = (items) => {
    
    window.localStorage.setItem('auth', JSON.stringify(items))

    return {
        type: USER_TO_PROFILE,
        payload: items
    }
}

export const logOut = () => {
    
    window.localStorage.removeItem('auth')

    return {
        type: LOGOUT
    }
}

export const inPort = (leng) => {

    return {
        type: LENGTH_PORT,
        payload: leng
    }
}

export const inNews = (leng) => {

    return {
        type: LENGTH_NEW,
        payload: leng
    }
}
export const inUsers = (leng) => {

    return {
        type: LENGTH_USER,
        payload: leng
    }
}
export const inBlogs = (leng) => {

    return {
        type: LENGTH_BLOG,
        payload: leng
    }
}

export const homePages = (pages) => {

    return {
        type: HOME_BLOG,
        payload: pages
    }
}