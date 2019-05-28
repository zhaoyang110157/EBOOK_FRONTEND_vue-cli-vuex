<template>
    <div >
        <ul v-if="isLogin!==-1">
            <li v-for="(a,index) in carts" :key="index"  style="list-style-type: none">
                <div style="display: flex;width: 100%;justify-content: space-around;">
                    <img v-bind:src="books[a.PK.bid].image" style="height: 70px">
                    <div style="display: flex;flex-direction: column;justify-content: center;width:60%">
                        <h3>{{books[a.PK.bid].title}}</h3>
                        <h5>售价：{{books[a.PK.bid].price}}  元</h5>
                    </div>
                    <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups" >
                        <div class="btn-group mr-2" role="group" aria-label="First group" style="height: 38px">
                            <button type="button" @click="a.sales--;" class="btn btn-outline-secondary">- 1</button>
                            <input type="text" class="form-control "  style="line-height: 30px; width: 50px;" aria-label="Input group example" aria-describedby="btnGroupAddon" v-model="a.sales">
                            <button type="button" @click="a.sales++;" class="btn btn-outline-secondary">+1</button>
                            <button type="button" @click="a.sales=0;" class="btn btn-outline-secondary">del</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <button type="button"  @click="buy()" class="btn btn-outline-secondary" style="margin-left: 40%;margin-top: 50px ">提交订单</button>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Cart",

        methods:{
            buy(){
                this.$store.commit('Orders/setAccount',this.isLogin);
                this.$store.commit('Orders/buyBooks',this.carts);
                this.$store.commit('Cart/clear');
                this.$store.dispatch('Books/getBooks')
            }
        },
        created(){
            this.$store.dispatch('Orders/getOrders');
        },
        computed:{
            check0(){
                return this.$store.state.Cart.carts.find((item)=>{
                    return item.inventory===0
                })
            },
            ...mapState({
                carts: state => state.Cart.carts,
                isLogin : state => state.Person.isLogin,
                books : state => state.Books.books
            })
        },
        watch:{
            check0(newcheck){
                this.$store.commit('Cart/delCart',newcheck)
            }
        }
    }
</script>

<style scoped>

</style>