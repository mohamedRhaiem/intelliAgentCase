import axios from 'axios';

const github = axios.create({
    baseURL: 'https://api.github.com/',
});

const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;
if (token) {
  github.defaults.headers.common.Authorization = `token ${token}`;
}

export default {
    get: github.get
};