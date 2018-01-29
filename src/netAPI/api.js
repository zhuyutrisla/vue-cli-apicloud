/*
 * @Author: zhuyu 
 * @Date: 2018-01-15 14:42:41 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-01-15 15:39:52
 */

/**
 * @param  params  {object}
 * @return {object} | {JSON}
 * 这里存放请求的API
 * 区分get和post,get直接携带参数，post需要经过qs模块的处理
 * axios.defaults.withCredentials 为全局携带cookie设置，true代表携带
 * axios.defaults.headers  为请求头设置
 *
 *
 * 其它组件引用
 * import {getNoDataAPI,postDataAPI} from 'xx/xx/netAPI'     //相对路径引用
 * 
 * 组件中
 *  get /post 方法使用一致
 *  var parmas = {
 *    'a' :1,
 *    'b': 2 
 *  }
 *  getNoDataAPI(parmas).then( res => { console.log(res)}).catch( err => { console.log(err})
 *
 */


import axios from 'axios'
axios.defaults.withCredentials = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
const qs = require('qs')
const base  = 'http://xxx.com'


//get

//不带数据
export const getNoDataAPI = () => {return axios.get(`${base}/manager/all_classify`).then(res => res); }
//带数据
export const getDataAPI = params => {return axios.get(`${base}/manager/all_classify`, {params}).then(res => res); }


//post
export const postDataAPI =  params => { return axios.post(`${base}/signature/admin_login`, qs.stringify( params )).then(res => res.data); };


