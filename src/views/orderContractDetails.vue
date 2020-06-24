
<style scoped lang="less">
    .orderDetails{
        padding-bottom: 0.4rem;
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
<!-- 订单合同 -->
    <div class="orderDetails">
        <header class="topbar">
        <!-- 关闭 -->
        <!-- <span class="fl" onClick="javascript:history.go(-1)"> -->
        <span class="fl" @click="goBack">
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
                        <td>{{orderDetail.channelName}}</td>
                    </tr>
                   <tr>
                        <td>平台订单号</td>
                        <td>{{orderDetail.platformSn}}</td>
                    </tr>
                    <tr>
                        <td>智租订单号</td>
                        <td>{{orderDetail.orderSn}}</td>
                    </tr>
                    <tr>
                        <td>订单类型</td>
                        <td>{{orderDetail.type|orderType}}</td>
                    </tr>
                    <!-- <tr>
                        <td>业务类型</td>
                        <td>{{orderDetail.classifyName}}</td>
                    </tr> -->
                    <tr>
                        <!-- <td>客户</td> -->
                        <td>客户经理</td>
                        <td>{{orderDetail.accountManager}}</td>
                    </tr>
                    <tr>
                        <!-- <td>客户</td> -->
                        <td>发货类型</td>
                        <td>{{orderDetail.sendType|sendType}}</td>
                    </tr>
                    <tr>
                        <td>发货仓库</td>
                        <td>{{orderDetail.depositoryName}}</td>
                    </tr>
                    <tr>
                        <td>代垫运费</td>
                        <td>{{orderDetail.forwardingFreight}}</td>
                    </tr>
                    <!-- <tr>
                        <td>优惠金额</td>
                        <td>{{orderDetail.freePrice}}</td>
                    </tr> -->
                     <tr>
                        <td>产品数量</td>
                        <td>{{orderDetail.num}}</td>
                    </tr>
             </table>
             <!-- 滚动表格 -->
             <div class="scroll">
                <table class="srcollTable">
                        <tr>
                            <th>产品编号</th>
                             <th>产品名称</th>
                            <th>资产编码</th>
                            <!-- <th>产品编码</th> -->
                            <th>折扣(%)</th>
                            <th>价格(元)</th>
                            <th>数量</th>
                            <!-- <th>备注</th> -->
                            <!-- <th>小计(元)</th> -->
                             <th>产品品牌</th>
                             <th>产品属性</th>
                             <th>产品规格</th>
                             <!-- <th>状态</th> -->
                        </tr>
                        <tr v-for="item in orderDetail.orderProductDtoList">
                            <td>{{item.productNo }}</td>
                            <td>{{item.productName}}</td>
                            <td>{{item.codeList|dealcodeList}}</td>
                            <!-- <td>{{item.productId}}</td> -->
                            <td>{{item.discount}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.num}}</td>
                            <td>{{item.brand}}</td>
                            <td>{{item.attribute}}</td>
                            <td>{{item.spec}}</td>
                            <!-- <td>{{item.remark}}</td> -->
                            <!-- <td>{{item.subtotal}}</td> -->
                        </tr>
                        <!-- <tr>
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
                        </tr> -->
                </table>
             </div>
                <div class="grey"></div>
         </div>
        <!-- 第二部分 -->
         <div class="one_block">
             <!-- 第一个表格 -->
             <table class="oneTable">
                    <!-- <tr>
                        <td>产品id</td>
                        <td>{{orderDetail.productId}}</td>
                    </tr> -->
                   
                    <tr>
                        <td>产品合计(元)</td>
                        <td>{{orderDetail.productPrice}}</td>
                    </tr>
                    <tr>
                        <td>产品优惠(元)</td>
                        <td>{{orderDetail.freePrice}}</td>
                    </tr>
                    <tr>
                        <td>产品其他费用(元)</td>
                        <td>{{orderDetail.otherPrice}}</td>
                    </tr>
                    <tr>
                        <td>订单备注</td>
                        <td>{{orderDetail.remark}}</td>
                    </tr>
                    <tr>
                        <td>订单金额</td>
                        <td>{{orderDetail.orderPrice}}</td>
                    </tr>
                    
                    <tr>
                        <td>平台扣点(%)</td>
                        <td>{{orderDetail.platformRat}}</td>
                    </tr>
                    <tr>
                        <td>关联采购订单id</td>
                        <td>{{orderDetail.purchaseOrderId}}</td>
                    </tr>
                    <tr>
                        <td>订单日期</td>
                        <td>{{orderDetail.orderTime}}</td>
                    </tr>
                    <tr>
                        <td>其他费用</td>
                        <td>{{orderDetail.otherPrice}}</td>
                    </tr>
                    <!-- <tr>
                        <td>其他违约金</td>
                        <td>{{orderDetail.othersPrice}}</td>
                    </tr> -->
                    <tr>
                        <td>回款计划</td>
                        <td>{{orderDetail.backNum}}</td>
                    </tr>
                    <tr>
                        <td>回款总金额</td>
                        <td>{{orderDetail.planBackMoney}}</td>
                    </tr>
                   
             </table>
             <!--表格 -->
                <table class="secondTable" v-for="orderBack in orderDetail.orderBackMoneyDtoList">
                        <tr>
                            <td>回款编号</td>
                            <td>{{orderBack.id}}</td>
                        </tr>
                        <tr>
                            <td>计划收取金额</td>
                            <td>{{orderBack.price}}</td>
                        </tr>
                        <tr>
                            <td>回款状态</td>
                            <td>{{orderBack.status| orderBackStatus}}</td>
                        </tr>
                        <tr>
                            <td>回款类型</td>
                            <td>{{orderBack.type|orderBackType}}</td>
                        </tr>
                        <tr>
                            <!-- <td>预计回款时间</td> -->
                            <td>回款时间</td>
                            <td>{{orderBack.backTime|date}}</td>
                        </tr>
                        <tr>
                            <td>备注</td>
                            <td>{{orderBack.remark}}</td>
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
                        <!-- <td>签订人</td> -->
                        <td>商务</td>
                        <td>{{orderDetail.nickname}}</td>
                    </tr>
                    <!-- <tr>
                        <td>收款方式</td>
                        <td>{{orderDetail.channelName}}</td>
                    </tr> -->
                    <!-- <tr>
                        <td>市</td>
                        <td>{{orderDetail.city}}</td>
                    </tr> -->
                    <tr>
                        <td>客户</td>
                        <td>{{orderDetail.customerName}}</td>
                    </tr>
                    <tr>
                        <td>公司</td>
                        <td>{{orderDetail.company}}</td>
                    </tr>
                    <tr>
                        <td>收货人姓名</td>
                        <td>{{orderDetail.name}}</td>
                    </tr>
                    <tr>
                        <td>联系电话</td>
                        <td>{{orderDetail.phone}}</td>
                    </tr>
                    <!-- <tr>
                        <td>收货地址省</td>
                        <td>{{orderDetail.province}}</td>
                    </tr> -->
                    <tr>
                        <td>收货地址</td>
                        <!-- <td>详细地址</td> -->
                        <td>{{orderDetail.province}}{{orderDetail.city}}{{orderDetail.address}}</td>
                    </tr>
                    <tr>
                        <td>配送方式</td>
                        <td>{{orderDetail.deliveryType|deliveryType}}</td>
                    </tr>
                    <tr>
                        <td>物流单号</td>
                        <td>{{orderDetail.expressNo}}</td>
                    </tr>
                    <tr>
                        <td>物流公司</td>
                        <td>{{orderDetail.expressCompany}}</td>
                    </tr>
                    <tr>
                        <td>租赁结束时间</td>
                        <td>{{orderDetail.rentEndTime}}</td>
                    </tr>
                    <tr>
                        <td>租赁时长</td>
                        <td>{{orderDetail.rentMonth.toFixed(2)}}</td>
                    </tr>
                    <tr>
                        <td>违约金总额</td>
                        <td>{{orderDetail.totalPrice}}</td>
                    </tr>
                    <tr>
                        <td>附件信息</td>
                        <td>{{orderDetail.fileInfoList|fileMessage}}</td>
                    </tr>
                    <tr>
                        <td>创建人</td>
                        <td>{{orderDetail.nickname}}</td>
                    </tr>
                    <tr>
                        <td>创建时间</td>
                        <td>{{orderDetail.createTime}}</td>
                    </tr>
                    <!-- <tr>
                        <td>其他款项类型</td>
                        <td>{{orderDetail.channelName}}</td>
                    </tr>
                    <tr>
                        <td>其他款项金额</td>
                        <td>{{orderDetail.channelName}}</td>
                    </tr>
                    <tr>
                        <td>负责商务</td>
                        <td>{{orderDetail.channelName}}</td>
                    </tr> -->
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
                // 返回订单tap
                backOrderType:0,
                // 是否从搜索进入
                search:'',
                // 审批ID
                approvalId:''
            }
        },
        mounted () {
            // 传入审批ID
            let approvalId = this.$route.query.approvalId;
            if(approvalId){
                this.approvalId = approvalId;
            }
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
            // 返回订单tap
            let backOrderType = this.$route.query.orderType;
            if(backOrderType){
                this.backOrderType = backOrderType;
            }
            // 从搜索进入
            let search = this.$route.query.search;
            if(search){
                this.search = search;
            }
            

        },
        filters:{
            // 订单类型
            orderType:function(value){
                switch(value){
                    case 1:
                        return "租赁";
                    break;
                    case 2:
                        return "销售";
                    break;
                    case 3:
                        return "租转售";
                    break;
                    case 4:
                        return "续租";
                    break;
                    case 5:
                        return "租满送";
                    break;
                }
            },
            // 发货类型
            sendType:function(value){
                switch(value){
                    case 1:
                        return "常规发货";
                    break;
                    case 2:
                        return "采购代发";
                    break;
                }
            },
            // 回款类型
            orderBackType:function(value){
                switch(value){
                    case 1:
                        return "常规";
                    break;
                    case 2:
                        return "预收款";
                    break;
                    case 3:
                        return "尾款";
                    break;
                    case 4:
                        return "保证金";
                    break;
                }
            },
            // 回款状态
            orderBackStatus:function(value){
                switch(value){
                    case 1:
                        return "未收款";
                    break;
                    case 2:
                        return "已收款";
                    break;
                }
            },
            // 配送方式
            deliveryType:function(value){
                switch(value){
                    case 1:
                        return "现付";
                    break;
                    case 2:
                        return "到付";
                    break;
                }
            },
            // 销售渠道
            channelName:function(value){
                switch(value){
                    case 1:
                        return "天猫";
                    break;
                    case 2:
                        return "淘宝";
                    break;
                    case 3:
                        return "垫付";
                    break;
                    case 4:
                        return "其他";
                    break;
                }
            },
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
                if(value){
                    let arr = [];
                    value.map(item=>{
                        arr.push(item.code );
                    })
                    return arr.toString();
                }
            },
            // 转换时间戳为日期
            date:function(value){
                var time = new Date(value);
                var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
                var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
                var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
                var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
                var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
                if(m<10){
                    m = "0"+m;
                }
                // var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
                return y + '/' + M + '/' + d + ' ' + h + ':' + m;
                // + ':' + s;
            },
            // 附件信息
            fileMessage:function(fileArr){
                let arr = []
                if(fileArr){
                    fileArr.map(item=>{
                        arr.push(item.fileName);
                    })
                    return arr.toString();
                }
            },
        },
        beforeDestroy () {

        },
        methods: {
            // 获取订单
            getOrderDetail(){
                const vm = this;
                let params = {
                    sessionId:vm.sessionId,
                    id:vm.orderId,
                    approvalStepLogsId:vm.approvalId
                };
                vm.api(vm, "/api/app/order/getOrderInfo.json", params, "post", function(res) {
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
                    // approvalStepLogsId:vm.approvalId,
                    id:vm.approvalId,
                };
                
                this.$dialog.confirm({
                    message: '是否通过该订单'
                    }).then(() => {
                    vm.api(vm, "/api/app/order/updateStatus.json", params, "post", function(res) {
                        vm.orderHasDeal = true;
                        vm.orderStatus = 2;
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
                    // approvalStepLogsId:vm.approvalId,
                    id:vm.approvalId,
                };
                this.$dialog.confirm({
                    message: '是否拒绝通过该订单'
                    }).then(() => {
                     vm.api(vm, "/api/app/order/updateStatus.json", params, "post", function(res) {
                        vm.orderHasDeal = true;
                        vm.orderStatus = 3;
                        console.log("res",res);
                    });
                    // on confirm
                    }).catch(() => {
                    // on cancel
                    });
            },
            // 返回审批页面
            goBack(){
                const vm = this;
                if(!vm.search){
                    let name = "waitApproval";
                    if(vm.orderStatus!=1){
                        name = 'finishApproval'
                    }
                    vm.$router.push({
                            name: name,
                            query: {
                                backOrderType:vm.backOrderType,
                                orderStatus:vm.orderStatus,
                            }
                        });
                }else{
                    history.go(-1);
                }
            }
        }
    }
</script>
