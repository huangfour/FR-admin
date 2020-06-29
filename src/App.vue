<template>
    <div id="app">
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>|-->
        <!--      <router-link to="/map">Map</router-link>-->
        <router-view name="index"/>
<!--        <man></man>-->
    </div>
</template>
<script>
    // import man from './components/Man'
    export default {
        name: "app",
        components: {
            // man
        }
    }
</script>
<style>

</style>
