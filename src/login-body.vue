<template>
    <div>
    <div class="row" style="margin-top: 100px">
        <div class="col-lg-3"></div>
        <div class="entrance-style col-lg-6" id="register-state">
            <div class="pb-4" style="text-align: right;">
                <form action="" style="">

                    <div class="form-group" id="emaildiv">
                        <label class="form-style" for="email"><b>پست الکترونیک</b></label>
                        <div class="div-input-each">
                            <input type="text" class="form-control1" id="email" name="email" v-model="email">
                            <img src="./img/folder.png" class="person-icon">
                        </div>
                    </div>

                    <div class="form-group" id="passworddiv">
                        <label class="form-style" for="psw"><b>رمز عبور</b></label>
                        <div class="div-input-each">
                            <input type="password" class="form-control1" id="psw" name="password" v-model="password">
                            <img src="./img/password.png" style="" class="person-icon">
                        </div>
                    </div>

                    <br>

                    <button type="button" class="btn-register" @click="onSubmit" style="background-color: var(--mist); ">
                        ورود</button>
                    <br>


                    <!--<button type="button" class="btn-register" style="background-color: var(&#45;&#45;stone);">
                        ورود با حساب کاربری گوگل</button>-->
                    <div id="google-login" class="g-signin2 btn-register" data-onsuccess="onSignIn(googleUser)" style="background-color: var(&#45;&#45;stone);"></div>
                    <br>
                    <br>
                    <router-link :to="'/sign-up'">
                    <span class="text-blue">عضویت</span><img src="./img/user-blue.png" class="person-icon" onclick="">
                    </router-link>
                </form>
            </div>
        </div>
        <div class="col-lg-3"></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'login-body',

        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            onSubmit(){
                var vm = this;
                $.post("/ticketing/rest/auth/login", {
                    email: vm.email,
                    password: vm.password,
                }).done(function (data) {//data is response

                    if (data.success){
                        localStorage.setItem("token", data.data.token);
                        localStorage.setItem("role", data.data.role);
                        localStorage.setItem("name", data.data.name);
                        vm.$router.push('/');//redirect
                    }
                    else {
                        alert(data.message);
                    }
                });
            },
            onSignIn(googleUser) {
                var vm = this;
                var idToken = googleUser.getAuthResponse().id_token;
                $.post('/ticketing/rest/auth/google', {
                    token: idToken
                }).done(function (data) {
                    if (data.success){
                        var auth2 = gapi.auth2.getAuthInstance();
                        auth2.signOut();
                        localStorage.setItem("token", data.data.token);
                        localStorage.setItem("role", data.data.role);
                        localStorage.setItem("name", data.data.name);
                        vm.$router.push('/');
                    }
                    else {
                        var auth2 = gapi.auth2.getAuthInstance();
                        auth2.signOut();
                    }
                }).fail(function () {
                    var auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut();
                });
            }
        },
        mounted() {
            gapi.signin2.render('google-login', {
                onsuccess: this.onSignIn
            })
        }
    }
</script>

<style>

</style>
