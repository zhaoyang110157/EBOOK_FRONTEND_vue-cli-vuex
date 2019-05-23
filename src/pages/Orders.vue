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
            <h5>购买时间： {{a.time}}</h5>
            <ul >
                <li v-for="(a,index) in searchOrder.orderitem" :key="index"  style="list-style-type: none">
                    <div style="display: flex;width: 100%;justify-content: space-around;">
                        <img v-bind:src="a.image" style="height: 70px">
                        <div style="display: flex;flex-direction: column;justify-content: center;width:60%">
                            <h3>{{a.title}}</h3>
                            <h5>售价：{{a.price}}  元  数量： {{a.inventory}}</h5>
                        </div>
                    </div>
                </li>
            </ul>
            <hr>
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
                value1: '',
                value2:'',
                time:''
            };
        },
        created(){
            this.$store.commit('Orders/setAccount',this.isLogin);
            this.$store.dispatch('Orders/getOrders');
        },
        watch: {
            value(v) {
                this.value1= new Date(this.value[0]);
                this.value1=this.value1.getTime();
                this.value2= new Date(this.value[1]);
                this.value2=this.value2.getTime();
            }
        },
        computed:{
            searchOrder() {
                let value = this.value;
               if(value )
               {
                   let value1 = this.value1;
                   let value2 = this.value2;
                   return this.order.filter(function (number) {
                       let time =  new Date(number.time)
                       time = time.getTime()
                       console.log(time);
                       return time >= value1 && time <= value2
                   })
               }
               return this.order;
            },
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