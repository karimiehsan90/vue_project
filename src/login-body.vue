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
                <button class="btn btn-link float-left" data-toggle="modal" data-target="#forgetModal">! رمز عبورم را فراموش کردم </button>
            </div>
        </div>
        <div class="col-lg-3"></div>
    </div>
        <div id="forgetModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title mx-auto">بازیابی رمز عبور</h6>
                        <button type="button" class="close float-left small position-absolute" style="left: 5px ; top: 10px;" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group" v-if="showPhone">
                            <label class="float-right small">: موبایل خود را وارد کنید</label>
                            <input class="form-control-sm form-control" type="text" v-model="fphone">
                            <br>
                            <button class="btn btn-outline-info btn-sm btn-block" @click="sendSMS()">ادامه</button>
                        </div>
                        <div class="form-group" v-if="showCode">
                            <label class="float-right small"> : کد فرستاده شده را وارد کنید </label>
                            <button class="btn btn-sm btn-link small mx-auto d-inline" @click="showCode=false;showPhone=true;msg='';fcode='';">اصلاح شماره تلفن</button>
                            <input class="form-control-sm form-control" type="text" v-model="fcode">
                            <br>
                            <button class="btn btn-outline-info btn-sm btn-block" @click="sendCODE()">ادامه</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <p class="small mx-auto" v-bind:class="[msgCol ? 'text-success':'text-danger']">{{msg}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login-body',

        data() {
            return {
                email: '',
                password: '',
                fphone:'',
                fcode:'',
                showPhone:true,
                showCode:false,
                msg:'',
                msgCol:false
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
            },
            sendSMS(){
                var vm = this;
                $.post('/ticketing/rest/auth/forget', {
                    phone: vm.fphone
                }).done(function (data) {
                    if (data.success){
                        vm.showPhone=false;
                        vm.showCode=true;
                    }
                    vm.msgCol=data.success;
                    vm.msg=data.message;
                });
            },
            sendCODE(){
                var vm = this;
                $.post('/ticketing/rest/auth/forget/submit', {
                    phone: vm.fphone,
                    code: vm.fcode
                }).done(function (data) {
                    if (data.success){
                        vm.showPhone=false;
                        vm.showCode=false;
                        vm.fcode='';
                        vm.fphone='';
                        setTimeout(function(){$('#forgetModal').modal('hide'); }, 3000);
                    }
                    vm.msgCol=data.success;
                    vm.msg=data.message;
                });
            },
        },
        mounted() {
            var vm = this;
            gapi.signin2.render('google-login', {
                onsuccess: this.onSignIn
            });
            $('#forgetModal').on('show.bs.modal', function (event) {
                console.log(vm.showCode);
                console.log(vm.showPhone);
                if (!vm.showCode){
                    vm.msg='';
                    vm.fphone='';
                    vm.showPhone=true;
                }

            });


        }
    }
</script>

<style>

</style>
