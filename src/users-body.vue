<template>
    <div class="container card-white col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode">
        <div class="spinner-border text-success position-absolute mt-10 z-100 d-none"></div>
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
                        نام کاربری
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
                        {{a.username}}
                    </td>
                    <td>
                        {{a.post}}
                    </td>
                    <td>
                        <span class="fa fa-trash bg-hover-red hover-pointer" @click="deleteUser(a.id, i)"></span>
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
                        نام کاربری
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
                        {{a.username}}
                    </td>
                    <td>
                        <span class="fa fa-trash bg-hover-red hover-pointer" @click="declineTeacher(a.id, i)"></span>
                        <span class="fa fa-check bg-hover-green hover-pointer" @click="acceptTeacher(a.id)"></span>
                    </td>
                </tr>

                </tbody>
            </table>
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
                mode: 'manage'
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
                $.post('http://localhost/api/delete-user.json', {
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
                $.post('/api/accept-teacher.json', {
                    token: tkn,
                    id: id
                }, function (data) {
                    if (data.status){
                        vm.accepts.splice(i, 1);
                        vm.users.push(data.data);
                    }
                })
            }

        },
        created: function () {
            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('/api/admin-users.json', {
                token: tkn
            }, function (data) {
                vm.users = data.data.manages;
                vm.accepts = data.data.accepts;
            })
        }
    }
</script>