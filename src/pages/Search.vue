<template>
    <div >
        <form class="navbar-form navbar-left">
            <div class="form-group">
                <span class="iconfont icon-sousuo label" aria-hidden="true" aria-label="search"></span>
                <input type="text" class="form-control" placeholder="Search">
                <button type="submit" class="btn btn-default">Submit</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    .label{
        margin:0px 10px 10px 10px;
    }
    .form-group{
        display: flex;
    }
</style>