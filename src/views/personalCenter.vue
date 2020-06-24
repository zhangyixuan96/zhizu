<style scoped lang="less">
    .personalCenter{
        .main{
            .userTop{
                background-image: url('../images/b2_ic_bg.png');
                width:100%;
                height: 1.1rem;
                display: flex;
                align-items: center;
                img{
                    width: 0.64rem;
                    height: 0.64rem;
                    border-radius:50%;
                    border:2px solid rgba(255,255,255,1);
                    margin-left: 0.3rem;
                }
                .userName{
                    display: inline-block;
                    font-size:0.18rem;
                    font-family:PingFang-SC-Bold,PingFang-SC;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    margin-left: 0.23rem;
                }
            }
            .allMessage{
                background-color: rgb(248, 248, 248);
                padding-top:0.05rem;
                height: 100vh;
                .userMessage{
                    display: flex;
                    padding:0.2rem 0 0.2rem 0.14rem;
                    border-bottom: 1px solid rgb(247, 238, 238);
                    min-height: 0.6rem;
                    background-color: white;
                    position: relative;
                    img{
                        width: 0.2rem;
                        height: 0.2rem;
                    }
                    .title{
                        font-size:0.14rem;
                        font-family:PingFang-SC-Medium,PingFang-SC;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        margin-left: 0.23rem;
                    }
                    .message{
                        font-size:0.14rem;
                        font-family:PingFang-SC-Medium,PingFang-SC;
                        font-weight:500;
                        color:rgba(153,153,153,1);
                        margin-left: 0.3rem;
                        width: 2rem;
                    }
                    .arrow{
                        width: 0.2rem;
                        position: absolute;
                        right: 0.15rem;
                        bottom: 0.2rem;
                    }
                }
            }
            .bottom{
                position: fixed;
                bottom: 0;
                background-color: white;
                padding:0.1rem 0;
                .bottomItem{
                    display: inline-block;
                    // width: 1.229rem;
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
        }
    }
</style>
<template>
    <div class="personalCenter">
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <img src="../images/def_ic_back.png">
            </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>个人中心</h2>
        </header>  
        <div class="h88"></div>
        <div class="main">
            <!-- 头部 -->
            <div class="userTop">
                <!-- <img src="../images/c1_ic_biaoqbao.png" alt=""> -->
                <img :src="userMessage.avatar" alt="">
                <div class="userName">{{userMessage.nickname}}</div>
            </div>
            <!-- 信息列表 -->
            <div class="allMessage">
                <div class="userMessage">
                    <img src="../images/b2_ic_mingcheng.png" alt="">
                    <span class="title">账号</span>
                    <span class="message">{{userMessage.username}}</span>
                </div>
                <div class="userMessage">
                    <img src="../images/b2_ic_mingcheng.png" alt="">
                    <span class="title">名称</span>
                    <span class="message">{{userMessage.nickname}}</span>
                </div>
                <div class="userMessage">
                    <img src="../images/b2_ic_juese.png" alt="">
                    <span class="title">角色</span>
                    <span class="message">{{userMessage.roleName}}</span>
                </div>
                <div class="userMessage">
                    <img src="../images/b2_ic_bumen.png" alt="">
                    <span class="title">部门</span>
                    <span class="message">{{userMessage.departmentName}}</span>
                </div>
                <div class="userMessage" @click="goSetting">
                    <img src="../images/b2_ic_shezhi.png" alt="">
                    <span class="title">设置</span>
                    <img class="arrow" src="../images/b2_ic_fanhui.png" alt="">
                </div>
            </div>
            <!-- 底部固定栏 -->
            <div class="bottom">
                <div class="bottomItem" @click="goWaitApproval">待审批</div>
                <div class="bottomItem" @click="goFinishApproval">已审批</div>
                <div class="bottomItem blue">个人中心</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
        data() {
            return {
                // 用户ID
                userId:'',
                // 用户信息
                userMessage:''
            }
        },
        mounted() {
            // let userId = this.$route.query.userId;
            // if(userId){
            //     this.userId = userId;
            // }
            this.getUserMessage();
            // console.log("userId",userId);
        },
        methods: {
            // 获取用户信息
            getUserMessage(){
                const vm = this;
                let params = {
                   sessionId:vm.sessionId
                //    sessionId:'sss'
                };
                vm.api(vm, "/api/app/user/userCenter.json", params, "post", function(res) {
                    vm.userMessage = res;
                //    console.log("userMessage",res);
                });
            },
            // 跳转设置
            goSetting(){
                this.$router.push({
                        name: "setting",
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
            // 跳转已审批
            goFinishApproval(){
                this.$router.push({
                        name: "finishApproval",
                        query: {
                        // id: id
                        }
                    });
            }
        }
    }
</script>