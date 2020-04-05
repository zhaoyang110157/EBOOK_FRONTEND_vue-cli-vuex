<template>
    <div id="t">
        <div id="tt">

            <div>买一本书，放在胸前床头</div>
            <br>
            <div>捧一本书，读在晨间午后</div>
            <br>

                <router-link to="/Books">
                    <el-button type="warning" plain>
                        进入阅读
                    </el-button>
                </router-link>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        created(){
            this.$store.dispatch('Users/getNum')
        },
            ...mapState({
                visitor: state => state.Person.visitor
            })
    }
</script>

<style scoped>
   #t{
       box-sizing:content-box;
       width: 100%;
       height: 650px !important;
       min-height:630px;
       background: url("../assets/home2.jpeg") no-repeat center center scroll;
       background-size: auto 100%;
       position: relative;
   }
    #tt{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 650px !important;
        min-height:650px;
        background:rgba(255,255,255,0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #856404;
        font-style: oblique;
        font-size: 29px;
        font-weight: 900;
    }
</style>