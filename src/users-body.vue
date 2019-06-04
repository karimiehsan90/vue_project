<template>
    <div class="container card-white col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode">
        <div class="spinner-border text-success position-absolute mt-10 z-100 d-none"></div>
        <div class="row mb-3 mt-2 dir-ltr">
            <span class="fa fa-user-plus ml-3 font-size-300 cursor-pointer bg-hover-green" data-target="#regModal" data-toggle="modal"></span>
            <span class="fa fa-file-pdf ml-2 font-size-300"></span>
        </div>
        <div class="row mb-2 mt-2">
            <div class="col">
                <button class="btn w-100 btn-bg-stone" id="manage" @click="showManages" v-if="mode=='manage'">مدیریت کاربران</button>
                <button class="btn w-100 btn-bg-shadow" id="manage" @click="showManages" v-if="mode!='manage'">مدیریت کاربران</button>
            </div>
            <div class="col">
                <button class="btn w-100 btn-bg-stone" id="accept" @click="showAccepts" v-if="mode=='accept'">تایید کاربران</button>
                <button class="btn w-100 btn-bg-shadow" id="accept" @click="showAccepts" v-if="mode!='accept'">تایید کاربران</button>
            </div>
        </div>


        <div class="container mt-3 dir-rtl table-responsive" id="manage_users" v-if="mode=='manage'">
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <td>
                        #
                    </td>
                    <td>
                        نام
                    </td>
                    <td>
ایمیل
                    </td>
                    <td>
                        سمت
                    </td>
                    <td>
                        مدیریت
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="a, i in users">
                    <td>
                        {{i+1}}
                    </td>
                    <td>
                        {{a.name}}
                    </td>
                    <td>
                        {{a.email}}
                    </td>
                    <td>
                        {{a.role}}
                    </td>
                    <td>
                        <span class="fa fa-trash bg-hover-red hover-pointer" @click="deleteUser(a.id, i)"></span>
                        <span class="fa fa-ban bg-hover-red color-green hover-pointer" v-if="a.is_active" @click="deactiveUser(a.id, i)"></span>
                        <span class="fa fa-ban bg-red bg-hover-green hover-pointer" v-if="!a.is_active" @click="activeUser(a.id, i)"></span>
                        <span class="fa fa-edit bg-red hover-pointer"></span>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>


        <div class="container mt-3 dir-rtl table-responsive" id="accept_users" v-if="mode=='accept'">
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <td>
                        #
                    </td>
                    <td>
                        نام
                    </td>
                    <td>
ایمیل
                    </td>
                    <td>
                        مدیریت
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="a, i in accepts">
                    <td>
                        {{i+1}}
                    </td>
                    <td>
                        {{a.name}}
                    </td>
                    <td>
                        {{a.email}}
                    </td>
                    <td>
                        <span class="fa fa-trash bg-hover-red hover-pointer" @click="declineTeacher(a.id, i)"></span>
                        <span class="fa fa-check bg-hover-green hover-pointer" @click="acceptTeacher(a.id, i)"></span>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
        <div class="modal fade" id="regModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h6 class="modal-title mx-auto">اضافه کردن کاربر</h6>
                        <button type="button" class="close float-left small position-absolute" style="left: 5px ; top: 10px;" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <form action="" method="post">

                            <div class="form-group">
                                <label class="float-right form-style" >نام و نام خانوادگی</label>
                                <div>
                                    <input type="text" class="form-control" v-model="name">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-style float-right" >پست الکترونیک</label>
                                <div>
                                    <input type="text" class="form-control" v-model="email">
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="form-style float-right" >رمز عبور</label>
                                <div>
                                    <input type="password" class="form-control" v-model="password">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-style float-right" >تکرار رمز عبور</label>
                                <div>
                                    <input type="password" class="form-control"  v-model="r_pass">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-style float-right">نقش را وارد کنید </label>
                                <select  class="form-control" v-model="role">
                                    <option id="student1" value="student">
                                        دانشجو
                                    </option>
                                    <option id="teacher1" value="teacher">
                                        استاد
                                    </option>
                                    <option id="other1" value="other">
                                        سایر
                                    </option>
                                </select>
                            </div>

                            <br>
                            <button type="button" class="btn btn-block btn-success" @click="onSubmit()">
                                ثبت نام
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'edit-prof',
        data() {
            return {
                users: [],
                accepts: [],
                mode: 'manage',
                name: '',
                email: '',
                password: '',
                r_pass : '',
                role: ''
            }
        },
        methods:{
            showManages(){
                this.mode = 'manage';

            },
            showAccepts(){
                this.mode = 'accept';

            },
            deleteUser(id, i){
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('/api/delete-user.json', {
                    token: tkn,
                    id: id
                }, function (data) {
                    if (data.status){
                        vm.users.splice(i, 1);
                    }
                })
            },
            declineTeacher(id, i){
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('/api/decline-teacher.json', {
                    token: tkn,
                    id: id
                }, function (data) {
                    if (data.status){
                        vm.accepts.splice(i, 1);
                    }
                })
            },
            acceptTeacher(id, i){
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('/ticketing/rest/auth/setAccept', {
                    token: tkn,
                    id: id
                }, function (data) {
                    if (data.success){
                        var t = vm.accepts[i];
                        vm.accepts.splice(i, 1);
                        vm.users.push({
                            role: "استاد",
                            email: t.email,
                            name: t.name,
                            id: t.id
                        });
                    }
                })
            },
            deactiveUser(id, i){
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('/ticketing/rest/auth/setdeactive', {
                    token: tkn,
                    id: id
                }, function (data) {
                    if (data.success){
                        var t = vm.users[i];
                        t.is_active = false;
                    }
                })
            },
            activeUser(id, i){
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('/ticketing/rest/auth/setActive', {
                    token: tkn,
                    id: id
                }, function (data) {
                    if (data.success){
                        var t = vm.users[i];
                        t.is_active = true;
                    }
                })
            },
            onSubmit() {
                var vm = this;
                $.post("/ticketing/rest/auth/registerByManager", {
                    name: vm.name,
                    email: vm.email,
                    password: vm.password,
                    re_password: vm.r_pass,
                    role: vm.role
                }).done(function (data) {
                    if (data.success) {
                        $('#regModal').modal('hide');
                    } else {
                        alert(data.message);
                    }
                });
            }

        },
        created: function () {
            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('/ticketing/rest/user/manage', {
                token: tkn
            }, function (data) {
                if (data.success) {
                    vm.users = data.data.manages;
                    vm.accepts = data.data.accepts;
                }
                else {
                    alert(data.message);
                }
            })
        }
    }
</script>