<template>
    <div>
        <ul>
            <li v-for="(a,index) in articles" :key="index"  style="list-style-type: none">
                <div v-if="aim===index" style="display: flex;width: 100%;justify-content: space-around;">
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
        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups" style="margin-left: 40%">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="请输入购买量" aria-label="Input group example" aria-describedby="btnGroupAddon" v-model="num">
            </div>
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" @click="num-=1;" class="btn btn-outline-secondary">- 1</button>
                <button type="button"  @click="buy(num,articles[aim].inventory)" class="btn btn-outline-secondary">加入购物车</button>
                <button type="button" @click="num++;" class="btn btn-outline-secondary">+1</button>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Book",
        data(){
          return {
              num : 0
          }
        },
        methods:{
            buy(a, b) {
                if(a<1) {
                    alert("我们不接受赠书");
                    return;
                }

                if (a > b) alert("我们没有那么多");
                else {
                    alert("添加购物车成功");
                }
            }//图书购买简易
        } ,
        computed: {
            ...mapState({
                aim: state => state.Books.aim,
                articles: state => state.Books.articles
            })
        }
    }
</script>

<style scoped>
 img{
     width: 194px;height: 280px;
 }
</style>