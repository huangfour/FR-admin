<template>
    <div>
        <div>
            你点击了：{{selectValue}}
             <a-button @click="showData"></a-button>
        </div>

    </div>
    
</template>

<script>
    export default {
        name: "man-content",
        props:{
          selectValue:{
              type:String,
          }
        },
        components: {


        },
        data(){
            return{

            }
        },
        methods:{
            showData(){
                console.log("test",this.selectValue)
            }
        }
    }
</script>

<style scoped>

</style>