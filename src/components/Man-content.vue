<template>
    <div>
        <router-view/>
    </div>

</template>

<script>
    export default {
        name: "man-content",
        props: {
            selectValue: {
                type: String,
            }
        },
        components: {},
        watch: {
            //监听左侧点击，进行跳转
            selectValue: function () {
                if (this.selectValue === '1') {
                    this.$router.push('/about')
                } else if (this.selectValue === '2') {
                    this.$router.push('/map')
                } else if (this.selectValue === '3') {
                    this.$router.push('/helloworld')
                }
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>

</style>