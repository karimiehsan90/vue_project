<template>

</template>

<script>
    import StudentLink from './student-links.vue'
    import AddCaseMain from './add-case-main.vue'
    export default {
        name: 'add-case-body',
        components: {
            'student-links': StudentLink,
            'add-case-main': AddCaseMain
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>