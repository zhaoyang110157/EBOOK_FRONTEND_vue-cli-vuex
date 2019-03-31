<template>
    <div >
        <div id="lhs">
            <button type="button" class="btn btn-default" @click="searchClass('all')">所有书籍</button>
            <button type="button" class="btn btn-default" @click="searchClass('literature')">文学创作</button>
            <button type="button" class="btn btn-default" @click="searchClass('science')">社会科学</button>
            <button type="button" class="btn btn-default" @click="searchClass('magazine')">期刊杂志</button>
        </div>
        <form class="navbar-form navbar-left" id="rhs">
            <div class="form-group">
                <span class="iconfont icon-sousuo label" aria-hidden="true" aria-label="search"></span>
                <input type="text" class="form-control" placeholder="Search" v-model="search">
                <button type="submit" class="btn btn-default">Submit</button>
            </div>
            <ul class="list">
            <!-- 这种布局显示小图片和文字 -->
            <li v-for="(a,index) in searchData" :key="index">
                <div style="display: flex; justify-content: space-around" >
                    <img v-bind:src="a.image" alt="查看详情" style="width: 194px;height: 200px" />
                    <div style="margin-top: 20px; width: 400px">
                        <h3>{{a.title}}</h3>
                        <h5>售价：  {{a.price}}  元</h5>
                        <h5 @click="detail(a)">详情……</h5>
                    </div>
                </div>
            </li>
        </ul>
        </form>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Search",
        data(){
            return{
                search:"",
                type: "all",
            }
        },
        methods:{
            detail(index){
                this.$store.commit('Books/changeAim',index);
                this.$router.push('/Book');
            },
            searchClass(s){
                this.type = s;
            }
        },
        computed:{
            book() {
                let type = this.type
                if(type === 'all')
                    return this.books
                else
                    return this.books.filter(function (number) {
                        return number.group === type
                    })
            },
            searchData(){
                let searchInputValue = this.search;
                //如果存在，根据条件过滤
                if(searchInputValue){
                    return this.book.filter(function (daily) {
                        return Object.keys(daily).some(function (key) {
                            return String(daily[key]).toLowerCase().indexOf(searchInputValue)>-1;
                        })
                    })
                }
                //如果不存在，整体返回
                return this.book;
            },
            ...mapState({
                books: state => state.Books.books
            })
        }
    }
</script>

<style scoped>
    #lhs{
        display: flex;
        flex-direction: column;
        align-items: center;
        position:fixed;
        top: 220px;
        float: left;
        width: 300px;
    }
    #rhs{
        width: auto;
        margin-left: 300px;
        height:auto!important;
        min-height:530px;
    }
    .label{
        margin:0px 10px 10px 10px;
    }
    .form-group{
        display: flex;
    }
    ul.list{
        list-style: none;
        width: 80%;
        margin: 0 auto;
        text-align: left;
    }

    ul.list li{
        border-bottom: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;
        cursor: pointer;
    }

    ul.list li img{
        height:200px;
        float:left;
        border:none;
    }

    ul.list li p{
        font-weight: bold;
        color:#6e7a7f;
    }
</style>