<template>
    <div>
        <header-reg></header-reg>
        <s-body></s-body>
    </div>
</template>

<script>

    import header from './header.vue'
    import signUpBody from './sign-up-body.vue'


    export default {
        name: 'sign-up',
        components: {
            'header-reg': header,
            's-body': signUpBody

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
