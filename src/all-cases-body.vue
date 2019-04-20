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
                        {{i+1}}
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
    </div>
</template>

<script>
    export default {
        name: 'sign-up',
        data() {
            return {
                cases: [],
                to: '',
                from: '',
                users: []
            }
        },
        created: function () {
            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('http://localhost/api/admin-cases.json', {
                token: tkn
            }, function (data) {
                vm.cases = data.data
            });
            $.post('http://localhost/api/admin-users.json', {
                token: tkn
            }, function (data) {
                vm.users = data.data.manages;
            })
        },
        methods: {
            filter() {
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('http://localhost/api/admin-cases.json', {
                    token: tkn,
                    from: vm.from,
                    to: vm.to
                }, function (data) {
                    vm.cases = data.data
                })
            }
        }
    }
</script>