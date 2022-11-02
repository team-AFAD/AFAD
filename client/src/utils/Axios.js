import axios from 'axios';

const headers = {'Authorization': localStorage.getItem('access_token')};
const BACK_SERVER = process.env.REACT_APP_URL + "/api";

const getNoToken = (url,  data) => {
    console.log( data );
    return new Promise((resolve, reject) => {
        axios.get(BACK_SERVER + url, {params: data})
        .then((res) => {
            console.log( res );
            resolve(res);
        });
    });
}

const get = (url,  data) => {
    return new Promise((resolve, reject) => {
        axios.get(BACK_SERVER + url, {params: data}, {headers})
        .then((res) => {
            resolve(res);
        });
    });
}


const post = (url,  data) => {
    return new Promise((resolve, reject) => {
        axios.post(BACK_SERVER + url, data, {headers})
        .then((res) => {
            resolve(res);
        });
    });
}

const put = (url,  data) => {
    return new Promise((resolve, reject) => {
        axios.put(BACK_SERVER + url, data, {headers})
        .then((res) => {
            resolve(res);
        });
    });
}
const deleteNoToken = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.delete(BACK_SERVER + url, data)
        .then((res) => {
            resolve(res);
        });
    });
}
const deleteData = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.delete(BACK_SERVER + url, {headers})
        .then((res) => {
            resolve(res);
        });
    });
}

export {
    getNoToken,
    get,
    post,
    put,
    deleteData,
    deleteNoToken
};