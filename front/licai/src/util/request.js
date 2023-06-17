//封装axios对象
import axios from "axios";

//设置axios的默认值
axios.defaults.baseURL='http://localhost:8000/api'
axios.defaults.timeout=50000

//封装get请求
export function doGet(path, parameter){
    return axios({
        url:path,
        method:'GET',
        params:parameter
    })
}