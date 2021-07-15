import axios from 'axios'

const HttpRequest = axios.create({

    baseURL: 'http://localhost:3004/',
})

export default HttpRequest