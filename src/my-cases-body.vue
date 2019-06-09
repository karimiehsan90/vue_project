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
                    <td>
                        رضایت
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
                    <td>
                        <div class="position-relative w-100 h-100 text-center">
                            <div v-if="c.status!=='CLOSE'" class="position-absolute" style="bottom:0;top:0;left:0;right:0;z-index:5;color:lightslategray;">
                                <span class="far fa-frown"></span>
                                <span class="far fa-grin-beam"></span>
                            </div>
                            <span class="far fa-frown bg-hover-red cursor-pointer" v-bind:class="{'unhappy' : unhappy[i] && isActive}"    @click="setHappy(false , c, i)"></span>
                            <span class="far fa-grin-beam bg-hover-green cursor-pointer" v-bind:class="{'happy' : happy[i] && isActive}"  @click="setHappy(true , c , i)"></span>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        el:'#mycases',
        name: 'mcb',
        data() {
            return {
                cases: [],
                happy: [],
                unhappy:[],
                isActive:true
            }
        },
        methods:{
            setHappy(h,cid,i){
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('/ticketing/rest/case/setRate', {
                    token: tkn,
                    id: cid.id,
                    happy: h
                }, function (data) {
                    vm.isActive=false;
                    vm.happy[i] =h;
                    vm.unhappy[i]=!h;
                    vm.isActive=true;
                })
            },
            fun(value){
                var vm = this;
                vm.happy.push(value.happy);
                if (value.happy==null){
                    vm.unhappy.push(value.happy);
                } else{
                    vm.unhappy.push(!value.happy);
                }

            }
        },
        created: function () {
            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('/ticketing/rest/case/getMyCase', {
                token: tkn
            }, function (data) {
                if (data.success) {
                    vm.cases = data.data;
                    vm.cases.forEach(vm.fun);
                }
            })
        },
    }
</script>