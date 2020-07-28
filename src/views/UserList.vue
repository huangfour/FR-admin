<template>
    <div class="formViewBack">
        <div class="formViewButton">
            <a-button class="editable-add-btn">添加用户</a-button>
        </div>
        <table id="demo" lay-filter="test"></table>
    </div>

</template>

<script>
    import User from "../request/User"

    export default {
        name: "UserList",
        mounted() {
            layui.use(['table'], function () {
                var table = layui.table;
                table.render({
                    elem: '#demo'
                    , skin: 'line' //行边框风格
                    , even: false //开启隔行背景
                    , url: 'http://localhost:9012/user/selectAllUser'
                    // , where: {userId: 1}
                    // , cellMinWidth: 20 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
                    , cols: [[
                        {field: 'userName', title: '用户名', width: '10%'}
                        , {field: 'userCard', title: '身份证号', width: '10%'}
                        , {field: 'userPhone', title: '用户电话', width: '15%'}
                        , {field: 'userAccount', title: '用户账号', width: '45%'}
                        , {fixed: 'right', title: '操作', toolbar: '#userBar', width: '20%'}
                    ]]
                });
                table.on('tool(test)', function (obj) {
                    const data = obj.data; //获得当前行数据
                    const tr = obj.tr; //获得当前行 tr 的 DOM 对象（如果有的话）
                    switch (obj.event) {//获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
                        case 'info':
                            console.log(data)
                            layer.open({
                                type: '1',
                                title: '用户人脸',
                                area: ['600px', '600px'],
                                content: '<img src="' + data.recognitionUrl + '" alt="图片名">'

                            });

                            break;
                        case 'download':
                            layer.msg('开始下载');
                            break;
                        case 'del':
                            break;
                    }
                })

            })
        }
    };
</script>

<style scoped>
    .editable-add-btn {
        margin-bottom: 8px;
    }

    .formViewBack {
        background-color: white;
    }

    .formViewButton {
        padding: 12px;
        margin-top: 4px;
        margin-left: 4px;
    }

</style>