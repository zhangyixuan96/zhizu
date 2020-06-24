
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
<!-- 租赁归还 -->
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
                        <td>借用人姓名</td>
                        <!-- <td>用户名</td> -->
                        <td>{{orderDetail.borrowName}}</td>
                    </tr>
                    <tr>
                        <td>状态</td>
                        <td>{{orderDetail.status|status}}</td>
                    </tr>
                    <tr>
                        <td>借用类型</td>
                        <!-- <td>类型</td> -->
                        <td>{{orderDetail.borrowType|borrowType}}</td>
                    </tr>
                    <tr>
                        <td>借用日期</td>
                        <td>{{orderDetail.createTimeLong|date}}</td>
                    </tr>
                    <tr>
                        <td>领用仓库</td>
                        <!-- <td>仓库名称</td> -->
                        <td>{{orderDetail.depositoryName}}</td>
                    </tr>
                    <tr>
                        <td>产品</td>
                    </tr>
             </table>
             <!-- 滚动表格 -->
             <div class="scroll">
                <table class="srcollTable">
                        <tr>
                            <th>产品名称</th>
                            <th>产品编号</th>
                            <th>借用数量</th>
                            <th>已归还数量</th>
                            <th>规格</th>
                            <th>备注</th>
                        </tr>
                        <tr v-for="item in orderDetail.borrowProductResultList">
                            <td>{{item.productName}}</td>
                            <td>{{item.productNos}}</td>
                            <td>{{item.num}}</td>
                            <td>{{item.returnNum}}</td>
                            <td>{{item.spec}}</td>
                            <td>{{item.remarks}}</td>
                        </tr>
                        <!-- <tr>
                            <td>智租订单号</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                            <td>ZZ158463103</td>
                        </tr> -->
                </table>
             </div>
               <table class="oneTable">
                    <tr>
                        <td>备注</td>
                        <td>{{orderDetail.remarks}}</td>
                    </tr>
                    <tr>
                        <td>创建人</td>
                        <td>{{orderDetail.username}}</td>
                    </tr>
                    <tr>
                        <td>创建时间</td>
                        <td>{{orderDetail.createTimeLong|date}}</td>
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
                <!-- <div class="grey"></div> -->
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
            // 借用类型
            borrowType:function(value){
                switch(value){
                        case 1:
                            return "办公借用";
                        break;
                        case 2:
                            return "临时借用";
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
                        return "待归还";
                    break;
                    case 3:
                        return "已归还";
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
                        arr.push(item.code);
                    })
                    return arr.toString();
                }
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
                    id:vm.orderId,
                    approvalStepLogsId:vm.approvalId
                };
                vm.api(vm, "/api/app/order/getBorrowInfo.json", params, "post", function(res) {
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
