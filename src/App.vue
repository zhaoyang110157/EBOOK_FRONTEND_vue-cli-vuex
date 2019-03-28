<template>
    <div id="app" >
        <Header/>
        <router-view/>
        <cart></cart>
        <div id="but" class="bg-transparent">
            <a href="#">
                <el-button type="warning"  plain circle>
                    <span class="iconfont icon-up" ></span>
                </el-button>
            </a>
        </div>
    </div>
</template>

<script>
import Header from  './components/Header.vue'
export default {
    name:'app',
    components:{
        Header
    }
}
</script>

<style>

    body{
        background-image: url("assets/blank.jpg");
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-size: 25px;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
    }

    #app {
        height: 100%;
    }

    ::-webkit-scrollbar {/*滚动条整体样式*/
        width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 4px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    ::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }

    #but{
        position:fixed;
        bottom: 15px;
        right:15px;
    }
</style>
