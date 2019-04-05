import createStore from 'unistore';
import {
  cleanStorage,
  setStorage,
  getStorage,
  queryStringify
} from "./utils";
import creatApi from './api';
import creatI18n from './i18n';

export const state = {
  isLogin: getStorage('token') && getStorage('userInfo'),
  api: {},
  i18n: () => {},
  userInfo: {},
  issue: {},
  comments: [],
  error: ''
}

export const store = createStore(state);

export const actions = store => ({
  throwError(state, condition, msg) {
    return {
      error: !condition ? '' : msg
    }
  },

  setUserInfo(state, info) {
    return {
      userInfo: info
    }
  },

  setIssue(state, issue) {
    return {
      issue: issue
    }
  },

  logout(state, e) {
    e.preventDefault();
    cleanStorage();
    window.location.reload();
  },

  login(state, options, e) {
    e.preventDefault();
    setStorage("redirect_uri", window.location.href);
    window.location.href = `http://github.com/login/oauth/authorize?${queryStringify(
      {
        state: "Gitting",
        client_id: options.clientID,
        redirect_uri: window.location.href,
        scope: "public_repo"
      }
    )}`;
  }
})
