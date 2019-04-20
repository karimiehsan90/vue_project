<template>

</template>

<script>
    export default {
        name: 'edit-prof',
        data() {
            return {
                cases: []
            }
        },
        created: function () {
            var role = localStorage.getItem("role");
            if (role == 'student'){
                this.$router.push('/panel/student/add-case')
            }
            else if (role == 'teacher'){
                this.$router.push('/panel/teacher/add-case')
            }
            else if (role == 'manager'){
                this.$router.push('/panel/manager/all-cases')
            }
        }
    }
</script>