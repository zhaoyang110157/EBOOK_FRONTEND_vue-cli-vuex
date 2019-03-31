<template>
    <div>
        <div  style="display: flex;width: 100%;justify-content: space-around;">
            <img v-bind:src="a.image">
            <div style="display: flex;flex-direction: column;justify-content: center;width:60%">
                <h3>{{a.title}}</h3>
                <h5>{{a.writer}}</h5>
                <h5>库存: {{a.inventory}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   售价：  {{a.price}}  元</h5>
                <h5>{{a.ISBN}}</h5>
                <h6>详情：{{a.intro}}</h6>
            </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups" style="margin-left: 40%">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="请输入购买量" aria-label="Input group example" aria-describedby="btnGroupAddon" v-model="num">
            </div>
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" @click="num-=1;" class="btn btn-outline-secondary">- 1</button>
                <button type="button"  @click="buy(num,a)" class="btn btn-outline-secondary">加入购物车</button>
                <button type="button" @click="num++;" class="btn btn-outline-secondary">+1</button>
            </div>
            <button v-show="isManager" type="button" @click="modify = !modify" class="btn btn-outline-secondary"> 数据修改</button>
        </div>
        <div v-if="modify" style="float:left; margin-left: 100px; width: 85%; height: 200px;  position: relative; ">
            <form   class="form-signin" onsubmit="return upClick();">
                <label  class="sr-only">书名</label>
                <input type="text"  class="form-control" v-model="a.title" required autofocus >
                <label class="sr-only">作者</label>
                <input type="text"  class="form-control" v-model="a.writer" required autofocus>
                <label class="sr-only">库存</label>
                <input type="text" class="form-control" v-model="a.inventory" required autofocus>
                <label  class="sr-only">ISBN</label>
                <input type="text"  class="form-control" v-model="a.ISBN"required autofocus >
                <label  class="sr-only">简介</label>
                <input type="text"  class="form-control" v-model="a.intro"required autofocus >
            </form>
        </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Book",
        data(){
          return {
              num : 0,
              modify: false
          }
        },
        methods:{
            buy(a, b) {
                if(this.isLogin !== -1){
                    if(a<1) {
                        this.$message({
                            message:'我们不接受赠书',
                            type: 'info',
                            duration: 1000,
                            showClose: true
                        })
                        return;
                    }
                    if (a > b.inventory)
                        this.$message({
                            message:'我们没有那么多',
                            type: 'warning',
                            duration: 1000,
                            showClose: true
                        })
                    else {
                        let idExist=this.$store.state.Cart.carts.find((item)=>{
                            return item.title===b.title
                        })
                        if(!idExist){
                            let cart = {
                                title : b.title,
                                image : b.image,
                                inventory : a,
                                price : b.price
                            }
                            this.$store.commit('Cart/addCart',cart);
                            this.$message({
                                message:'添加购物车成功',
                                type: 'success',
                                duration: 1000,
                                showClose: true
                            })
                        }
                        else
                            this.$message({
                                message:'已在购物车中',
                                type: 'error',
                                duration: 1000,
                                showClose: true
                            })
                    }
                }
                else
                    this.$message({
                        message:'您尚未登陆',
                        type: 'error',
                        duration: 1000,
                        showClose: true
                    })
            }
        } ,
        computed: {
            ...mapState({
                a: state => state.Books.aim,
                wen: state => state.Books.wen,
                science: state => state.Books.science,
                magazine: state => state.Books.magazine,
                isLogin: state => state.Person.isLogin,
                isManager: state => state.Person.isManager
            })
        }
    }
</script>

<style scoped>
 img{
     width: 194px;height: 280px;
 }
</style>