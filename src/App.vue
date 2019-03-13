<template>
    <div id="app" >
        <Header/>
    </div>
</template>

<script>
import Header from  './components/Header.vue'
export default {
    name:'app',
    components:{
        Header
    }
}
</script>

<style>
    body{
    background-image: url("assets/blank.jpg");
    }
</style>
