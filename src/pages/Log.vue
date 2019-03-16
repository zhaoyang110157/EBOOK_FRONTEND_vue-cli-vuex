<template>
    <div  id="t"  class="text-center">
        <form class="form-signin" v-show="!up">
            <h1 class="h3 mb-6 font-weight-bold">please sign in</h1>
            <label for="inputEmail" class="sr-only">Account</label>
            <input type="text" id="inputEmail" class="form-control" placeholder="Account" v-model="SignIn.account" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="SignIn.password" required autofocus>

            <hr>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <hr>


            <button class="btn btn-group-lg btn-primary btn-block bg-primary" type="submit">Log in</button>
            <button class="btn btn-group-lg btn-primary btn-block bg-secondary" type="submit" @click="up=!up">Log up</button>
            <p class="mt-5 mb-3 text-muted"> © 上海交通大学 朱朝阳</p>
        </form>

        <form   v-show="up" class="form-signin">
            <h1 class="h3 mb-6 font-weight-bold">please sign up</h1>
            <label for="inputEmail" class="sr-only">Account</label>
            <input type="text"  class="form-control" v-model="SignUp.account" placeholder="Account" required autofocus >
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password"  class="form-control" v-model="SignUp.password" placeholder="Password" required autofocus>
            <label for="inputPassword" class="sr-only">confirm_password</label>
            <input type="password" class="form-control" v-model="SignUp.confirm_password" placeholder="Confirm Password" required autofocus>
            <label for="inputPassword" class="sr-only">E-mail</label>
            <input type="email"  class="form-control" v-model="SignUp.email" placeholder="E-mail" required autofocus >
            <button class="btn btn-group-lg btn-primary btn-block" type="submit" @click="url1">Log up</button>
            <button class="btn btn-group-lg btn-primary btn-block bg-secondary" type="submit" @click="up=!up">Back</button>
            <p class="mt-5 mb-3 text-muted"> © 上海交通大学 朱朝阳</p>
        </form>
    </div>


</template>

<script>
    export default {
        name: "Log",
        data(){
            return {
                up:false,
                SignUp: {
                    account: '',
                    password: '',
                    confirm_password: '',
                    email: '',
                },
                SignIn: {
                    account: '',
                    password: '',
                }
            }
        },
        methods:{
                url1(){
                    alert("SignIn.account");

                }
            }
    }
</script>

<style scoped>
    html,
    template {
        height: 100%;
    }

    template {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 100%;
        max-width: 450px;
        padding: 15px;
        margin: auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
        margin-bottom: 10px;
    }
</style>