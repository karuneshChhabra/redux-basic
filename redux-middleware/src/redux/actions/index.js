import * as constant from '../constants';

export const fetchNewTime = () =>{

    const host = 'https://andthetimeis.com';

    return {
        type:constant.FETCH_NEW_TIME,
        payload:new Date().toString(),
        meta:{
            type:'api',
            URL:host + '/PST/now.json'
        }
    }
}

