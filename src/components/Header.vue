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
                    <router-link class="nav-link" v-if="this.$store.state.Person.isManager" to="/Users">
                        <button type="button" class="btn btn-default btn-lg">
                        <span class="iconfont icon-manage"></span>
                        Users
                    </button>
                    </router-link>
                    <router-link class="nav-link" v-else to="/Orders">
                        <button type="button" class="btn btn-default btn-lg">
                        <span class="iconfont icon-project-copy"></span>
                        Orders
                    </button>
                    </router-link>
                </li>
            </ul>
            <div>
                <div class="row mr-0" v-if="this.$store.state.Person.isLogin">
                    <el-dropdown class="mr-3" style="cursor: pointer" trigger="click">
                        <span class="el-dropdown-link">
                            <i class="iconfont icon-guanliyuan text-primary" v-if="this.$store.state.Person.isManager">管理员</i>
                            <i class="iconfont icon-wode text-primary" v-else>用户</i>
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <div >
                                    <span class="iconfont icon-tongji"></span>
                                    统计
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
                <router-link v-else to="/Log">
                    <button type="button" class="btn btn-default btn-lg">
                    <span class="iconfont icon-weidenglu"></span>
                    <span>登录/注册</span>
                </button>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            signout(){
                this.$store.commit('Person/changeManage',false);
                this.$store.commit('Person/changeLogin');
                location.reload();
            }
        }
    }
</script>

<style scoped>
</style>