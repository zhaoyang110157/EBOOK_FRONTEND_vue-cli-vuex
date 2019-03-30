<template>
    <div>
        <ul>
            <li v-for="(a,index) in carts" :key="index"  style="list-style-type: none">
                <div style="display: flex;width: 100%;justify-content: space-around;">
                    <img v-bind:src="a.image" style="height: 70px">
                    <div style="display: flex;flex-direction: column;justify-content: center;width:60%">
                        <h3>{{a.title}}</h3>
                        <h5>数量: {{a.inventory}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   售价：{{a.price}}  元</h5>
                    </div>
                    <div class="btn-group mr-2" role="group" aria-label="First group" style="height: 30px">
                        <button type="button" @click="a.inventory--;" class="btn btn-outline-secondary">- 1</button>
                        <button type="button" @click="a.inventory++;" class="btn btn-outline-secondary">+1</button>
                    </div>
                </div>
            </li>
        </ul>
        <button type="button"  @click="buy()" class="btn btn-outline-secondary">提交订单</button>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Cart",
        methods:{
            buy(){
                this.$store.state.Cart.carts.splice(0);
            }
        },
        computed:{
            ...mapState({
                carts: state => state.Cart.carts
            })
        }
    }
</script>

<style scoped>

</style>