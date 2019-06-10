<template>
    <div>
        <header-reg></header-reg>
        <s-nav></s-nav>
        <div class="row mt-5 w-100 container-fluid dir-rtl text-center mb-5">
            <student-links></student-links>
            <doing></doing>
        </div>
    </div>
</template>

<script>
    import header from './header.vue'
    import sidenav from './sidenav.vue'
    import student_links from './student-links.vue'
    import doingBody from './doing-body.vue'

    export default {
        name: 'sign-up',
        props:['caseId', 'title', 'body', 'file'],
        components: {
            'header-reg': header,
            's-nav': sidenav,
            'student-links': student_links,
            'doing': doingBody

        },
        data() {
            return {
                page: 'my-cases',
                role: localStorage.getItem("role"),
                id:-1,
            }
        },
        mounted() {
            if (this.caseId){
                this.id = parseInt(this.caseId);
            }

        }
    }

</script>