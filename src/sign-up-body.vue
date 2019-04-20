<template>
    <div>
        <div class="row my-5">
            <div class="col-lg-3"></div>
            <div class="entrance-style col-lg-6 pb-3" id="register-state">
                <div class="" style="text-align: right;">
                    <form action="" style="">

                        <div class="form-group" id="namediv">
                            <label class="form-style" for="name"><b>نام و نام خانوادگی</b></label>
                            <div class="div-input-each">
                                <input type="text" class="form-control1" id="name" name="name" v-model="name">
                                <img src="./img/person1.png" class="person-icon">
                            </div>
                        </div>

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

                        <div class="form-group" id="passworddupdiv">
                            <label class="form-style" for="dupPsw"><b>تکرار رمز عبور</b></label>
                            <div class="div-input-each">
                                <input type="password" class="form-control1" id="dupPsw" name="passworddup" v-model="r_pass">
                                <img src="./img/password.png" class="person-icon">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-style">نقش خود را وارد کنید </label>
                            <select  class="form-control" v-model="role">
                                <option id="student" value="student">
                                    دانشجو
                                </option>
                                <option id="teacher" value="teacher">
                                    استاد
                                </option>
                                <option id="other" value="other">
                                    سایر
                                </option>
                            </select>
                        </div>

                        <br>
                        <button type="button" class="btn-register" id="register" @click="onSubmit" style="background-color: var(--mist); "
                                onclick="validationOfEmail(),validationOfPassword(),validationOfPasswordDup(),validationName()">
                            ثبت نام
                        </button>

                        <br>

                        <button type="button" class="btn-register" style="background-color: var(--stone);">
                            ثبت نام با حساب کاربری گوگل
                        </button>
                        <br>
                        <router-link :to="'/'">
                            <span class="text-blue">بازگشت به ورود</span><img src="./img/rewind.png" class="person-icon" onclick="">
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
        name: 'sign-up-body',

        data() {
            return {
                name: '',
                email: '',
                password: '',
                r_pass : '',
                role: ''
            }
        },
        methods:{
            onSubmit(){
                var vm = this;
                $.post("/api/sign-up.json", {
                    name: vm.name,
                    email: vm.email,
                    password: vm.password,
                    re_password: vm.r_pass,
                    role: vm.role
                }).done(function (data) {
                    if (data.status){
                        vm.$router.push('/sign-in');
                    }
                });
            },
        }
    }

</script>

<style>

</style>