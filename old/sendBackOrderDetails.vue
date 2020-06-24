
<style scoped lang="less">
    .orderDetails{
        .status{
            position: fixed;
            bottom: 0;
            background-color: white;
            border-top:0.01rem solid rgb(228, 224, 224);
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size:0.14rem;
            font-family:PingFang-SC-Medium,PingFang-SC;
            font-weight:500;
            color:rgba(44,134,248,1);
            text-align: center;
            border-bottom: 0.01rem solid rgb(248, 248, 248);
        }
        .grey{
            width: 100%;
            background-color: rgb(248, 248, 248);
            height: 0.1rem;
        }
        .one_block{
            .oneTable{
                width: 100%;
                font-size:0.14rem;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(102,102,102,1);
                padding:0.1rem 0 0.16rem 0.15rem;
                td{
                    height: 0.4rem;
                }
                tr{
                    td:nth-child(2){
                        color:rgba(51,51,51,1);
                    }
                }
            }
            .scroll{
                overflow: scroll;
                width: 3.6rem;
                padding-left: 0.15rem;
                padding-right: 0.15rem;
                padding-bottom: 0.1rem;
                .srcollTable{
                    border-collapse: collapse;
                    font-size:0.13rem;
                    font-family:PingFang-SC-Medium,PingFang-SC;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                    white-space:nowrap;
                    tr,td,th{
                        border: 0.01rem solid rgba(238,238,238,1);
                    }
                    td,th{
                        padding:0.14rem 0.22rem;
                        text-align: center;
                        // display: inline-block;
                    }
                    th{
                        font-weight: normal;
                    }
                    tr{
                        td:not(:nth-child(1)){
                            color:rgba(51,51,51,1);
                        }
                    }
                }
            }
            .secondTable{
                border-collapse: collapse;
                font-size:0.13rem;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(102,102,102,1);
                margin-left: 0.15rem;
                margin-bottom:0.2rem;
                    tr,td{
                        border: 0.01rem solid rgba(238,238,238,1);
                    }
                    td{
                        padding:0.14rem 0.22rem;
                        text-align: center;
                        // display: inline-block;
                    }
                    tr{
                        td:nth-child(2){
                            color:rgba(51,51,51,1);
                        }
                    }
            }
            .orderBottom{
                 width: 100%;
                position: fixed;
                bottom: 0;
                background-color: white;
                border-top:0.01rem solid rgb(228, 224, 224);
                        .bottomItem{
                            display: inline-block;
                           width: 49.5%;
                            height: 0.5rem;
                            line-height: 0.5rem;
                            font-size:0.13rem;
                            font-family:PingFang-SC-Bold,PingFang-SC;
                            font-weight:bold;
                            color:rgba(44,134,248,1);
                            text-align: center;
                            vertical-align: middle;
                            border-right: 0.01rem solid rgb(228, 224, 224);
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
</style>
<template>
    <div class="orderDetails">
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <img src="../images/def_ic_back.png">
            </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>订单详情</h2>
        </header>  
        <div class="h88"></div>
        <!-- 第一部分 -->
         <div class="one_block">
             <!-- 第一个表格 -->
             <table class="oneTable">
                    <tr>
                        <td>销售渠道</td>
                        <td>淘宝</td>
                    </tr>
                    <tr>
                        <td>平台订单号</td>
                        <td>15451431435</td>
                    </tr>
                    <tr>
                        <td>智租订单号</td>
                        <td>ZZ158463103</td>
                    </tr>
                    <tr>
                        <td>订单类型</td>
                        <td>租赁</td>
                    </tr>
             </table>
             <!-- 滚动表格 -->
             <div class="scroll">
                <table class="srcollTable">
                        <tr>
                            <th>产品名称</th>
                            <th>资产编码</th>
                            <th>产品编码</th>
                            <th>规格</th>
                            <th>折扣(%)</th>
                            <th>价格(元)</th>
                            <th>数量</th>
                            <th>备注</th>
                            <th>小计(元)</th>
                        </tr>
                        <tr>
                            <td>平台订单号</td>
                            <td>15451431435</td>
                            <td>15451431435</td>
                            <td>15451431435</td>
                            <td>15451431435</td>
                            <td>15451431435</td>
                            <td>15451431435</td>
                            <td>15451431435</td>
                            <td>15451431435</td>
                        </tr>
                        <tr>
                            <td>智租订单号</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                        </tr>
                        <tr>
                            <td>订单类型</td>
                            <td>租赁</td>
                            <td>租赁</td>
                            <td>租赁</td>
                            <td>租赁</td>
                            <td>租赁</td>
                            <td>租赁</td>
                            <td>租赁</td>
                            <td>租赁</td>
                        </tr>
                </table>
             </div>
                <div class="grey"></div>
         </div>
        <!-- 第二部分 -->
         <div class="one_block">
             <!-- 第一个表格 -->
             <table class="oneTable">
                    <tr>
                        <td>产品合计(元)</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>产品优惠(元)</td>
                        <td>45</td>
                    </tr>
                    <tr>
                        <td>产品其他费用(元)</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>订单备注</td>
                        <td>这就是备注吧</td>
                    </tr>
                    <tr>
                        <td>订单金额</td>
                        <td>192</td>
                    </tr>
                    <tr>
                        <td>平台扣点(%)</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>关联采购订单</td>
                        <td>CG3941340039</td>
                    </tr>
                    <tr>
                        <td>订单日期</td>
                        <td>2019/10/23</td>
                    </tr>
                    <tr>
                        <td>回款计划</td>
                        <td></td>
                    </tr>
                   
             </table>
             <!--表格 -->
                <table class="secondTable">
                        <tr>
                            <td>回款编号</td>
                            <td>L0154</td>
                        </tr>
                        <tr>
                            <td>计划收取金额</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>回款状态</td>
                            <td>未收款</td>
                        </tr>
                        <tr>
                            <td>回款类型</td>
                            <td>常规</td>
                        </tr>
                        <tr>
                            <td>预计回款时间</td>
                            <td>2019/10/23</td>
                        </tr>
                        <tr>
                            <td>备注</td>
                            <td>无</td>
                        </tr>
                </table>
                <div class="grey"></div>
         </div>
         <!-- 审核过的订单 -->
         <div class="status" v-if="orderHasDeal">
            <span v-if="orderStatus==2">审核已通过</span>
            <span v-else style="color:red">审核未通过</span>
         </div>
         <!-- 第二部分 -->
         <div class="one_block">
             <!-- 第一个表格 -->
             <table class="oneTable">
                    <tr>
                        <td>签订人</td>
                        <td>紫霄鲸</td>
                    </tr>
                    <tr>
                        <td>收款方式</td>
                        <td>现金</td>
                    </tr>
                    <tr>
                        <td>客户</td>
                        <td>紫霄鲸</td>
                    </tr>
                    <tr>
                        <td>公司</td>
                        <td>紫霄鲸有限公司</td>
                    </tr>
                    <tr>
                        <td>收货人姓名</td>
                        <td>华花花</td>
                    </tr>
                    <tr>
                        <td>联系电话</td>
                        <td>13739469360</td>
                    </tr>
                    <tr>
                        <td>收货地址</td>
                        <td>广东省广州市天河区乐天大厦</td>
                    </tr>
                    <tr>
                        <td>物流公司</td>
                        <td>顺丰</td>
                    </tr>
                    <tr>
                        <td>物流单号</td>
                        <td>6241103569931584</td>
                    </tr>
                    <tr>
                        <td>其他款项类型</td>
                        <td>6241103569931584</td>
                    </tr>
                    <tr>
                        <td>其他款项金额</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>负责商务</td>
                        <td>紫霄鲸</td>
                    </tr>
             </table>
                <div class="grey"></div>
                <div class="orderBottom" v-if="!orderHasDeal">
                            <div class="bottomItem left" @click="passApproval($event)">
                                <img src="../images/c1_ic_tongguo.png" alt="">
                                <span>通过</span>
                            </div>
                            <div class="bottomItem right" @click="rejectApproval($event)">
                                <img src="../images/c1_ic_jujue.png" alt="">
                                <span>拒绝</span>
                            </div>
                        </div>
         </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // 订单状态：是否已经处理
                orderHasDeal:false,
                // 订单详情
                orderDetail:{},
                // 订单ID
                orderId:'',
                // 订单审核状态
                orderStatus:1,
            }
        },
        mounted () {
            let orderHasDeal = this.$route.query.orderHasDeal;
            let orderId = this.$route.query.orderId;
            if(orderHasDeal!="false"){
                this.orderHasDeal = orderHasDeal;
            }
            if(orderId){
                this.orderId = orderId;
                this.getOrderDetail();
            }
             let orderStatus = this.$route.query.orderStatus;
            if(orderStatus){
                this.orderStatus = orderStatus;
            }
        },
        filters:{
            // 状态
            status:function(value){
                switch(value){
                    case 1:
                        return "待审批";
                    break;
                    case 2:
                        return "盘点中";
                    break;
                    case 3:
                        return "已盘点";
                    break;
                    case 4:
                        return "已驳回";
                    break;
                }
            },
            // 处理资产编码数组
            dealcodeList(value){
                let arr = [];
                value.map(item=>{
                    arr.push(item.code );
                })
                return arr.toString();
            }
        },
        beforeDestroy () {

        },
        methods: {
            // 获取订单
            getOrderDetail(){
                const vm = this;
                let params = {
                    sessionId:vm.sessionId,
                    id:vm.orderId
                };
                vm.api(vm, "/api/app/order/getPurchaseOrderInfo.json", params, "post", function(res) {
                    console.log("res",res);
                    vm.orderDetail = res
                });
            },
            // 通过审核
            passApproval(e){
                e.stopPropagation();
                const vm = this;
                let params = {
                    sessionId:vm.sessionId,
                    // type: orderType,
                    auditStatus: 1,
                    id:vm.orderId,
                };
                
                this.$dialog.confirm({
                    message: '是否通过该订单'
                    }).then(() => {
                    vm.api(vm, "/api/app/order/updateStatus.json", params, "post", function(res) {
                        // let data = res;
                        // vm.orderList = data.resultList;
                        console.log("res",res);
                    });
                    // on confirm
                    }).catch((e) => {
                        console.log("e",e);
                    // on cancel
                    });
            },
            // 拒绝审核
            rejectApproval(e){
                e.stopPropagation();
                const vm = this;
                let params = {
                    sessionId:vm.sessionId,
                    auditStatus: 2,
                    id:vm.orderId,
                };
                this.$dialog.confirm({
                    message: '是否拒绝通过该订单'
                    }).then(() => {
                     vm.api(vm, "/api/app/order/updateStatus.json", params, "post", function(res) {
                        // let data = res;
                        // vm.orderList = data.resultList;
                        console.log("res",res);
                    });
                    // on confirm
                    }).catch(() => {
                    // on cancel
                    });
            },
        }
    }
</script>
