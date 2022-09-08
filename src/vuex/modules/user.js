import {Constant} from "../../common/constant"
import Cookies from "js-cookie"
import * as types from '../mutation-types'

const TOKEN_NAME = Constant.TOKEN_NAME
const REFRESH_TOKEN = Constant.REFRESH_TOKEN
const APP_USR = Constant.APP_USR

const state = {
    main: {
        user_info: Cookies.get(APP_USR) ? JSON.parse(Cookies.get(APP_USR)) : null,
        token: Cookies.get(TOKEN_NAME) ? Cookies.get(TOKEN_NAME) : null,
        refresh: Cookies.get(REFRESH_TOKEN) ? Cookies.get(REFRESH_TOKEN) : null,
    }
}

const mutations = {
    [types.LOGIN](state, {token, refresh}) {
        state.main.token = token
        state.main.refresh = refresh
    },
    [types.UPDATE_USER](state, {userInfo}) {
        state.main.user_info = userInfo
    },
    [types.LOGOUT](state) {
        state.main.user_info = null
        state.main.token = null
        state.main.refresh = null
    }
}

export default {
    state,
    mutations
}
