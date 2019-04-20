<template>
    <div class="col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode" id="register-state">
        <div class="spinner-border text-success position-absolute mt-10 z-100 d-none"></div>


        <div class="row">
            <div class="col-1"></div>
            <div class="m-3 col-md-5">

                <div class="row">

                    <div class="col-5 ">
                        <div class="">
                            <input type="text" class="input-name-user" placeholder="نام کاربری" style="">
                        </div>
                    </div>

                    <div class="col-2"></div>

                    <div class="col-6 " style="margin-top: 20px">
                        <input type="text" class="input-name-user" placeholder="موضوع موردنظر" style="">
                    </div>

                </div>


                <div class="row">
                    <div style=" margin-top: 20px " class="col-6">
                        <input type="text" name="bday" class="input-name-user input-name-date" style="" placeholder="از تاریخ"
                               onfocus="changeToDateTypeFrom()" id="from-date">
                    </div>

                    <div class="col-1"></div>

                    <div style=" margin-top: 20px" class="col-6">
                        <input type="text" name="bday" class="input-name-user input-name-date" style="" placeholder="تا تاریخ"
                               onfocus="changeToDateTypeTo()" id="to-date">
                    </div>
                </div>

            </div>

            <div class="col-md-5 m-3 bg-status" style=" ">
                <label id="opened-select" class="container checkmark-text" style="margin-top: 0px"><span class="">باز</span>
                    <input type="radio" name="radio">
                    <span class="checkmark" style=""></span>
                </label>
                <label id="closed-select" class="container checkmark-text"><span>بسته</span>
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>
                </label>
                <label id="inQueue-select" class="container checkmark-text"><span>در حال اقدام </span>
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>
                </label>
                <label id="satisfied-select" class="container checkmark-text" style=""><span>رضایت دانشجو</span>
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="col-1"></div>
            <div class="col-9 m-3" style="">
                <button id="send-btn" type="button" class="btn m-3 button-filter text-white" style="background-color: var(--stone);" @click="filter()">
                    اعمال فیلترینگ
                </button>
            </div>
            <div class="col-1"></div>
        </div>


        <div class="container mt-3 dir-rtl table-responsive">
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <td>
                        ردیف
                    </td>
                    <td>
                        موضوع
                    </td>
                    <td>
                        از تاریخ
                    </td>
                    <td>
                        تا تاریخ
                    </td>
                    <td>
                        نام مسئول
                    </td>
                    <td>
                        وضعیت
                    </td>
                </tr>
                </thead>

                <tbody>
                <tr v-for="r, i in reports">
                    <td>
                        {{i+1}}
                    </td>
                    <td>
                        {{r.title}}
                    </td>
                    <td>
                        {{r.from_date}}
                    </td>
                    <td>
                        {{r.to_date}}
                    </td>
                    <td>
                        {{r.to}}
                    </td>
                    <td>
                        {{r.status}}
                    </td>
                </tr>
                </tbody>

            </table>

            <br>
            <br>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'edit-prof',
        data() {
            return {
                reports: []
            }
        },
        created: function () {

            var vm = this;
            var tkn = localStorage.getItem("token");
            $.post('/api/admin-report.json', {
                token: tkn,
            }, function (data) {
                vm.reports = data.data;
            })

        },
        methods:{
            filter(){
                var vm = this;
                var tkn = localStorage.getItem("token");
                $.post('/api/admin-report.json', {
                    token: tkn,
                }, function (data) {
                    vm.reports = data.data;
                })
            }
        }
    }
</script>