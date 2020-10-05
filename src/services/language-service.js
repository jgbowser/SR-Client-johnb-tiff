import TokenService from './token-service'
import config from '../config'

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {  
        headers: {
            'authorization' : `bearer ${TokenService.getAuthToken()}`,
          },
    })
      .then((res) => {
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  },
  getWords() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
        headers: {
            'authorization' : `bearer ${TokenService.getAuthToken()}`,
          },
    })
      .then((res) => {
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  },
  postGuess() {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
        method: 'POST',
        headers: {
            'authorization' : `bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json',
          },
    })
      .then((res) => {
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  }
}
module.exports = LanguageApiService