
<style lang="less">
    .waitApproval{
        padding-bottom:0.6rem;
        .search{
            width: 2.8rem;
            margin: 0 auto;
            margin-top:0.1rem;
        }
        .tap{
            margin-top: 0.1rem;
            // padding-bottom: 0.8rem;
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
               
                .oneOrder{
                    margin-top: 0.06rem;
                    padding:0.15rem 0 0 0.15rem;
                    background-color: white;
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
                    .orderBottom{
                        border-bottom: 0.01rem solid rgba(248,248,248,1);
                        .bottomItem{
                            display: inline-block;
                            width: 49%;
                            height: 0.39rem;
                            line-height: 0.39rem;
                            font-size:0.13rem;
                            font-family:PingFang-SC-Bold,PingFang-SC;
                            font-weight:bold;
                            color:rgba(44,134,248,1);
                            text-align: center;
                            vertical-align: middle;
                            border-right: 0.01rem solid rgba(248,248,248,1);
                            img{
                                width: 0.14rem;
                                vertical-align: middle;
                            }
                        }
                        .right{
                            color:rgba(251,82,68,1);
                        }
                    }
                }
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
    <div class="waitApproval">
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <img src="../images/def_ic_close.png">
        </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>订单审批</h2>
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
        <!-- tap -->
        <van-tabs v-model="orderType" animated title-active-color="#2C86F8" class="tap" @click="changeOrderType">
            <van-tab v-for="(item,index) in orderTapList" :title="item.title">
                <!-- 自定义标题 -->
                <div slot="title">
                    <span class="tapRedCircle" v-if="!item.isRead"></span>{{item.title}}
                </div>
                <!-- 订单列表 -->
                <div class="orderList">
                    <div class="oneOrder" @click="goOrderDetail(item.type,item.orderId,item.auditStatus,item.id)" v-for="item in orderList">
                        <div class="orderTop">
                            <div class="orderNumber"> <span class="redPoint" v-if="item.isRead==2"></span> 订单号：{{item.orderSn}}</div>
                            <div class="submitPeople">提交人：{{item.nickname}}</div>
                            <div class="submitPeople">提交时间：{{item.createTime |date}}</div>
                        </div>
                        <div class="orderBottom">
                            <div class="bottomItem left" @click="passApproval($event,item.id)">
                                <img src="../images/c1_ic_tongguo.png" alt="">
                                <span>通过</span>
                            </div>
                            <div class="bottomItem right"  @click="rejectApproval($event,item.id)">
                                <img src="../images/c1_ic_jujue.png" alt="">
                                <span>拒绝</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="oneOrder">
                        <div class="orderTop">
                            <div class="orderNumber">订单号：4305122036131018</div>
                            <div class="submitPeople">提交人：紫霄鲸</div>
                            <div class="submitPeople">提交时间：2019/10/18 12:45</div>
                        </div>
                        <div class="orderBottom">
                            <div class="bottomItem left">
                                <img src="../images/c1_ic_tongguo.png" alt="">
                                <span>通过</span>
                            </div>
                            <div class="bottomItem right">
                                <img src="../images/c1_ic_jujue.png" alt="">
                                <span>拒绝</span>
                            </div>
                        </div>
                    </div> -->
                </div>
            </van-tab>
        </van-tabs>
        <!-- 底部固定栏 -->
            <div class="bottom">
                <div class="bottomItem blue">待审批</div>
                <div class="bottomItem" @click="goFinishApproval">已审批</div>
                <div class="bottomItem" @click="goPersonalCenter">个人中心</div>
            </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                allNoReadCount:0,
                // 未审核状态
                auditStatus:1,
                // 当前点击订单类型tap
                orderType:0,
                // 搜索值
                searchValue:'',
                // tap列表
                orderTapList:[
                    {
                        title:'全部',
                        isRead:true,
                        type:0,
                    },
                    {
                        title:'订单合同',
                        isRead:true,
                        type:1,
                    },
                    {
                        title:'借用',
                        isRead:true,
                        type:2,
                    },
                    {
                        title:'采购合同',
                        isRead:true,
                        type:3,
                    },
                    {
                        title:'采购退货',
                        isRead:true,
                        type:4,
                    },
                    {
                        title:'采购换货',
                        isRead:true,
                        type:5,
                    },
                    {
                        title:'调拨',
                        isRead:true,
                        type:6,
                    },
                    {
                        title:'盘点',
                        isRead:true,
                        type:7,
                    },
                    {
                        title:'装配',
                        isRead:true,
                        type:8,
                    },
                    {
                        title:'归还',
                        isRead:true,
                        type:9,
                    },
                    {
                        title:'售后',
                        isRead:true,
                        type:10,
                    },
                ],
                // 订单列表
                orderList:[]
            }
        },
        mounted () {
            let orderTapList = JSON.parse(this.getCookie('orderTapList'));
            if(orderTapList){
                // console.log("getCookie",orderTapList);
                this.orderTapList = orderTapList;
            }
            let allNoReadCount = this.getCookie('allNoReadCount');
            if(allNoReadCount){
                console.log("getCookie allNoReadCount",allNoReadCount);
                this.allNoReadCount = allNoReadCount;
            }
            // 返回订单tap
            let backOrderType = this.$route.query.backOrderType;
            if(backOrderType){
                this.orderType = backOrderType;
            }
             this.getOrder();
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
                if(h<10){
                    h = "0"+h;
                }
                if(m<10){
                    m = "0"+m;
                }
                return y + '/' + M + '/' + d + ' ' + h + ':' + m;
                // + ':' + s;
            },
        },
        beforeDestroy () {
        },
        methods: {
            // 获取订单
            getOrder(){
                const vm = this;
                let params = {
                    type: vm.orderType,
                    sessionId:vm.sessionId,
                    // orderSn:vm.searchValue,
                    auditStatus:vm.auditStatus,
                    pageNumber:1,
                    pageSize:100
                };
                vm.api(vm, "/api/app/order/getOrderList.json", params, "post", function(res) {
                    let data = res.resultList;
                    let noReadCount = [0,0,0,0,0,0,0,0,0,0];
                    if(data){
                    //      data.map(item=>{
                    //     item.isRead = 2;
                    // })
                    data.map(item=>{
                    switch(item.type){
                        case 1:
                            // vm.orderTapList[1].isRead = true;
                            // if(item.isRead==2&&vm.orderTapList[1].isRead==true){
                            //     vm.orderTapList[1].isRead = false;
                            // }
                            if(item.isRead==2){
                                noReadCount[0] +=1;
                            }
                        break;
                        case 2:
                             if(item.isRead==2){
                                noReadCount[1] +=1;
                            }
                        break;
                        case 3:
                             if(item.isRead==2){
                                noReadCount[2] +=1;
                            }
                        break;
                        case 4:
                             if(item.isRead==2){
                                noReadCount[3] +=1;
                            }
                        break;
                        case 5:
                             if(item.isRead==2){
                                noReadCount[4] +=1;
                            }
                        break;
                        case 6:
                            if(item.isRead==2){
                                noReadCount[5] +=1;
                            }
                        break;
                        case 7:
                            if(item.isRead==2){
                                noReadCount[6] +=1;
                            }
                        break;
                        case 8:
                             if(item.isRead==2){
                                noReadCount[7] +=1;
                            }
                        break;
                        case 9:
                            if(item.isRead==2){
                                noReadCount[8] +=1;
                            }
                        case 10:
                            if(item.isRead==2){
                                noReadCount[9] +=1;
                            }
                        break;
                        
                    }
                    })
                    // console.log("noReadCount",noReadCount);
                    // let allReadCount = 0;
                    noReadCount.map((item,index)=>{
                        // console.log("index",index);
                        // console.log("item",item);
                        // 全部的
                        if(vm.orderType==0){
                            if(index==0){
                                vm.allNoReadCount = 0;
                            }
                            if(item>0){
                                vm.orderTapList[index+1].isRead = false;
                                vm.allNoReadCount++;
                            }else{
                                vm.orderTapList[index+1].isRead = true;
                            }
                            // console.log("allNoReadCount item",vm.allNoReadCount);
                        }else{
                            // 当前点击的
                            if(index+1==vm.orderType){
                                if(item>0){
                                    if(vm.orderTapList[index+1].isRead==true){
                                        vm.allNoReadCount--;
                                    }
                                    vm.orderTapList[index+1].isRead = false;
                                }else{
                                    vm.orderTapList[index+1].isRead = true;
                                }
                            }
                        }
                        
                    })
                    }
                    // console.log("allNoReadCount",vm.allNoReadCount);
                    
                    if(vm.allNoReadCount>0){
                            vm.orderTapList[0].isRead = false;
                    }else{
                            vm.orderTapList[0].isRead = true;
                    }
                    // console.log("vm.orderTapList",vm.orderTapList);
                    vm.addCookie("orderTapList",JSON.stringify(vm.orderTapList));
                    vm.addCookie("allNoReadCount",vm.allNoReadCount);
                    vm.orderList = data;
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
                            orderHasDeal: false,
                            orderType:vm.orderType,
                            approvalId:approvalId                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                        }
                    });
            },
            // 通过审核
            passApproval(e,orderId){
                e.stopPropagation();
                const vm = this;
                let params = {
                    sessionId:vm.sessionId,
                    // type: orderType,
                    auditStatus: 1,
                    id:orderId,
                    // approvalStepLogsId:orderId,
                };
                
                this.$dialog.confirm({
                    message: '是否通过该订单'
                    }).then(() => {
                    vm.api(vm, "/api/app/order/updateStatus.json", params, "post", function(res) {
                        // let data = res;
                        // vm.orderList = data.resultList;
                        vm.$toast('审核通过成功!');
                        vm.getOrder();
                        // console.log("res",res);
                    });
                    // on confirm
                    }).catch((e) => {
                        // console.log("e",e);
                    // on cancel
                    });
            },
            // 拒绝审核
            rejectApproval(e,orderId){
                e.stopPropagation();
                const vm = this;
                let params = {
                    sessionId:vm.sessionId,
                    auditStatus: 2,
                    id:orderId,
                    // approvalStepLogsId:orderId,
                };
                this.$dialog.confirm({
                    message: '是否拒绝通过该订单'
                    }).then(() => {
                     vm.api(vm, "/api/app/order/updateStatus.json", params, "post", function(res) {
                        // let data = res;
                        // vm.orderList = data.resultList;
                        vm.$toast('审核拒绝通过成功!');
                        vm.getOrder();
                        // console.log("res",res);
                    });
                    // on confirm
                    }).catch(() => {
                    // on cancel
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
                const vm = this;
                this.$router.push({
                        name: "search",
                        query: {
                            searchValue: value,
                            // auditStatus:vm.auditStatus
                        }
                    });
            },
            // 跳转已审批
            goFinishApproval(){
                this.$router.push({
                        name: "finishApproval",
                        query: {
                        // id: id
                        }
                    });
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
        }
    }
</script>
