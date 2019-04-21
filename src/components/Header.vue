<template>
    <div>
        <nav class="navbar navbar-light">
            <router-link to="/Home">
                <button type="button" class="btn btn-default btn-lg">
                    <span class="iconfont icon-home"></span>
                E-BOOK 在线书店
                </button>
            </router-link>
            <ul class="nav nav-fill nav-pills" id="lis">
                <li class="nav-item">
                    <router-link class="nav-link" to="/Books">
                        <button type="button" class="btn btn-default btn-lg">
                            <span class="iconfont icon-xuexiao_kemu"></span>
                            Books
                        </button>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Search">
                        <button type="button" class="btn btn-default btn-lg">
                            <span class="iconfont icon-sousuo"></span>
                            Search
                        </button>
                    </router-link>
                </li>
                <li class="nav-item">
                    <div class="nav-link" v-if="this.$store.state.Person.isManager" >
                        <button type="button" class="btn btn-default btn-lg" @click="manage">
                            <span class="iconfont icon-manage"></span>
                            Users
                        </button>
                    </div>
                    <router-link class="nav-link" v-else to="/Cart">
                        <button type="button" class="btn btn-default btn-lg">
                        <span class="iconfont icon-cart"></span>
                        Carts
                    </button>
                    </router-link>
                </li>
            </ul>
            <div>

                <router-link v-if="isLogin === -1" to="/Log">
                    <button type="button" class="btn btn-default btn-lg">
                    <span class="iconfont icon-weidenglu"></span>
                    <span>登录/注册</span>
                </button>
                </router-link>
                <div class="row mr-0" v-else>
                    <el-dropdown class="mr-3" style="cursor: pointer" trigger="click">
                        <span class="el-dropdown-link">
                            <i class="iconfont icon-guanliyuan text-primary" v-if="this.$store.state.Person.isManager">管理员</i>
                            <i class="iconfont icon-wode text-primary" v-else>个人中心</i>
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <div >
                                    用户名：{{users[isLogin].account}}
                                </div>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <div >
                                    <span class="iconfont icon-project-copy"></span>
                                    <router-link to="/Orders">历史订单</router-link>
                                </div>
                            </el-dropdown-item>
                            <el-dropdown-item >
                                <div @click="signout">
                                    <span class="iconfont icon-tuichu text-danger"></span>退出登录
                                </div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Header",
        data(){
          return {
              personal:false
          }
        },
        methods:{
            signout(){
                this.$store.commit('Person/changeManager',false);
                this.$store.commit('Person/changeLogin',-1);
                this.$router.push('/Home');
                this.$forceUpdate();
            },
            manage(){
                this.$store.dispatch('Person/getUsers');
                this.$router.push('/Users');
            }
        },
        computed:{
            ...mapState({
                isLogin: state=>state.Person.isLogin,
                users: state=>state.Person.users
            })
        }
    }
</script>

<style scoped>
</style>