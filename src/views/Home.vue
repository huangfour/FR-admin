<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  //组件HelloWorld为其子组件，可以通过props传递参数
// @ is an alias to /src
import HelloWorld from '@/views/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
