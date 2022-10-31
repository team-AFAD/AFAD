import axios from 'axios';

const headers = {'Authorization': localStorage.getItem('access_token')};
const BACK_SERVER = "http://localhost:8080/api";

const getNoToken = (url,  params) => {
    return new Promise((resolve, reject) => {
        axios.get(BACK_SERVER + url, params)
        .then((res) => {
            console.log( res );
            resolve(res.data);
        });
    });
}

const get = (url,  params) => {
    return new Promise((resolve, reject) => {
        axios.get(BACK_SERVER + url, params, headers)
        .then((res) => {
            resolve(res.data);
        });
    });
}


const post = (url,  data) => {
    return new Promise((resolve, reject) => {
        axios.post(BACK_SERVER + url, data,headers)
        .then((res) => {
            resolve(res.data);
        });
    });
}

const put = (url,  data) => {
    return new Promise((resolve, reject) => {
        axios.put(BACK_SERVER + url, data,headers)
        .then((res) => {
            resolve(res.data);
        });
    });
}

const deleteData = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.delete(BACK_SERVER + url, data, headers)
        .then((res) => {
            resolve(res.data);
        });
    });
}

export {
    getNoToken,
    get,
    post,
    put,
    deleteData
};