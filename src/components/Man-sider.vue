<template>
    <div>
        <a-menu theme="dark" mode="inline"  :defaultSelectedKeys="['1']" @click="handleClick">
            <a-menu-item key="1">控制台</a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="folder" /><span>文件管理</span></span>
                <a-menu-item key="2">文件列表</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="folder" /><span>用户管理</span></span>
                <a-menu-item key="3">用户列表</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "man-sider",
        methods: {
            handleClick(e) {
                console.log('click ', e.key);
                this.$emit("selectValue",e.key);
            },
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>