<template>
    <div class="parallax-window" data-parallax="scroll" data-image-src="img/bg-img-05.jpg">

        <form id="main" v-cloak>
            <div class="bar">
                <!-- 这两个按钮用于转换页面布局形式，使得UL布局正确显示 -->
                <span>书籍展览</span>
                <button class="btn btn-default btn-lg" v-if="this.$store.state.Person.isManager">添加书籍 </button>
                <div>
                    <a class="list-icon" v-bind:class="{ 'active': layout == 'list'}" v-on:click="layout = 'list'"></a>
                    <a class="grid-icon" v-bind:class="{ 'active': layout == 'grid'}" v-on:click="layout = 'grid'"></a>
                </div>

            </div>

            <ul v-if="layout == 'grid'" class="grid">
                <!-- 这种布局只显示缩略图片不显示文字 -->
                <li v-for="a in this.$store.state.Books.articles">
                    <a v-bind:href="a.url" rel="external nofollow" target="_blank"><img v-bind:src="a.image.large" alt=""/></a>
                </li>
            </ul>

            <ul v-if="layout == 'list'" class="list">
                <!-- 这种布局显示小图片和文字 -->
                <li v-for="a in this.$store.state.Books.articles">
                    <a v-bind:href="a.url"rel="external nofollow" target="_blank"><img v-bind:src="a.image.small" alt="" /></a>
                    <p>{{a.title}}</p>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    import Book from "../components/Book"
    import {mapState} from 'vuex'
    export default {
        name: "Books",
        data() {
            return{
                // 布局形式可能的值为grid或者list
                layout: 'grid',
            }

        },
        components:{
            Book
        }
    }
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }

    *{
        margin:0;
        padding:0;
    }

    a, a:visited {
        outline:none;
        color:#389dc1;
    }

    a:hover{
        text-decoration:none;
    }

    section, footer, header, aside, nav{
        display: block;
    }

    /*-------------------------
     导航栏样式
    --------------------------*/

    .bar{
        display: flex;
        justify-content: space-between;
        box-shadow: 0 1px 1px #ccc;
        border-radius: 5px;
        width: 80%;
        padding: 10px;
        margin: 45px auto 25px;
        position:relative;
        text-align:right;
        line-height: 1;
    }

    .bar a{
        background: #ffe055 center center no-repeat;
        width:35px;
        height:35px;
        display:inline-block;
        text-decoration:none !important;
        margin-right:5px;
        border-radius:5px;
        cursor:pointer;
    }

    .bar a.active{
        background-color:orange;
    }

    .bar a.list-icon{
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzNkFCQ0ZBMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzNkFCQ0ZCMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM2QUJDRjgxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2QUJDRjkxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h1bLqAAAAWUlEQVR42mL8////BwYGBn4GCACxBRlIAIxAA/4jaXoPEkMyjJ+A/g9MDJQBRhYg8RFqMwg8RJIUINYLFDmBUi+ADQAF1n8ofk9yIAy6WPg4GgtDMRYAAgwAdLYwLAoIwPgAAAAASUVORK5CYII=);
    }

    .bar a.grid-icon{
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBEQkMyQzE0MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBEQkMyQzE1MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERCQzJDMTIxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERCQzJDMTMxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MjPshAAAAXklEQVR42mL4////h/8I8B6IGaCYKHFGEMnAwCDIAAHvgZgRyiZKnImBQsACxB+hNoDAQyQ5osQZIT4gH1DsBZABH6AB8x/JaQzEig++WPiII7Rxio/GwmCIBYAAAwAwVIzMp1R0aQAAAABJRU5ErkJggg==);
    }

    .bar input{
        background:#fff no-repeat 13px 13px;

        border: none;
        width: 100%;
        line-height: 19px;
        padding: 11px 0;

        border-radius: 2px;
        box-shadow: 0 2px 8px #c4c4c4 inset;
        text-align: left;
        font-size: 14px;
        font-family: inherit;
        color: #738289;
        font-weight: bold;
        outline: none;
        text-indent: 40px;
    }

    /*-------------------------
     列表布局
    --------------------------*/

    ul.list{
        list-style: none;
        width: 80%;
        margin: 0 auto;
        text-align: left;
    }

    ul.list li{
        border-bottom: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;
        cursor: pointer;
    }

    ul.list li img{
        width:25%;
        height:120px;
        float:left;
        border:none;
    }

    ul.list li p{
        font-weight: bold;
        color:#6e7a7f;
    }

    /*-------------------------
     网格布局
    --------------------------*/

    ul.grid{
        list-style: none;
        width: 80%;
        margin: 0 auto;
        text-align: left;
    }

    ul.grid li{
        padding: 1px;
        float:left;
        cursor: pointer;
        border: 10px solid #e8e8e8;
        box-sizing: border-box;
    }

    ul.grid li img{
        width:280px;
        height:280px;
        object-fit: cover;
        display:block;
        border:none;
        padding: 10px;
        box-sizing: border-box;
    }
</style>

