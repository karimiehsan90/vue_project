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
                <tr v-for="(c, i) in cases">
                    <td>
                        <router-link :to="{name:$parent.role+'Do' , params:{caseId, title: c.title, body: c.body, file: c.file}}">
                            <span @click="fun(c.id)">{{i+1}}</span>
                        </router-link>
                    </td>
                    <td>
                        {{c.title}}
                    </td>
                    <td>
                        {{c.status}}
                    </td>
                    <td>
                        {{c.from}}
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
    import $ from 'jquery'
    export default {
        name: 'edit-prof',
        data() {
            return {
                cases: [],
                caseId: -1
            }
        },
        methods: {
          fun :function(id){
              var vm = this;
              vm.caseId = id ;
              console.log(this.$parent.role)
          }
        },
        mounted: function(){
            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('/ticketing/rest/case/getCaseToMe', {
                token: tkn
            }, function (data) {
                vm.cases = data.data
            })
        }
    }
</script>