
<style lang="less">
    .finishApproval{
        padding-bottom:0.6rem;
        .title{
            background-image: url('../images/background.jpg')
        }
        .search{
            width: 2.8rem;
            margin: 0 auto;
            margin-top:0.1rem;
        }
        .tap{
            margin-top: 0.1rem;
            .tapRedCircle{
                display: inline-block;
                width:0.1rem;
                height:0.1rem;
                background:rgba(251,82,68,1);
                border-radius: 50%;
                position: absolute;
                right: 0.12rem;
                top:0.07rem;
            }
            .orderList{
                // background-color: white;
                // margin-bottom: 70px;
                .oneOrder{
                    margin-top: 0.06rem;
                    padding:0.15rem 0 0 0.15rem;
                    background-color: white;
                    position: relative;
                    .orderTop{
                        padding-bottom: 0.1rem;
                        border-bottom: 0.01rem solid rgba(248,248,248,1);
                        .orderNumber{
                        font-size:0.14rem;
                        font-family:PingFang-SC-Medium,PingFang-SC;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                            .redPoint{
                                display: inline-block;
                                width:0.1rem;
                                height:0.1rem;
                                background:rgba(251,82,68,1);
                                border-radius: 50%;
                                margin-right: 0.05rem;
                            }
                        }
                        .submitPeople{
                            font-size:0.13rem;
                            font-family:PingFang-SC-Medium,PingFang-SC;
                            font-weight:500;
                            color:rgba(102,102,102,1);
                            margin-top: 0.08rem;
                        }
                    }
                    .arrow{
                        width: 0.2rem;
                        position: absolute;
                        right: 0.34rem;
                        bottom: 0.5rem;
                    }
                }
            }
        }
        .topTap{
            font-size:0.13rem;
            font-family:PingFang-SC-Bold,PingFang-SC;
            font-weight:bold;
            color:rgba(44,134,248,1);
            background-color: rgb(248, 248, 248);
            .oneTap{
                display: inline-block;
                width: 49%;
                height: 0.6rem;
                line-height: 0.7rem;
                text-align: center;
                background-position: bottom;
                background-size: 1.9rem 0.5rem;
                background-repeat: no-repeat;
            }
            .pass{
                
            }
            .hasBackground1{
                background-image: url('../images/background.jpg');
            }
            .hasBackground2{
                background-image: url('../images/background2.jpg');
            }
            .noPass{
                color:rgba(251,82,68,1);
                // background-color: rgb(248, 248, 248);
            }
        }
    }
    .bottom{
                position: fixed;
                bottom: 0;
                background-color: white;
                padding:0.1rem 0;
                width: 100%;
                border-top: 1px solid rgb(247, 238, 238);
                .bottomItem{
                    display: inline-block;
                    // width: 1.227rem;
                    width: 32%;
                    height: 0.3rem;
                    text-align: center;
                    line-height: 0.3rem;
                    font-size:0.14rem;
                    font-family:PingFang-SC-Medium,PingFang-SC;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    border-right: 1px solid rgb(247, 238, 238);
                }
                .blue{
                    color:rgba(44,134,248,1);
                }
            }
    .van-tabs__line{
        background-color: #2C86F8 !important;
    }
    .van-tab__pane-wrapper{
         background-color: rgba(248,248,248,1);
        //  height: 100vh !important;
    }

</style>
<template>
    <div class="finishApproval">
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <img src="../images/def_ic_close.png">
        </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>我的审批</h2>
        </header>  
        <div class="h88"></div>
        <!-- 搜索框 -->
        <van-search
            v-model="searchValue"
            placeholder="请输入订单号进行搜索"
            shape="round"
            @search="onSearch"
            right-icon="search"
            left-icon=""
            class="search"
            
        >
        </van-search>
        <!-- <van-tabs v-model="active">
                <van-tab>
                    <div slot="title" class="title">
                    <van-icon name="more-o" />选项
                    </div>
                </van-tab>
                <van-tab>
                    <div slot="title">
                    <van-icon name="more-o" />选项
                    </div>
                </van-tab>
        </van-tabs> -->
        <div class="topTap">
            <div class="pass oneTap" :class="{hasBackground1:isPass==2}" @click="changeTap('pass')">审核通过</div>
            <div class="noPass oneTap" :class="{hasBackground2:isPass==3}" @click="changeTap('noPass')">审核拒绝</div>
        </div>
        <!-- tap -->
        <van-tabs v-model="orderType" animated title-active-color="#2C86F8" class="tap" @click="changeOrderType">
            <van-tab v-for="(item,index) in orderTapList" :title="item.title">
                <!-- 自定义标题 -->
                <div slot="title">
                    <!-- <span class="tapRedCircle"></span> -->
                    {{item.title}}
                </div>
                <!-- 订单列表 -->
                <div class="orderList">
                    <div class="oneOrder" @click="goOrderDetail(item.type,item.orderId,item.auditStatus,item.id)" v-for="item in orderList">
                        <div class="orderTop">
                            <div class="orderNumber">订单号：{{item.orderSn}}</div>
                            <div class="submitPeople">提交人：{{item.nickname}}</div>
                            <div class="submitPeople">提交时间：{{item.createTime |date}}</div>
                        </div>
                        <img src="../images/b2_ic_fanhui.png" alt="" class="arrow">
                    </div>
                    <!-- <div class="oneOrder">
                        <div class="orderTop">
                            <div class="orderNumber">订单号：4305122036131018</div>
                            <div class="submitPeople">提交人：紫霄鲸</div>
                            <div class="submitPeople">提交时间：2019/10/18 12:45</div>
                        </div>
                        <img src="../images/b2_ic_fanhui.png" alt="" class="arrow">
                    </div> -->
                </div>
            </van-tab>
        </van-tabs>
        <!-- 底部固定栏 -->
            <div class="bottom">
                <div class="bottomItem" @click="goWaitApproval">待审批</div>
                <div class="bottomItem blue">已审批</div>
                <div class="bottomItem" @click="goPersonalCenter">个人中心</div>
            </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                orderType:0,
                isPass:2,
                // 搜索值
                searchValue:'',
                orderTapList:[
                    {
                        title:'全部'
                    },
                    {
                        title:'订单合同'
                    },
                    {
                        title:'借用'
                    },
                    {
                        title:'采购合同'
                    },
                    {
                        title:'采购退货'
                    },
                    {
                        title:'采购换货'
                    },
                    {
                        title:'调拨'
                    },
                    {
                        title:'盘点'
                    },
                    {
                        title:'装配'
                    },
                    {
                        title:'归还'
                    },
                    {
                        title:'售后'
                    },
                ],
                // 订单列表
                orderList:[]
            }
        },
        mounted () {
            // 返回订单tap
            let backOrderType = this.$route.query.backOrderType;
            if(backOrderType){
                this.orderType = backOrderType;
            }
            let orderStatus = this.$route.query.orderStatus;
            if(orderStatus){
                this.isPass = orderStatus;
            }
            this.getOrder();
        },
        beforeDestroy () {

        },
        filters:{
            // 转换时间戳为日期
            date:function(value){
                var time = new Date(value);
                var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
                var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
                var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
                var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
                var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
                var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
                if(m<10){
                    m = "0"+m;
                }
                return y + '/' + M + '/' + d + ' ' + h + ':' + m;
                // + ':' + s;
            },
        },
        methods: {
            // 获取订单
            getOrder(){
                const vm = this;
                let params = {
                    type: vm.orderType,
                    sessionId:vm.sessionId,
                    auditStatus:vm.isPass,
                    pageNumber:1,
                    pageSize:100
                };
                vm.api(vm, "/api/app/order/getOrderList.json", params, "post", function(res) {
                    let data = res;
                    vm.orderList = data.resultList;
                    // console.log("data",data);
                });
            },
            // 跳转订单详情
            goOrderDetail(orderType,orderId,orderStatus,approvalId){
                const vm = this;
                let name = '';
                let orderHasDeal = true;
                switch(orderType){
                    case 1:
                        name = 'orderContractDetails'
                    break;
                    case 2:
                    case 9:
                        name = 'borrowBackOrderDetails'
                    break;
                    case 3:
                        name = 'purchaseOrderDetails'
                    break;
                    case 4:
                    case 5:
                        name = 'purchaseExchangeOrderDetails'
                    break;
                    // case 5:
                    //     name = 'purchaseOrderDetails'
                    // break;
                    case 6:
                        name = 'transferOrderDetails'
                    break;
                    case 7:
                        name = 'checkOrderDetails'
                    break;
                    case 8:
                        name = 'assemblingOrderDetails'
                    break;
                    case 10:
                        name = 'afterSaleOrderDetails'
                    break;
                }
                this.$router.push({
                        name: name,
                        query: {
                            orderId:orderId,
                            orderStatus:orderStatus,
                            orderHasDeal: true,
                            orderType:vm.orderType,
                            approvalId:approvalId
                        }
                    });
            },
            // 切换订单类型
            changeOrderType(type){
                // console.log("type",type);
                this.orderType = type;
                this.getOrder();
            },
            // 搜索
            onSearch(value){
                // console.log("search");
                this.$router.push({
                        name: "search",
                        query: {
                            searchValue: value
                        }
                    });
            },
            // 切换头部TAP
            changeTap(status){
                if(status=='pass'){
                    this.isPass = 2;
                }else{
                    this.isPass = 3;
                }
                this.getOrder();
            },
            // 跳转个人中心
            goPersonalCenter(){
                this.$router.push({
                        name: "personalCenter",
                        query: {
                        // id: id
                        }
                    });
            },
            // 跳转待审批
            goWaitApproval(){
                this.$router.push({
                        name: "waitApproval",
                        query: {
                        // id: id
                        }
                    });
            },
            // // 跳转订单详情
            // goOrderDetail(){
            //     this.$router.push({
            //             name: "orderDetails",
            //             query: {
            //                 orderHasDeal: true
            //             }
            //         });
            // }
        }
    }
</script>
