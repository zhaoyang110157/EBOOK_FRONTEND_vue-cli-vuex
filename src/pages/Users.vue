<template>
    <div>
       <ul>
           <li v-for="(user,index) in users" :key="index">
               <p>{{user.name}}</p>
               <p>{{user.allowed}}</p>
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