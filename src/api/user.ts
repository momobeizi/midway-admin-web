import { loginDataType, userInfoType } from '@/types/user';
import http from '@/utils/request';

// api接口 - 此处用了统一保存接口url路径
const api = {
  login: '/api/user/login', // 用户登录接口
  register: '/api/user/register', // 用户注册接口
  userInfo: '/api/user/get_userinfo', // 用户信息
};

/**
 * @description: 用户登录
 * @param {loginDataType} data 登录参数
 * @return 返回请求登录接口的结果
 */
export function postLoginAPI(data: loginDataType) {
  return http.post<{ token: string }>(api.login, data);
}

/**
 * @description: 用户注册
 * @param {loginDataType} data 注册参数
 * @return 注册结果
 */
export function postRegisterAPI(data: loginDataType) {
  return http.post(api.register, data);
}

/**
 * @description: 获取用户信息
 * @return 用户信息
 */
export function getUserInfoAPI() {
  return http.get<userInfoType>(api.userInfo);
}
