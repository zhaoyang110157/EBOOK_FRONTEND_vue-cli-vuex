<template>
    <div>
        <ul class="list">
            <li v-for="user in this.$store.state.Person.users">

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Users"
    }
</script>

<style scoped>

</style>