import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";

export default [
    {
        path:"/center",
        redirect: '/center/myorder',
        component:Center,
        meta:{show:true},
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
        ]
    },
    {
        path:"/paysuccess",
        component:PaySuccess,
        meta:{show:true},
        beforeEnter:(to,from,next)=>{
            if(from.path=='/pay'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:"/pay",
        component:Pay,
        meta:{show:true},
        beforeEnter:(to,from,next)=>{
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:"/trade",
        component:Trade,
        meta:{show:true},
        beforeEnter:(to,from,next)=>{
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:"/shopcart",
        name:"shopcart",
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:"/detail/:skuid",
        component:Detail,
        meta:{show:true}
    },
    {
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/search/:keyword?",
        name:"search",
        component:Search,
        meta:{show:true}
    },
    {
        path:"/login",
        component:Login,
        meta:{show:false}

    },
    {
        path:"/register",
        component:Register,
        meta:{show:false}

    },
    {
        path:"*",
        redirect:"/home"
    },
]