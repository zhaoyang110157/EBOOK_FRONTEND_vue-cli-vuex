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
            <ul >
                <li v-for="(a,index) in searchOrder" :key="index"  style="list-style-type: none">
                    <div class="container-fluid mb-5 mt-5 border" style="background: rgba(255,255,255,0.3)">
                        <el-row >
                            <el-col :span="2"><i class="iconfont icon-dingdan"></i></el-col>
                            <el-col :span="5" v-if="isManager"><div>用户名：{{users[a.id].account}}</div></el-col>
                            <el-col :span="5" v-else><div class="name">用户名：{{user.account}}</div></el-col>
                            <el-col :span="12" style=""><div class = "name">  时间：{{a.time}}</div></el-col>
                        </el-row>
                        <div class="container-fluid mb-5 mt-5 border">
                            <div class="container-fluid mt-4 mb-4">
                                <el-row class="mb-3 mt-3">
                                    <el-col :span="2"><i class="iconfont icon-dingdan"></i></el-col>
                                </el-row>
                                <div v-for="(item, index) in a.orderitems" :key="index" class="">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="name mb-3 mt-3">
                                                {{books[item.bid].title}}
                                            </div>
                                          </div>
                                        <div class="col-md-3 row money">
                                            <div class="col-md-6">
                                                {{item.sales}}×
                                            </div>
                                            <div class="col-md-6 money">
                                                {{Math.round(item.price*100)/100}}
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                </div>

                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Orders",
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
                console.log(value)
                if(value)
                {
                    let value1 = this.value[0];
                    value1 = new Date(value1)
                    value1 = value1.getTime()
                    let value2 = this.value[1];
                    value2 = new Date(value2)
                    value2 = value2.getTime()
                    console.log("value1"+value1);
                    console.log("value2"+value2)
                    return this.orders.filter(function (number) {
                        let time =  new Date(number.time)
                        time = time.getTime()
                        console.log("time"+time);
                        return time >= value1 && time <= value2
                    })
                }
               return this.orders;
            },
            ...mapState({
                orders: state => state.Orders.orders,
                isLogin : state => state.Person.isLogin,
                users : state => state.Person.users,
                books : state => state.Books.books,
                isManager : state => state.Person.isManager,
                user : state => state.Person.user
            })
        },
    }
</script>

<style scoped>
    .imgbox{
        font-size: 0;
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    .name{
        font-family: 黑体;
        font-size: 18px;
    }

    .author{
        font-family: 仿宋;
        font-size: 12px;
    }

    .total {
        font-family: 等线;
        font-size: 16px;
    }

    .money{
        font-weight: 500;
        font-size: 20px;
        font-family: tohoma,arial;
    }

</style>