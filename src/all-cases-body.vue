<template>
    <div class="col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode p-2 pt-3" id="register-state">
        <div class="spinner-border text-success position-absolute mt-10 z-100 d-none"></div>
        <div class="row mb-2">
            <div class="col-5">
                <div class="form-group">
                    <label for="user_from">فرستنده: </label>
                    <select id="user_from" class="form-control" v-model="from">
                        <option v-for="u in users" v-bind:value="u.id">
                            {{u.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-5">
                <div class="form-group">
                    <label for="user_to">گیرنده: </label>
                    <select id="user_to" class="form-control" v-model="to">
                        <option v-for="u in users" v-bind:value="u.id">
                            {{u.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-1 fa fa-filter mt-3 color-green" @click="filter">
            </div>
        </div>

        <div class="container mt-3 dir-rtl table-responsive">
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <td>
                        #
                    </td>
                    <td>
                        عنوان
                    </td>
                    <td>
                        وضعیت
                    </td>
                    <td>
                        گیرنده
                    </td>
                    <td>
                        فرستنده
                    </td>
                    <td>
                        تاریخ ایجاد
                    </td>
                    <td>
                        آخرین پاسخ
                    </td>
                    <td>
                        تعداد پاسخ
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="c, i in cases">
                    <td>
                        {{i + 1}}
                    </td>
                    <td>
                        {{c.title}}
                    </td>
                    <td>
                        {{c.status}}
                    </td>
                    <td>
                        {{c.to}}
                    </td>
                    <td>
                        {{ c.from }}
                    </td>
                    <td>
                        {{c.created_date}}
                    </td>
                    <td>
                        {{c.last_answer}}
                    </td>
                    <td>
                        {{c.answer_count}}
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
        <div class="row mb-3 mt-2 dir-ltr">
            <span class="fa fa-file-pdf ml-5 font-size-300 bg-hover-red cursor-pointer" @click="download"></span>
        </div>
    </div>
</template>

<script>
//    import jsPDF from 'jspdf'
    import $ from 'jquery'

    export default {
        name: 'sign-up',
        data() {
            return {
                cases: [],
                to: null,
                from: null,
                users: []
            }
        },
        mounted: function () {
            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('/ticketing/rest/case/all', {
                token: tkn
            }, function (data) {
                vm.cases = data.data
            });
            $.post('/ticketing/rest/user/manage', {
                token: tkn
            }, function (data) {
                vm.users = data.data.manages;
            })
        },
        methods: {
            filter() {
                var vm = this;
                var tkn = localStorage.getItem("token");
                var requestData = {
                    token: tkn
                };
                if (vm.from != null){
                    requestData.from = vm.from;
                }
                if (vm.to != null){
                    requestData.to = vm.to;
                }
                $.post('/ticketing/rest/case/all', requestData, function (data) {
                    if (data.success) {
                        vm.cases = data.data;
                    }
                    else {
                        show_alert(data.message, true);
                    }
                })
            },
            download() {
                window.print();
            }
        }
    }
</script>