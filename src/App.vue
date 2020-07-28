<template>
    <div id="app">
        <div v-show="!isLogin">
            <login></login>
        </div>
        <div v-show="isLogin">
            <router-view name="index"/>
        </div>

    </div>
</template>
<script>
    import Login from "./views/Login";

    export default {
        name: "app",
        components: {
            login: Login
        },
        data() {
            return {}
        },
        computed: {
            isLogin() {
                return this.$store.getters.isLogin;
            }

        },
        methods: {
            login: function () {
                this.$store.dispatch('login')
                alert("login")
            },
        },

    }
</script>
<style>

</style>
