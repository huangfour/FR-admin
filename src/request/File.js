//文件请求相关API
import request from "../until/request";


export default {
    deleteFileByFileUrl(fileUrl) {
        console.log(fileUrl)
        const URL = '/file/deleteFile?fileUrl=' + fileUrl
        return request(URL, {
            method: 'GET',
        });
    },
    deleteImageByFileUrl(fileUrl) {
        const URL = '/file/deleteImage?fileUrl=' + fileUrl
        return request(URL, {
            method: 'GET',
        });
    },
    downloadImageByFileUrl(fileUrl,fileName) {
        const URL = '/file/downloadImage?fileUrl=' + fileUrl+'&fileName='+fileName;
        return request(URL, {
            method: 'POST',
            responseType: 'blob' // 表明返回服务器返回的数据类型
        });
    }
}