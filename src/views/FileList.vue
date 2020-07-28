<template>
    <div class="formViewBack">
        <div class="formViewButton">
            <a-button class="editable-add-btn">上传图片</a-button>
        </div>
        <table id="demo" lay-filter="test"></table>
    </div>
</template>

<script>
    import File from "../request/File";

    export default {
        name: "FileList",
        mounted() {
            layui.use(['table'], function () {
                var table = layui.table;
                table.render({
                    elem: '#demo'
                    , skin: 'line' //行边框风格
                    , even: false //开启隔行背景
                    , url: 'http://localhost:9012/fileInfo/selectAllFile'
                    // , where: {userId: 1}
                    // , cellMinWidth: 20 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
                    , cols: [[
                        {field: 'fileName', title: '文件名', width: '10%'}
                        , {field: 'fileStyle', title: '文件类型', width: '10%'}
                        , {field: 'creatTime', title: '创建时间', width: '15%'}
                        , {field: 'fileUrl', title: '文件路径', width: '45%'}
                        , {fixed: 'right', title: '操作', toolbar: '#barDemo', width: '20%'}
                    ]]
                });
                table.on('tool(test)', function (obj) {
                    const data = obj.data; //获得当前行数据
                    const tr = obj.tr; //获得当前行 tr 的 DOM 对象（如果有的话）
                    switch (obj.event) {//获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
                        case 'info':
                            layer.open({
                                type: 1,
                                title: false,
                                area: ['500px', '300px'],
                                content: '传入任意的文本或html' //这里content是一个普通的String
                            });
                            console.log(data)
                            break;
                        case 'download':
                            layer.msg('开始下载');
                            File.downloadImageByFileUrl(data.fileUrl, data.fileName).then(res => {
                                console.log("文件下载成功")
                                const content = res
                                const blob = new Blob([content])
                                const fileName = data.fileName
                                if ('download' in document.createElement('a')) { // 非IE下载
                                    const elink = document.createElement('a')
                                    elink.download = fileName
                                    elink.style.display = 'none'
                                    elink.href = URL.createObjectURL(blob)
                                    document.body.appendChild(elink)
                                    elink.click()
                                    URL.revokeObjectURL(elink.href) // 释放URL 对象
                                    document.body.removeChild(elink)
                                } else { // IE10+下载
                                    navigator.msSaveBlob(blob, fileName)
                                }
                            })
                            break;
                        case 'del':
                            layer.confirm('真的删除行么', function (index) {
                                if (data.style == 0) {
                                    //删除文件
                                    File.deleteFileByFileUrl(data.fileUrl).then(res => {
                                        console.log("文件删除成功")
                                    })
                                } else if (data.style == 1) {
                                    //删除图片
                                    File.deleteImageByFileUrl(data.fileUrl).then(res => {
                                        console.log("图片删除成功")
                                    })
                                }
                                obj.del();
                                layer.close(index);
                            });
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
