<template>
    <div>
        <div  v-if="!modify" style="display: flex;width: 100%;justify-content: space-around;">
            <img v-bind:src="a.image">
            <div style="display: flex;flex-direction: column;justify-content: center;width:60%">
                <h3>{{a.title}}</h3>
                <h5>{{a.writer}}</h5>
                <h5>库存: {{a.inventory}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   售价：  {{a.price}}  元</h5>
                <h5>{{a.ISBN}}</h5>
                <h6>详情：{{a.introduction}}</h6>
            </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups" style="margin-left: 40%">
            <div v-show="!isManager" class="input-group">
                <input type="text" class="form-control" placeholder="请输入购买量" aria-label="Input group example" aria-describedby="btnGroupAddon" v-model="num">
            </div>
            <div v-show="!isManager" class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" @click="num-=1;" class="btn btn-outline-secondary">- 1</button>
                <button type="button"  @click="buy(num,a)" class="btn btn-outline-secondary">加入购物车</button>
                <button type="button" @click="num++;" class="btn btn-outline-secondary">+1</button>
            </div>
            <button v-show="isManager" type="button" @click="modify = !modify" class="btn btn-outline-secondary"> 数据修改</button>
        </div>
        <div v-if="modify" style="display: flex;width: 100%;justify-content: space-around; ">
            <img  style="float: left" v-bind:src="a.image">
            <form   class="form-check " style="display: flex;flex-direction: column;justify-content: center;width:60%">
                <div class="input-group">
                    <label class="col-sm-2 control-label" for="title">书名</label>
                    <div class="col-md-10">
                        <input type="text" id="title" class="form-control" placeholder="请输入标题" v-model="a.title" required autofocus >
                    </div>
                </div>
                <div class="input-group">
                    <label class="col-sm-2 control-label" for="writer">作者</label>
                    <div class="col-sm-10">
                        <input type="text" id="writer" class="form-control" placeholder="请输入作者" v-model="a.writer" required autofocus >
                    </div>
                </div>
                <div class="input-group">
                    <label class="col-sm-2 control-label" for="inventory">库存</label>
                    <div class="col-sm-10">
                        <input type="text" id="inventory" class="form-control" placeholder="请输入库存" v-model="a.inventory" required autofocus >
                    </div>
                </div>
                <div class="input-group">
                    <label class="col-sm-2 control-label" for="price">价格</label>
                    <div class="col-sm-10">
                        <input type="text" id="price" class="form-control" placeholder="请输入价格" v-model="a.price" required autofocus >
                    </div>
                </div>
                <div class="input-group">
                    <label class="col-sm-2 control-label" for="tranch">种类</label>
                    <div class="col-sm-10">
                        <label id ="tranch" style="margin-left: 30px"> 
                            <input  style="margin-left: 15px" type="radio" name="DoorCt" value="literature" v-model="a.tranch">literature
                            <input style="margin-left: 15px"  type="radio" name="DoorCt" value="magazine" v-model="a.tranch">magazine
                            <input  style="margin-left: 15px" type="radio" name="DoorCt" value="science"  v-model="a.tranch">science
                        </label>
                    </div>
                </div>

                <div class="input-group">
                    <label class="col-sm-2 control-label" for="isbn">ISBN</label>
                    <div class="col-sm-10">
                        <input type="text" id="isbn" class="form-control" placeholder="请输入ISBN" v-model="a.ISBN" required autofocus >
                    </div>
                </div>
                <label  class="sr-only">简介</label>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 5}"
                        placeholder="请输入简介"
                        v-model="a.introduction" required autofocus>
                </el-input>
                <button class="btn btn-group-lg btn-primary btn-block" @click="changeInf(a)"> 确认修改</button>
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
              modify: false,
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
            },
            changeInf(Book){
                var radioObj = document.querySelectorAll('.radio');
                for(var i = 0;i < radioObj.length;i++){
                    if(radioObj[i].checked == true){
                       Book.tranch = radioObj[i].value;
                       break;
                    }
                }
                this.a.tranch = Book.tranch;
                this.$store.dispatch('Books/changeInf',Book)
                this.modify = !this.modify;
            }
        } ,
        computed: {
            ...mapState({
                a: state => state.Books.aim,
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
 .form-signin {
     width: 100%;
     max-width: 450px;
     padding: 15px;
     margin: auto;
 }
 .form-signin .checkbox {
     font-weight: 400;
 }
 .form-signin .form-control {
     position: relative;
     box-sizing: border-box;
     height: auto;
     padding: 10px;
     font-size: 16px;
     margin-bottom: 10px;
 }
</style>