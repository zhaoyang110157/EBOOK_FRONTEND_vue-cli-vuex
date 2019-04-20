<template>
    <div>

       <ul>
           <hr>
           <li v-for="(user,index) in users" :key="index" style="display: flex; justify-content: space-around;align-items: center;margin-top: 15px; border-bottom: 1px solid gray;" v-if="user.role!='manager'">
               <p>{{user.account}}</p>
               <p v-if="user.allowed">已允许</p><p v-else>已禁用</p>
               <el-button v-if="!user.allowed " type="success" style="height: 50%" round plain @click="changeAllow(index)">
                   启用
               </el-button>
               <el-button v-else type="danger" style="height: 50%" round plain @click="changeAllow(index)">
                   禁用
               </el-button>
           </li>
       </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Users",
        methods:{
          changeAllow(index) {
              this.$store.dispatch('Person/changeAllow',index);
          }
        },
        computed: {
            ...mapState({
                users: state => state.Person.users,
            }),
        }
    }
</script>

<style scoped>

</style>