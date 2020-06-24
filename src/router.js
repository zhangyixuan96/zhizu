const routers = [
    //登录
    {
        path: '/',
        name: 'login',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    //登录
    {
        path: '/login',
        name: 'login',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    //个人中心
    {
        path: '/personalCenter',
        name: 'personalCenter',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/personalCenter.vue'], resolve)
    },
    //设置
    {
        path: '/setting',
        name: 'setting',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/setting.vue'], resolve)
    },
    //设置账户
    {
        path: '/editUserMessage',
        name: 'editUserMessage',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/editUserMessage.vue'], resolve)
    },
    //修改密码
    {
        path: '/editPassword',
        name: 'editPassword',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/editPassword.vue'], resolve)
    },
    //待审批
    {
        path: '/waitApproval',
        name: 'waitApproval',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/waitApproval.vue'], resolve)
    },
    //已经审批
    {
        path: '/finishApproval',
        name: 'finishApproval',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/finishApproval.vue'], resolve)
    },
    //搜索
    {
        path: '/search',
        name: 'search',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/search.vue'], resolve)
    },
    //订单合同详情
    {
        path: '/orderContractDetails',
        name: 'orderContractDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/orderContractDetails.vue'], resolve)
    },
    //售后订单详情
    {
        path: '/afterSaleOrderDetails',
        name: 'afterSaleOrderDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/afterSaleOrderDetails.vue'], resolve)
    },
    //借用归还订单详情
    {
        path: '/borrowBackOrderDetails',
        name: 'borrowBackOrderDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/borrowBackOrderDetails.vue'], resolve)
    },
    //采购订单详情
    {
        path: '/purchaseOrderDetails',
        name: 'purchaseOrderDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/purchaseOrderDetails.vue'], resolve)
    },
    //采购退换货订单详情
    {
        path: '/purchaseExchangeOrderDetails',
        name: 'purchaseExchangeOrderDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/purchaseExchangeOrderDetails.vue'], resolve)
    },
    //生产订单详情
    // {
    //     path: '/productionOrderDetails',
    //     name: 'productionOrderDetails',
    //     meta: {
    //         title: ''
    //     },
    //     component: (resolve) => require(['./views/productionOrderDetails.vue'], resolve)
    // },
    //调拨订单详情
    {
        path: '/transferOrderDetails',
        name: 'transferOrderDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/transferOrderDetails.vue'], resolve)
    },
    //盘点订单详情
    {
        path: '/checkOrderDetails',
        name: 'checkOrderDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/checkOrderDetails.vue'], resolve)
    },
    //装配订单详情
    {
        path: '/assemblingOrderDetails',
        name: 'assemblingOrderDetails',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/assemblingOrderDetails.vue'], resolve)
    },
    // //归还订单详情
    // {
    //     path: '/sendBackOrderDetails',
    //     name: 'sendBackOrderDetails',
    //     meta: {
    //         title: ''
    //     },
    //     component: (resolve) => require(['./views/sendBackOrderDetails.vue'], resolve)
    // },
    
];
export default routers;