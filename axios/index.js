import axios from 'axios'
import {Modal} from 'antd'
export default class Axios {
    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !==false){
            loading = document.getElementById("ajaxLoading")
            loading.style.display = 'block'
        }
        let baseApi = "http://localhost:7300/mock/5e91375c2dda7f1718942a57/konw"
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:"get",
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((response)=>{
                console.log(response)
                if(options.data && options.data.isShowLoading !==false){
                    loading = document.getElementById("ajaxLoading")
                    loading.style.display = 'none'
                }
                if(response.status === 200){
                    let res = response.data;
                    console.log(res)
                    if(res.code == '0'){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            }).catch(response=>{
                loading = document.getElementById("ajaxLoading")
                loading.style.display = 'none'
                Modal.info({
                    title:'提示',
                    content:'网络请求错误'
                })
            })
        })
    }
}