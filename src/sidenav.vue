<template>
    <div v-if="this.$parent.role != null" class="side-nav d-none text-center border">
        <div class="fa fa-times close-side mt-2 ml-2 hover-pointer" @click="closeFunction()"></div>
        <div class="mt-2">
            <img src="/src/img/img_avatar.png" alt="Avatar" class="avatar">
        </div>
        <div class="mt-2">
            {{name}}
        </div>
        <div class="logout mt-2 hover-pointer" @click="logoutFunction()">
            خروج
        </div>
        <div class="mt-2">
            <hr>
        </div>

        <div class="mt-2">
            <ul class="ul-wo-bullet list-group p-0">
                <div v-if="this.$parent.role=='student' || this.$parent.role=='teacher'">
                    <router-link :to="'/panel/' + this.$parent.role +'/edit-profile'" v-if="this.$parent.page=='edit'">
                        <li class="active urls list-group-item">
                            ویرایش پروفایل
                        </li>
                    </router-link>
                    <router-link :to="'/panel/' + this.$parent.role +'/edit-profile'" v-if="this.$parent.page!='edit'">
                        <li class=" urls list-group-item">
                            ویرایش پروفایل
                        </li>
                    </router-link>
                    <router-link :to="'/panel/' + this.$parent.role + '/add-case'" v-if="this.$parent.page == 'add'">
                        <li class=" active urls list-group-item">
                            افزودن مورد
                        </li>
                    </router-link>
                    <router-link :to="'/panel/' + this.$parent.role +'/add-case'" v-if="this.$parent.page != 'add'">
                        <li class=" urls list-group-item">
                            افزودن مورد
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page == 'cases'" :to="'/panel/' + this.$parent.role +'/my-cases'">
                        <li class=" active urls list-group-item">
                            موارد ثبت شده من
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page != 'cases'" :to="'/panel/' + this.$parent.role +'/my-cases'">
                        <li class=" urls list-group-item">
                            موارد ثبت شده من
                        </li>
                    </router-link>
                </div>
                <div v-if="this.$parent.role=='teacher' || this.$parent.role=='manager'">
                    <router-link v-if="this.$parent.page == 'my-cases'" :to="'/panel/' + this.$parent.role +'/cases-to-me'">
                        <li class=" active urls list-group-item">
                            موارد ارجاع شده به من
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page != 'my-cases'" :to="'/panel/' + this.$parent.role +'/cases-to-me'">
                        <li class=" urls list-group-item">
                            موارد ارجاع شده به من
                        </li>
                    </router-link>
                </div>
                <div v-if="this.$parent.role=='manager'">
                    <router-link v-if="this.$parent.page == 'all-cases'" :to="'/panel/' + this.$parent.role +'/all-cases'">
                        <li class=" active urls list-group-item">
                            موردها
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page != 'all-cases'" :to="'/panel/' + this.$parent.role +'/all-cases'">
                        <li class=" urls list-group-item">
                            موردها
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page == 'users'" :to="'/panel/' + this.$parent.role +'/users'">
                        <li class=" active urls list-group-item">
                            کاربران
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page != 'users'" :to="'/panel/' + this.$parent.role +'/users'">
                        <li class=" urls list-group-item">
                            کاربران
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page == 'reports'" :to="'/panel/' + this.$parent.role +'/reports'">
                        <li class=" active urls list-group-item">
                            گزارشات
                        </li>
                    </router-link>
                    <router-link v-if="this.$parent.page != 'reports'" :to="'/panel/' + this.$parent.role +'/reports'">
                        <li class=" urls list-group-item">
                            گزارشات
                        </li>
                    </router-link>
                </div>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'sidenav',

        data() {
            return {
                name: localStorage.getItem("name")
            }
        },
        methods: {
            logoutFunction(){
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut();
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                this.$router.push('/')
            },
            closeFunction(){
                $(".side-nav").addClass("d-none");
            }
        }
    }
</script>

<style>

</style>