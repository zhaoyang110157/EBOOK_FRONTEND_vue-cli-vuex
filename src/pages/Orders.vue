<template>
    <div>
        <div class="block">
            <el-date-picker
                    v-model="value"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions"
                    format="yyyy-MM-dd HH:mm:ss"
                    value-format="yyyy-MM-dd HH:mm:ss"
            style="margin-left: 25%;width:50%;">
            </el-date-picker>
        </div>
        <div v-if="isLogin!==-1" style="margin-left: 25%;width:50%;margin-top: 10px">
            <hr>
            you mother fucker
            <ul >
                <li v-for="(a,index) in searchOrder" :key="index"  style="list-style-type: none">
                    <div>用户名：{{users[a.id].account}}</div>
                    <div>时间：{{a.time}}</div>
                    <Order :order="a.orderitems"></Order>
                </li>
            </ul>
            <hr>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Order from "../components/Order";
    export default {
        name: "Orders",
        components: {Order},
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value:0,
                value1: '',
                value2:'',
                time:''
            };
        },
        created(){
            this.$store.commit('Orders/setAccount',this.isLogin);
            this.$store.dispatch('Books/getBooks')
            this.$store.dispatch('Orders/getOrders');
        },
        computed:{
            searchOrder() {
                let value = this.value;
                if(value)
                {
                    let value1 = this.value1;
                    let value2 = this.value2;
                    return this.orders.filter(function (number) {

                    })
                }
               return this.order;
            },
            ...mapState({
                orders: state => state.Orders.orders,
                isLogin : state => state.Person.isLogin,
                users : state => state.Person.users,
                books : state => state.Books.books
            })
        },
    }
</script>

<style scoped>

</style>