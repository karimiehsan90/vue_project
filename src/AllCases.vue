<template>
    <div>
        <header-reg></header-reg>
        <s-nav></s-nav>
        <div class="row mt-5 w-100 container-fluid dir-rtl text-center mb-5">
            <student-links></student-links>
            <ac></ac>
        </div>
    </div>
</template>

<script>
    import header from './header.vue'
    import sidenav from './sidenav.vue'
    import student_links from './student-links.vue'
    import ac from './all-cases-body.vue'

    export default {
        name: 'sign-up',
        components: {
            'header-reg': header,
            's-nav': sidenav,
            'student-links': student_links,
            'ac': ac
        },
        data() {
            return {
                page: 'all-cases',
                role: localStorage.getItem("role")
            }
        }
    }
</script>