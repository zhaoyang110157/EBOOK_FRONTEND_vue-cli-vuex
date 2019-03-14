<template>
    <div>
        <nav class="navbar navbar-light">
            <router-link to="/Home">
                <button type="button" class="btn btn-default btn-lg">

                E-BOOK 在线书店
                </button>
            </router-link>
            <ul class="nav nav-fill nav-pills" id="lis">
                <li class="nav-item">
                    <router-link class="nav-link" to="/Books">
                        <button type="button" class="btn btn-default btn-lg">
                            Books
                        </button>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Search">
                        <button type="button" class="btn btn-default btn-lg">
                            Search
                        </button>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Orders">
                        <button type="button" class="btn btn-default btn-lg">
                            Orders
                        </button>
                    </router-link>
                </li>
            </ul>
            <router-link to="/Log">
                <button type="button" class="btn btn-default btn-lg">
                <span class="glyphicon glyphicon-search" aria-hidden="false"></span>
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
    #lis{

    }
</style>