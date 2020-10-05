import TokenService from './token-service'
import config from '../config'

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}`, {  
        headers: {
            'authorization' : `basic ${TokenService.getAuthToken()}`,
          },
    })
      .then((res) => {
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  },
  getWords() {
    return fetch(`${config.API_ENDPOINT}/head`, {
        headers: {
            'authorization' : `basic ${TokenService.getAuthToken()}`,
          },
    })
      .then((res) => {
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  },
  postGuess() {
    return fetch(`${config.API_ENDPOINT}/guess`, {
        method: 'POST',
        headers: {
            'authorization' : `basic ${TokenService.getAuthToken()}`,
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