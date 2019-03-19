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
                    <router-link class="nav-link" to="/Orders">
                        <button type="button" class="btn btn-default btn-lg">
                            <span class="iconfont icon-project-copy"></span>
                                    Orders
                        </button>
                    </router-link>
                </li>
                <li class="nav-item" v-if="this.$route">
                    <router-link class="nav-link" to="/Users">
                        <button type="button" class="btn btn-default btn-lg">
                            <span class="iconfont icon-manage"></span>
                            Users
                        </button>
                    </router-link>
                </li>
            </ul>
            <div>
                <router-link v-if="false" to="/Log">
                    <button type="button" class="btn btn-default btn-lg">
                        <span class="iconfont icon-weidenglu"></span>
                        <span>登录/注册</span>
                    </button>
                </router-link>
                <router-link v-else to="/Users">
                    <button type="button" class="btn btn-default btn-lg">
                        <span class="iconfont icon-wode"></span>
                        <span>用户中心</span>
                    </button>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
</style>