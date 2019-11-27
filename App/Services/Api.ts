import { ApisauceConfig, ApisauceInstance, create } from 'apisauce';

const apiInstance: ApisauceInstance = create({
    baseURL: 'https://api.github.com/',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        client_id: '61af32f1fbaa8f49a5f8',
        client_secret: '124efffac2551b7ee0385469f391b82ac37d241d'
    },
    timeout: 10000
} as ApisauceConfig);

export default apiInstance;
