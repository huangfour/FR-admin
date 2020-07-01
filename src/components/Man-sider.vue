<template>
    <div>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" @click="handleClick">
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="appstore" /><span>首页管理</span></span>
                <a-menu-item key="1">About</a-menu-item>
                <a-menu-item key="2">Map</a-menu-item>
                <a-menu-item key="3">Home</a-menu-item>

            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="appstore" /><span>商品管理</span></span>
                <a-menu-item key="4">Home</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <span slot="title"><a-icon type="appstore" /><span>订单管理</span></span>

            </a-sub-menu>
            <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="appstore" /><span>用户管理</span></span>
                <a-menu-item key="5">订单信息</a-menu-item>
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