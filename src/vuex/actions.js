import Cookies from 'js-cookie'
import {Constant} from '../common/constant'
import session from '../service/Session'
import * as types from './mutation-types'
import router from "../router";

const TOKEN_NAME = Constant.TOKEN_NAME
const REFRESH_TOKEN = Constant.REFRESH_TOKEN
const APP_USR = Constant.APP_USR


export const login = ({commit}, {token, refresh}) => {
    Cookies.set(TOKEN_NAME, token, {expires: 365})
    Cookies.set(REFRESH_TOKEN, refresh, {expires: 365})
    commit(types.LOGIN, {token, refresh})
    session.defaults.headers['Authorization'] = `Bearer ${token}`
}

export const logout = ({commit}) => {
    Cookies.remove(TOKEN_NAME)
    Cookies.remove(REFRESH_TOKEN)
    Cookies.remove(APP_USR)
    commit(types.UPDATE_USER, {userInfo: null})
    commit(types.LOGOUT)
    router.push({name: 'login'})
}

export const updateUser = ({commit}, {userInfo}) => {
    Cookies.set(APP_USR, userInfo, {expires: 365})
    commit(types.UPDATE_USER, {userInfo})
}
