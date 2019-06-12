<template>
    <div>
        <nav class="navbar navbar-expand-sm sticky-top bg-navbar d-md-none" id="main-navbar-md">
            <div class="row w-100">
                <div class="col-4">
                    <a class="navbar-brand col-2" style="text-align: right" id="brand-md">
                        <img src="./img/logo-criticizing-2.png" class="rounded-circle" style="width: 40px;">
                        <span class="brand-navbar">
                    سامانه انتقادات و پیشنهادات شهیدبهشتی
                </span>
                    </a>
                </div>
                <div class="col-6"></div>
                <div class="col-2 fa fa-bars text-right ml-auto mt-1" @click="openSide"></div>
            </div>

        </nav>


        <nav class="navbar navbar-expand-sm sticky-top bg-navbar d-none d-md-block" id="main-navbar">
            <div class="row">
                <div class="col-4">
                    <a class="navbar-brand col-2" style="text-align: right" id="brand">
                        <img src="./img/logo-criticizing-2.png" class="rounded-circle" style="width: 40px;">
                        <span class="brand-navbar">
                    سامانه انتقادات و پیشنهادات شهیدبهشتی
                </span>
                    </a>
                </div>
                <div class="col-8">
                    <ul class="d-flex justify-content-end " style="height: 100%" v-if="showHeader">
                        <router-link :to="'/'">
                        <li class="p-2 nav-item-1 cursor-pointer" id="item1" @click="logout">خروج</li>
                        </router-link>
                    </ul>
                </div>
            </div>

        </nav>
    </div>
</template>

<script>
//    import router from './router'
    import $ from 'jquery'

    export default {
        name: 'header',

        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                showHeader: true
            }
        },
        methods: {
            logout(){
                localStorage.removeItem("token");
                localStorage.removeItem("role");
//                router.push('/')
            },
            openSide(){
                $(".side-nav").removeClass("d-none");
            }
        },
        mounted: function () {
            this.showHeader = (localStorage.getItem("token") != null)
        }
    }

</script>

<style>

</style>