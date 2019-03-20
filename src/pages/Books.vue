<template>
    <div class="parallax-window" data-parallax="scroll" data-image-src="img/bg-img-05.jpg">
        <div>
            <span>书籍展览</span>
            <button class="btn btn-default btn-lg" v-if="this.$store.state.Person.isManager">添加书籍 </button>
        </div>
        <Book></Book>
    </div>
</template>

<script>
    import Book from "../components/Book"
    export default {
        name: "Books",
        components:{
            Book
        }
    }
</script>

<style scoped>

</style>