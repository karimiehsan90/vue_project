<template>
        <div class="container card-white col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode">
            <form class="myfrm" method="post" @submit.prevent="OnSubmit()">
                <div class="form-inline my-3">
                    <div IsLtr="true" class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">ایمیل<span class="text-danger">*</span></label>
                        <input type="email" class="form-control form-control-sm" name="email" v-model="email"/>
                    </div>
                    <div class="col-sm-6 float-right my-3 my-sm-2">
                        <label class="small mx-3 float-right">نام و نامخانوادگی<span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-sm" name="name" v-model="name"/>
                    </div>
                </div>
                <hr class="d-none d-sm-block">
                <div class="form-inline my-3">
                    <div class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">&nbsp; &nbsp; رمز عبور جدید<span class="text-danger">*</span></label>
                        <input type="password" class="form-control form-control-sm" name="password" v-model="password"/>
                    </div>
                    <div class="col-sm-6 float-right my-3 my-sm-2">
                        <label class="small mx-3 float-right">رمز عبور قبلی<span class="text-danger">*</span></label>
                        <input type="password" class="form-control form-control-sm" name="perv_pass" v-model="perv_pass"/>
                    </div>
                </div>

                <hr class="d-none d-sm-block">
                <div class="form-inline my-3">
                    <div Mask="Number" class="col-sm-6 float-left">
                        <label class="small mx-3 float-right">موبایل<span class="text-danger">*</span></label>
                        <input class="form-control form-control-sm" type="text" name="phone" v-model="phone" />
                    </div>

                </div>

                <br class="d-sm-inline d-none">
                <div class="form-inline my-3" dir="ltr" >

                    <div class=" mx-sm-auto mr-3 mr-sm-0" >
                        <input class="form-control form-control-sm" type="hidden" id="tokInp" name="_token" v-model="token">
                        <button class="btn btn-success text-white btn-sm" type="submit">ثبت تغییرات</button>
                    </div>
                </div>
            </form>
        </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'edit-prof',
        data() {
            return {
                token:localStorage.getItem("token"),
                email:'',
                password:'',
                perv_pass:'',
                phone:'',
                name:'',
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods:{
            OnSubmit: function () {
                var vm = this;
                $.post('/ticketing/rest/user/editPro', {
                    token: localStorage.getItem("token"),
                    email:vm.email,
                    password:vm.password,
                    perv_pass:vm.perv_pass,
                    phone:vm.phone,
                    name:vm.name
                }, function (data) {
                    if(data.success){
                        vm.email = '';
                        vm.password = '';
                        vm.perv_pass = '';
                        vm.phone = '';
                        vm.name = '';
                        alert(data.message);
                    }
                    else {
                        alert(data.message);
                    }
                })
            }
        },
        created:function () {

        }
    }
</script>