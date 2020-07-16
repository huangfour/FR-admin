<template>
    <div id="admin">
        <a-layout id="components-layout-demo-custom-trigger">
            <a-layout-sider :trigger="null" collapsible v-model="collapsed">
                <div class="logo" />
                <man_sider v-on:selectValue="updateValue"></man_sider>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon
                            class="trigger"
                            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click="()=> collapsed = !collapsed"
                    />
                    <man_header></man_header>
                </a-layout-header>
                <a-layout-content :style="{ margin: '12px 8px', padding: '12px', minHeight: '280px' }">
                    <man_content :selectValue="selectValue"></man_content>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>

</template>

<script>
    import man_header from "./Man-header"
    import man_sider from "./Man-sider"
    import man_content from "./Man-content"
    export default {
        name: "man",
        components: {
            man_sider,
            man_content,
            man_header
        },
        data() {
            return {
                selectValue:'',
                collapsed: false
            };
        },
        methods:{
            updateValue(e){
                this.selectValue=e
                console.log(e)
            }
        }

    }
</script>

<style scoped>
    #components-layout-demo-custom-trigger{
        height: 700px;
    }
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>