<template>
    <div class="container card-white col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode">
        <div class="spinner-border text-success position-absolute mt-10 z-100 d-none"></div>
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
                <tr v-for="(c, i) in cases">
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
        name: 'edit-prof',
        data() {
            return {
                cases: []
            }
        },
        created: function () {
            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('/api/admin-cases.json', {
                token: tkn
            }, function (data) {
                vm.cases = data.data
            })
        }
    }
</script>