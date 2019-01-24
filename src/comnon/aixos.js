import axios from "axios";
import qs from "qs";
import config from "../config";

// 请求拦截器
axios.interceptors.request.use((config) => {
    showLoading();
    return config;
}, (error) => {
    // showLoading()
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use((response) => {
    hideLoading();
    return response;
}, (error) => {
    // hideLoading()
    return Promise.resolve(error.response);
});

function hideLoading() {
  localStorage.isLoading = false;
  console.log("Request end");
}

function showLoading() {
  localStorage.isLoading = true;
  console.log("Request start");
}

function errorState(response) {
  console.log(response.status);
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data;
  } else {
    return("网络异常");
  }
}

function successState(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data;
  } else {
    return("网络异常");
  }
}

const httpServer = (opts, data) => {
  let Public = {};
  let httpDefaultOpts = {
    method: opts.method,
    // 请求协议
    //baseURL,  // 基础 url 前缀
    url: opts.url,
    // 请根路径
    baseURL: config.apiUrl,
    // 请求的地址
    timeout: 10000,
    // 超时时间, 单位毫秒
    params: Object.assign(Public, data),
    // get 请求时带的参数
    // 数据处理, 主要是配合下面headers里的Content-Type, 转成表单提交, 让后端可以直接用 $_POST 拿到数据
    data: qs.stringify(Object.assign(Public, data)),
    // post 请求的数据
    // 请求头信息
    // headers: opts.method == "get" ? {
    //     "X-Requested-With": "XMLHttpRequest",
    //     "Accept": "application/json",
    //     "Content-Type": "application/json; charset=UTF-8"
    // }: {
    //     "X-Requested-With": "XMLHttpRequest",
    //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    // }
  };

  if (opts.method === "get") {
    delete httpDefaultOpts.data;
  } else {
    delete httpDefaultOpts.params;
  }
 let promise = new Promise(function(resolve, reject) {
    axios(httpDefaultOpts).then((res) => {
        successState(res);
        resolve(res);
    }).catch((response) => {
        errorState(response);
        reject(response);
    })
 }
);

  return promise;
};

export default httpServer;
