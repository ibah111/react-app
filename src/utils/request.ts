import axios from 'axios';
import config from '../config/config.json';

export const request = axios.create({
  baseURL: config.url,
  headers: {
    Accept: 'application/json',
  },
});
