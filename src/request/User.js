//文件请求相关API
import request from "../until/request";

export default {
    login(userInfo) {
        return request({
            url:'/user/login?username='+userInfo.username+'&password='+userInfo.password,
            method: 'POST',
        });
    },
}