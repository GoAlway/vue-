import axios from './http'
import BASE from './base'
import qs from 'qs'

const LOGIN = {
    login(params) {
        return axios.post(`${BASE.API_RUL}/server.axp`, qs.stringify(params))
    }
}

export default LOGIN