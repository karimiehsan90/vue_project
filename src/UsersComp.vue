<template>
    <div>
        <header-reg></header-reg>
        <s-nav></s-nav>
        <div class="row mt-5 w-100 container-fluid dir-rtl text-center mb-5">
            <student-links></student-links>
            <mcb></mcb>
        </div>
    </div>
</template>

<script>
    import header from './header.vue'
    import sidenav from './sidenav.vue'
    import student_links from './student-links.vue'
    import my_cases_body from './users-body.vue'

    export default {
        name: 'sign-up',
        components: {
            'header-reg': header,
            's-nav': sidenav,
            'student-links': student_links,
            'mcb': my_cases_body

        },
        data() {
            return {
                page: 'users',
                role: localStorage.getItem("role")
            }
        }
    }
</script>