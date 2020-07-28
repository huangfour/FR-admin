<template>
    <div class="about">
        <div class="gutter-example">
            <a-row :gutter="16">
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                        <div class="layui-card">
                            <div class="layui-card-header">文件总数</div>
                            <div class="layui-card-body">
                                <div class="font-style">12344</div>
                            </div>
                        </div>
                    </div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                        <div class="layui-card">
                            <div class="layui-card-header">文件总容量</div>
                            <div class="layui-card-body">
                                <div class="font-style">12344MB</div>
                            </div>
                        </div>
                    </div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                      <div class="layui-card">
                        <div class="layui-card-header">用户总数量</div>
                        <div class="layui-card-body">
                          <div class="font-style">5674</div>
                        </div>
                      </div>
                    </div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                      <div class="layui-card">
                        <div class="layui-card-header">今日人脸注册数量</div>
                        <div class="layui-card-body">
                          <div class="font-style">123</div>
                        </div>
                      </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Console',

    }
</script>
<style scoped>
    .gutter-box {
        background: rgb(240, 242, 245);
        padding: 10px 0;
        height: 140px;
    }

    .font-style {
      font-size: 36px;
      line-height: 36px;
      padding: 5px 0 10px;
      overflow: hidden;
      white-space: nowrap;
      word-break: break-all;
      text-overflow: ellipsis;
    }

</style>
