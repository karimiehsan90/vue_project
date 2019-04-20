<template>
    <div>
        <header-login></header-login>
        <side-nav></side-nav>
        <login-body></login-body>
    </div>
</template>

<script>
    import login_body from './login-body.vue'
    import header from './header.vue'
    import sidenav from './sidenav.vue'

    export default {
        name: 'sign in',
        components: {
            'login-body': login_body,
            'header-login': header,
            'side-nav': sidenav
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>

</style>
