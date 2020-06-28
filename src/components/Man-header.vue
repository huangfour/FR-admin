<template>
    <div class="man_header">
        <div class="blank"/>
        <span>
             <span class="user">
                <a-icon type="bell" />
            </span>
             <span class="user">
                 <a-avatar icon="user" size="small"/>
            </span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "man-header",
        methods:{




        }
    }
</script>

<style scoped>
    .man_header{
        float: right;
        height: 64px;
        width: auto;
    }
    .user{
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 12px;
        padding-right: 12px;
    }
    .blank{
        width: 14px;
        float: right;
    }

</style>