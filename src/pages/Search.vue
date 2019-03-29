<template>
    <div >
        <div id="lhs">
            <div class="btype">文学创作</div>
            <div class="btype">政治哲学</div>
            <div class="btype">社会科学</div>
            <div class="btype">期刊杂志</div>
        </div>
        <form class="navbar-form navbar-left" id="rhs">
            <div class="form-group">
                <span class="iconfont icon-sousuo label" aria-hidden="true" aria-label="search"></span>
                <input type="text" class="form-control" placeholder="Search" v-model="search">
                <button type="submit" class="btn btn-default">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return{
                search:""
            }
        }
    }
</script>

<style scoped>

    .btype{
        display: flex;
        height: 40px;
        width: 200px;
        border: 2px solid gray;
        justify-content: center;
    }
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
</style>