<template>
    <div>
        <header-reg></header-reg>
        <sidenav></sidenav>
        <div class="row mt-5 w-100 container-fluid dir-rtl text-center mb-5">
            <student-links></student-links>
            <add-case-main></add-case-main>
        </div>
    </div>
</template>

<script>
    import header from './header.vue'
    import acb from './add-case-main.vue'
    import sidenav from './sidenav.vue'
    import student_links from './student-links.vue'


    export default {
        name: 'add-case',
        components: {
            'header-reg': header,
            'sidenav': sidenav,
            'add-case-main': acb,
            'student-links': student_links
        },
        data() {
            return {
                page: 'add',
                role: localStorage.getItem("role")
            }
        }
    }
</script>