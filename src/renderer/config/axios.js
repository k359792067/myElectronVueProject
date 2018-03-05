import axios from 'axios'

axios.defaults.timeout = 0
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://192.168.64.110:8060/api/'

export default axios
