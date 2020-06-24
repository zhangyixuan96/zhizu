
<style scoped lang="less">
    .searchPage{
        .search{
            width: 2.8rem;
            margin: 0 auto;
            margin-top:0.1rem;
        }
        .orderList{
            height: 100vh;
            background:rgba(248,248,248,1);
            .oneOrder{
                font-size:0.14rem;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                padding:0.15rem 0 0.14rem 0.15rem;
                border-top:0.01rem solid rgb(250, 250, 250);
                position: relative;
                background-color: white;
                .message{
                    color:rgba(102,102,102,1);
                    margin-top:0.08rem;
                    width: 3rem;
                    height: 0.5rem;
                    line-height: 0.25rem;
                    overflow: hidden;
                    // text-overflow: ellipsis;
                    // display: -webkit-box;
                    // -webkit-box-orient: vertical;
                    // -webkit-line-clamp: 2;
                }
                .arrow{
                    width: 0.15rem;
                    position: absolute;
                    right: 0.34rem;
                    bottom: 0.32rem;
                }
            }
        }
        .noSearch{
            height: 100vh;
            background:rgba(248,248,248,1);
            text-align: center;
            .no-icon{
                width:0.72rem;
                margin-top: 0.9rem;
            }
            .tigs{
                font-size:0.12rem;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                margin-top: 0.4rem;
            }
        }
    }
</style>
<template>
<!-- 搜索 -->
    <div class="searchPage" v-cloak>
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <img src="../images/def_ic_back.png">
            </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>搜索</h2>
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
        <!-- 搜索订单列表 -->
        <div class="orderList" v-if="hasResult">
            <div class="oneOrder" @click="goOrderDetail(item.auditStatus,item.orderId,item.type,item.id)" v-for="item in orderList">
                <div class="status">状态：{{item.auditStatus|auditStatus}}</div>
                <!-- {{item.orderSn}} {{item.nickname}}  -->
                <div class="message">产品信息：{{item.productName}}</div>
                <img src="../images/b2_ic_fanhui.png" alt="" class="arrow">
            </div>
            <!-- <div class="oneOrder">
                <div class="status">状态：已审核</div>
                <div class="message">产品信息：联想Z系列笔记本 白色16G</div>
                <img src="../images/b2_ic_fanhui.png" alt="" class="arrow">
            </div> -->
        </div>
        <!-- 搜索为空 -->
        <div class="noSearch" v-else>
            <img src="../images/c1_ic_biaoqbao.png" alt="" class="no-icon">
            <div class="tigs">不好意思，没有此类订单~</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // 有搜索结果
                hasResult:true,
                searchValue:'',
                // 审核状态
                auditStatus:1,
                orderList:[],
            }
        },
        mounted () {
            // this.searchValue="xxx";
            let searchValue = this.$route.query.searchValue;
            if(searchValue){
                this.searchValue = searchValue;
            }
            let auditStatus = this.$route.query.auditStatus;
            if(auditStatus){
                this.auditStatus = auditStatus;
            }
            this.getOrder();
        },
        filters:{
            // 状态
            auditStatus:function(value){
                switch(value){
                    case 1:
                        return "未审核";
                    break;
                    case 2:
                    case 3:
                        return "已审核";
                    break;
                }
            },
        },
        beforeDestroy () {

        },
        methods: {
            // 点击搜索
            onSearch(){
                this.getOrder();
            },
            // 获取订单
            getOrder(){
                const vm = this;
                let params = {
                    type: 0,
                    sessionId:vm.sessionId,
                    orderSn:vm.searchValue,
                    auditStatus:0,
                    pageNumber:1,
                    pageSize:100
                };
                vm.api(vm, "/api/app/order/getOrderList.json", params, "post", function(res) {
                    let data = res.resultList;
                    // console.log("data",data.length);
                    if(data&&data.length!=0){
                        vm.hasResult = true;
                    }else{
                        m.hasResult = false;
                    }
                    vm.orderList = data;
                    // console.log("data",data);
                });
            },
            // 跳转订单详情
            goOrderDetail(auditStatus,orderId,orderType,approvalId){
                let orderHasDeal = false;
                let name = '';
                if(auditStatus!=1){
                    orderHasDeal = true;
                }
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
                        name = 'orderContractDetails'
                    break;
                    case 10:
                        name = 'afterSaleOrderDetails'
                    break;
                }
                this.$router.push({
                        name: name,
                        query: {
                            orderId:orderId,
                            orderStatus:auditStatus,
                            orderHasDeal: orderHasDeal,
                            search:true,
                            approvalId:approvalId
                        }
                    });
            }
        }
    }
</script>
