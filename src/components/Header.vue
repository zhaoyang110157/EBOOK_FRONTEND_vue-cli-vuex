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
            </ul>
            <router-link to="/Log">
                <button type="button" class="btn btn-default btn-lg">
                    <span class="iconfont icon-gerenzhongxin-denglu"></span>
                    <span>登录/注册</span>
                </button>
            </router-link>
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