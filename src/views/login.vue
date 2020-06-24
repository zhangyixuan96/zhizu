<style  lang="less">
    
        .login{
            .main{
                text-align: center;
                .logo{
                    width: 0.88rem;
                    margin-top:0.7rem;
                }
                .myInput{
                    width: 2.76rem;
                    margin:0 auto;
                    margin-top: 0.65rem;
                    .left-icon{
                        width: 0.15rem;
                        margin-right: 0.23rem;
                    }
                    .left-icon1{
                        width: 0.2rem;
                        // height: 0.25rem;
                        margin-right: 0.2rem;
                    }
                }
                .password{
                    margin-top:0.15rem;  
                }
                .loginButton{
                    margin:0 auto;
                    margin-top: 0.65rem;
                    width:2.76rem;
                    height:0.45rem;
                    line-height: 0.45rem;
                    background:rgba(44,134,248,1);
                    border-radius:0.23rem;
                    font-size:0.15rem;
                    font-family:PingFang-SC-Medium,PingFang-SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                }
            }
        }
        [class*=van-hairline]:after{
            border-top: 0 solid #ebedf0 !important;
        }
</style>
<template>
    <div class="login">
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <!-- <img src="../images/g1_head_ic_guan.png"> -->
            </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>登录</h2>
        </header>  
        <div class="h88"></div>
        <!-- logo -->
        <div class="main">
            <img class="logo" src="../images/c1_ic_biaoqbao.png" alt="">
            <!-- 账号 -->
            <div class="myInput account">
                <van-cell-group>
                    <van-field
                        v-model="account"
                        center
                        clearable
                        placeholder="请输入账号"
                    >
                        <!-- <img class="left-icon" src="../images/b1_ic_mima.png" slot="left-icon" alt=""> -->
                        <img class="left-icon1" src="../images/b2_ic_mingcheng.png" slot="left-icon" alt="">
                    </van-field>
                </van-cell-group>
            </div>
            <!-- 密码 -->
            <div class="myInput password">
                <van-cell-group>
                    <van-field
                        v-model="password"
                        center
                        clearable
                        type="password"
                        placeholder="请输入密码"
                    >
                        <img class="left-icon" src="../images/b1_ic_mima.png" slot="left-icon" alt="">
                    </van-field>
                </van-cell-group>
            </div>
            <div class="loginButton" @click="login">登录</div>
        </div>
    </div>
</template>
<script>
    export default {
        
        data() {
            return {
                // 账号
                account:'',
                // 密码
                password:''
            }
        },
        mounted() {
            
        },
        methods: {
            // 登录
            login(){
                const vm = this;
                let params = {
                    username: vm.account,
                    password:vm.password
                };
                vm.api(vm, "/api/app/user/login.json", params, "post", function(res) {
                    let userMessage = res;
                    vm.addCookie("avatar","http://qiniu.zhizu001.com/"+userMessage.avatar);
                    vm.addCookie("sessionId",userMessage.sessionId)
                    // console.log("res",res);
                    // vm.$router.push({
                    //     name: "personalCenter",
                    //     query: {
                    //         userId: userMessage.id
                    //     }
                    // });
                    params = {
                        sessionId:userMessage.sessionId
                    };
                    vm.api(vm, "/api/wechat/auth/register.json", params, "get", function(res) {
                        let url = res.baseUrl;
                        window.location.href = url;
                        // console.log("res111",res);
                        // vm.$router.push({
                        //     name: "personalCenter",
                            // query: {
                            //     userId: userMessage.id
                            // }
                        // });
                        
                    });

                });

            //   this.$dialog.alert({
            //     message: '密码错误'
            //     });
            //     this.$router.push({
            //             name: "personalCenter",
            //             query: {
            //             // id: id
            //             }
            //         });
            }
        }
    }
</script>