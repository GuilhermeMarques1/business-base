import axios from 'axios'

const api = () => {
  const defaultOptions = {
    baseURL: 'http://localhost:3000',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const instace = axios.create(defaultOptions)

  return instace
}

export default api()
