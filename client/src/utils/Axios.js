import axios from 'axios';

const headers = {'Authorization': localStorage.getItem('access_token')};

const getNoToken = (url,  params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
        .then((res) => {
            console.log( res );
            resolve(res.data);
        });
    });
}

const get = (url,  params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params, headers)
        .then((res) => {
            resolve(res.data);
        });
    });
}


const post = (url,  data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data,headers)
        .then((res) => {
            resolve(res.data);
        });
    });
}

const deleteData = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.delete(url, data, headers)
        .then((res) => {
            resolve(res.data);
        });
    });
}

export {
    getNoToken,
    get,
    post,
    deleteData
};