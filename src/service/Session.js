import axios from 'axios'
import Cookies from 'js-cookie'
import {Constant} from '../common/constant'
import router from '../router'

const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'
const TOKEN_NAME = Constant.TOKEN_NAME

const session = axios.create({
    xsrfCookieName: CSRF_COOKIE_NAME,
    xsrfHeaderName: CSRF_HEADER_NAME,
    timeout: 50000
})

session.interceptors.response.use(
    response => response,
    error => {
        const {status} = error.response
        if (status === 403 || status === 401) {
            router.push({name: 'Login'})
        }
        return Promise.reject(error)
    }
)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'

let token = Cookies.get(TOKEN_NAME)
if (token) {
    session.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default session
