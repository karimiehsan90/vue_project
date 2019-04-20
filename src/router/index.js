import Vue from 'vue'
import SignInComp from '../SignInComp.vue'
import SignUpComp from '../SignUpComp.vue'
import ACS from '../AddCaseComp.vue'
import Router from 'vue-router'
import EditProf from '../StudentEditProfComp.vue'
import MyCases from '../MyCases.vue'
import CasesToMe from '../CasesToMeComp.vue'
import DoingComp from '../DoingComp.vue'
import AllCases from '../AllCases.vue'
import UsersComp from '../UsersComp.vue'
import ReportComp from '../ReportComp.vue'


Vue.use(Router);

const router = new Router({routes: [
    {
        path: '/',
        redirect: '/sign-in'
    },
    {
        path: '/sign-in',
        component: SignInComp
    },
    {
        path: '/sign-up',
        component: SignUpComp
    },
    {
        path: '/panel/student/add-case',
        component: ACS
    },
    {
        path: '/panel/teacher/add-case',
        component: ACS
    },
    {
        path: '/panel/student/edit-profile',
        component: EditProf
    },
    {
        path: '/panel/teacher/edit-profile',
        component: EditProf
    },
    {
        path: '/panel/student/my-cases',
        component: MyCases
    },
    {
        path: '/panel/teacher/my-cases',
        component: MyCases
    },
    {
        path: '/panel/teacher/cases-to-me',
        component: CasesToMe
    },
    {
        path: '/panel/manager/cases-to-me',
        component: CasesToMe
    },
    {
        path: '/panel/teacher/do/:id',
        component: DoingComp
    },
    {
        path: '/panel/manager/do/:id',
        component: DoingComp
    },
    {
        path: '/panel/manager/all-cases',
        component: AllCases
    },
    {
        path: '/panel/manager/users',
        component: UsersComp
    },
    {
        path: '/panel/manager/reports',
        component: ReportComp
    }
]});

export default router;