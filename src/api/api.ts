import https from './request';
import { ContentType, Method } from 'axios-mapper'
const getArticles = (data?: any) => https().request('/article/getArticles', Method.GET, data, ContentType.json)
const getArticleDetail = (data?: any) => https().request('/article/articleDetail', Method.GET, data, ContentType.json)
export {
    getArticles,
    getArticleDetail
}
