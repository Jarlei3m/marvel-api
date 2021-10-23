import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    apikey: process.env.NEXT_PUBLIC_MARVEL_API_KEY,
    ts: process.env.NEXT_PUBLIC_MARVEL_TIMESTAMP,
    hash: process.env.NEXT_PUBLIC_MARVEL_HASH,
  },
});
