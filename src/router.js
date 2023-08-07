import Vue from 'vue'
import Router from 'vue-router'

const Discovery = () => import('@/page/discovery')

export const layoutCenterNames = ['discovery','playlists','songs','mvs']

export const menuRoutes = [
    {
        path:'/discovery',
        name:'discovery',
        component:Discovery,
        meta:{
            title:'发现音乐',
            icon:'music',

        }
    }
]


Vue.use(Router)

export default new Router({
    mode:'hash',
    routers:[
        {
            path:'/',
            redirect:'/discovery',
        },
        ...menuRoutes,
    ]
})