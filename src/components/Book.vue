<template>
    <div>
        <ul>
            <li v-for="(a,index) in articles" :key="index" v-if="aim===index" style="list-style-type: none">
                <div style="display: flex;width: 100%;justify-content: space-around;">
                    <img v-bind:src="a.image">
                    <div style="display: flex;flex-direction: column;justify-content: center;width:60%">
                        <h3>{{a.title}}</h3>
                        <h5>{{a.writer}}</h5>
                        <h5>库存: {{a.inventory}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   售价：  {{a.price}}  元</h5>
                        <h5>{{a.ISBN}}</h5>

                        <h6>详情：{{a.intro}}</h6>
                    </div>
                </div>
            </li>
        </ul>


    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Book",
        computed: {
            ...mapState({
                aim: state => state.Books.aim,
                articles: state => state.Books.articles
            })
        }
    }
</script>

<style scoped>

</style>