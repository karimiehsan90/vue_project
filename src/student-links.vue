<template>
    <div class="col-sm-3 entrance-style-filters col-3 card-white ml-3 d-none d-md-block p-0">
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
</template>

<script>
    export default {
        name: 'student-links',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>