<template>
    <div>
       <ul>
           <li v-for="(user,index) in users" :key="index">
               <p>{{user.account}}</p>
               <p>{{user.allowed}}</p>
               <div class="switch" data-on="warning" data-off="danger">
                   <input type="checkbox" checked />
               </div>

           </li>
       </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Users",
        computed: {
            ...mapState({
                users: state => state.Person.users,
            }),
        }
    }
</script>

<style scoped>

</style>