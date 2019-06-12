<template>
    <div class="col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode" id="register-state">
        <div class="spinner-border text-success position-absolute mt-10 z-100 d-none"></div>


        <div class="row">
            <div class="m-3 col-12">


                <div class="row">
                    <div class="col-6 ml-2 form-group">
                        <input type="text" class="input-name-user input-name-date" placeholder="از تاریخ"
                               onfocus="changeToDateTypeFrom()" id="from-date" v-model="fromDate">
                    </div>

                    <div class="col-5 ml-2 form-group">
                        <input type="text" class="input-name-user input-name-date" placeholder="تا تاریخ"
                               onfocus="changeToDateTypeTo()" id="to-date" v-model="toDate">
                    </div>
                </div>

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


        <div class="container mt-3 mb-3 dir-rtl">

            <canvas id="myChart"></canvas>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'edit-prof',
        data() {
            return {
                reports: [],
                fromDate:'',
                toDate:''
            }
        },
        created: function () {

        },
        methods:{
            filter(){
                $("#myChart").html('');
                var vm = this;
                var ctx = document.getElementById('myChart').getContext('2d');
                var show = [0, 0];
                $.post('/ticketing/rest/case/report', {
                    token: localStorage.getItem("token"),
                    from: vm.fromDate,
                    to: vm.toDate
                }).done(function (data) {
                    if (data.success) {
                        data.data.forEach(function (item, index, data) {
                            if (item.happy){
                                show[1]++;
                            }
                            else {
                                show[0]++;
                            }
                        });
                        var chart = new Chart(ctx, {
                            type: 'pie',
                            data: {
                                labels: ['ناراضی', 'راضی'],
                                datasets: [{
                                    label: 'نظرات کاربران',
                                    data: show,
                                    backgroundColor: [
                                        "#F7464A",
                                        "#38f719",
                                    ],
                                }]
                            },
                        })
                    }
                    else {
                        show_alert(data.message, true);
                    }
                });
                /* function (data) {
                    alert('here');

                });*/
            }
        }
    }
</script>