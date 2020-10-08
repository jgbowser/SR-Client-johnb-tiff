import TokenService from './token-service'
import config from '../config'

const LanguageApiService = {
  getLanguageAndWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {  
        headers: {
            'authorization' : `bearer ${TokenService.getAuthToken()}`,
          },
    })
      .then((res) => {
          return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  },
  getStartWord() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
        headers: {
            'authorization' : `bearer ${TokenService.getAuthToken()}`,
          },
    })
      .then((res) => {
          return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  },
  postGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
        method: 'POST',
        headers: {
            'authorization' : `bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json',
          },
        body: JSON.stringify({ guess }),
    })
      .then((res) => {
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
  }
}
export default LanguageApiService