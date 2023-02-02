import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

export default [
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