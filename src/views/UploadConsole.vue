<template>
    <div class="c-tab-panel-box">
        <a-row>
            <a-col :span="10" class="panel-box-left">
                <div class="con-image-show">
                    <div class="con-image-show-top">
                        <a-row type="flex" justify="space-around">
                            <a-col :span="4">
                                col-4
                            </a-col>
                            <a-col :span="4">
                                col-4
                            </a-col>
                            <a-col :span="4">
                                col-4
                            </a-col>
                        </a-row>
                    </div>
                </div>
                <div class="lay1">
                    <img class="img-show"
                         :src="previewImage"
                    />
                </div>
            </a-col>
            <a-col :span="14" class="panel-box-right">
                <div class="con-result-show">
                    <a-upload
                            name="file"
                            :multiple="true"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            :headers="headers"
                            @change="handleChange"
                    >
                        <a-button>
                            <a-icon type="upload"/>
                            上传图片
                        </a-button>
                    </a-upload>
                </div>
                <div class="lay2">

                </div>
            </a-col>
        </a-row>
    </div>

</template>

<script>

    export default {
        name: "UploadConsole",
        data() {
            return {
                previewImage: '',
                headers: {
                    authorization: 'authorization-text',
                },
                fileList: [
                    {
                        uid: '-1',
                        name: 'image.png',
                        status: 'done',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },

                ],
            };
        },
        methods: {
            handleChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    console.log(info.file.name,'file uploaded successfully');

                } else if (info.file.status === 'error') {
                    console.log(info.file.name,'file upload failed');
                }
            },
        },
    };
</script>

<style scoped>
    .c-tab-panel-box {
        margin: 4px;
        padding: 2px;

    }

    .panel-box-left {
        height: 560px;
    }

    .panel-box-right {
        height: 560px;
    }

    .con-image-show {
        height: 24%;
        border: 1px solid #393D49;
    }

    .con-result-show {
        height: 14%;
        border: 1px solid #393D49;

    }

    .con-image-show-top {
        padding: 2px;
        height: 100%;
    }

    .lay1 {
        position: relative;
        padding-bottom: 100%;
        width: 100%;
        height: 76%;
        border: 1px solid #393D49;
    }
    .img-show {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    .lay2 {
        height: 86%;
        border: 1px solid #393D49;
    }

    /* you can make up upload button and sample style by using stylesheets */
    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }

    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }

</style>