<template>
    <div class="container-fluid mb-5 mt-5 border">
        <div class="container-fluid mt-4 mb-4">
            <el-row class="mb-3 mt-3">
                <el-col :span="2"><i class="iconfont icon-dingdan"></i></el-col>
            </el-row>
            <div v-for="(item, index) in order" :key="index" class="">
                <div class="row">
                    <div class="imgbox col-md-2">
                        <img v-bind:src="books[item.bid].image" class="img-thumbnail" alt="Responsive image">
                    </div>
                    <div class="col-md-4">
                        <div class="name mb-3 mt-3">
                            {{books[item.bid].title}}
                        </div>
                        <div class="author">
                            {{books[item.bid].writer}}
                        </div>
                    </div>
                    <div class="col-md-3 row">
                        <div class="col-md-6">
                            ×{{item.sales}}
                        </div>
                        <div class="col-md-6">
                            {{Math.round(item.price*100)/100}}元
                        </div>
                    </div>
                </div>
                <hr>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Order",
        props: {
            order: Array
        },
    }
</script>

<style scoped>
    .imgbox{
        font-size: 0;
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    .name{
        font-family: 黑体;
        font-size: 18px;
    }

    .author{
        font-family: 仿宋;
        font-size: 12px;
    }

    .total {
        font-family: 等线;
        font-size: 16px;
    }

    .money{
        font-weight: 500;
        font-size: 20px;
        font-family: tohoma,arial;
    }

</style>