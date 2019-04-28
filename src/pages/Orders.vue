<template>
    <div>
        <ul v-if="isLogin!==-1">
            <li v-for="(a,index) in order" :key="index"  style="list-style-type: none">
                <div style="display: flex;width: 100%;justify-content: space-around;">
                    <img v-bind:src="a.image" style="height: 70px">
                    <div style="display: flex;flex-direction: column;justify-content: center;width:60%">
                        <h3>{{a.title}}</h3>
                        <h5>售价：{{a.price}}  元  数量： {{a.inventory}}</h5>
                        <h5>购买时间： {{a.time}}</h5>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Orders",
        created(){
            this.$store.commit('Orders/setAccount',this.users[this.isLogin].account);
            this.$store.dispatch('Orders/getOrders');
        },
        computed:{
            ...mapState({
                order: state => state.Orders.order,
                isLogin : state => state.Person.isLogin,
                users : state => state.Person.users
            })
        },
    }
</script>

<style scoped>

</style>