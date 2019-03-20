<template>
    <div class="parallax-window" data-parallax="scroll" data-image-src="img/bg-img-05.jpg">
        <div>
            <span>书籍展览</span>
            <button v-if="this.$store.state.isManager">添加书籍 </button>
        </div>
    </div>
</template>

<script>
    import Book from "../components/Book"
    export default {
        name: "Books",
        components:{
        }
    }
</script>

<style scoped>

</style>