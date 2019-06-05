<template>
    <div class="col-sm-8 entrance-style-filters card-white col-8 mx-auto loading-mode" id="register-state">
        <div class="spinner-border text-success position-absolute mt-10 z-100 d-none"></div>


        <div class="row">
            <div class="m-3 col-12">


                <div class="row">
                    <div class="col-6 ml-2 form-group">
                        <input type="text" name="bday" class="input-name-user input-name-date" placeholder="از تاریخ"
                               onfocus="changeToDateTypeFrom()" id="from-date">
                    </div>

                    <div class="col-5 ml-2 form-group">
                        <input type="text" name="bday" class="input-name-user input-name-date" placeholder="تا تاریخ"
                               onfocus="changeToDateTypeTo()" id="to-date">
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
    export default {
        name: 'edit-prof',
        data() {
            return {
                reports: []
            }
        },
        created: function () {

        },
        methods:{
            filter(){
                var ctx = document.getElementById('myChart').getContext('2d');
                var chart = new Chart(ctx, {
                    // The type of chart we want to create
                    type: 'pie',

                    // The data for our dataset
                    data: {
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'نظرات کاربران',
                            data: [10, 10, 5, 2, 20],
                            backgroundColor: [
                                "#F7464A",
                                "#f78651",
                                "#f7ef68",
                                "#c8f772",
                                "#38f719",
                            ],
                        }]
                    },
                });
            }
        }
    }
</script>