import axios from 'axios';

axios.interceptors.request.use((config) => {
    const userData = JSON.parse(window.localStorage.getItem('auth'));
    const token = userData ? userData.token : null;

    config.headers = {
        'authorization': `Bearer ${token}`
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    console.log(error.response);
    const origionalConfig = error.response;

    const userData = JSON.parse(window.localStorage.getItem('auth'));
    const refreshToken = userData ? userData.rToken : null;

    try {
        if (origionalConfig.status === 403 && !origionalConfig.config._retry) {

            origionalConfig.config._retry = true;

            const result = await fetch('/api/user/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ refreshToken })
            });

            const response = await result.json();
            console.log(response);
            const { accessToken } = response;

            window.localStorage.setItem('auth', JSON.stringify({...userData, token: accessToken}));

            return axios(origionalConfig.config);
        }
    } catch (e) {
        return Promise.reject(e)
    }


    return Promise.reject(error);
});

export default axios;