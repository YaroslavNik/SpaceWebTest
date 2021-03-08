import axios from 'axios';

export const apiURL = 'https://sweb.ru/export/turbojournal/'

const instance = axios.create({
  baseUrl: apiURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  },
  
})

export const appAPI = {
    getContent() {
        return instance.get('https://cors-anywhere.herokuapp.com/' + apiURL)
    }
}