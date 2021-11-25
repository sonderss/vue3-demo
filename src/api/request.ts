/*
 * @Description: axios 封装网络请求
 * @Author: sonders
 * @Date: 2021-11-25 16:17
 */
import HttpClient, { HttpClientConfig } from 'axios-mapper'
import networkConfig from '../config/network.config'
const https = (hasToken: Boolean = true) => {
    const config: HttpClientConfig = {
        baseURL: networkConfig.baseUrl,
        headers: {
            "content-type": networkConfig.contentType
        }
    }
    return new HttpClient(config)
}
export default https