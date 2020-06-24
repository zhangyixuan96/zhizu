
<style scoped lang="less">
    .setting{
        .main{
            height: 100vh;
            background-color: rgb(248, 248, 248);
            .setItem{
                display: flex;
                position: relative;
                align-items: center;
                font-size:0.14rem;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                height: 0.6rem;
                border-bottom: 1px solid rgb(247, 245, 245);
                padding-left: 0.15rem;
                background-color: white;
                img{
                    width:0.36rem;
                    height:0.36rem;
                    border-radius:0.32rem;
                    // margin-right: 0.1rem;
                    // border:0.02rem solid rgb(247, 245, 245);
                }
                .arrow{
                    width: 0.2rem;
                    height: auto;
                    margin:0;
                }
                .right{
                    display: flex;
                    align-items: center;
                    position: absolute;
                    right: 0.2rem;
                    .avatar{
                        // position: absolute;
                        // right: 0.35rem;
                    }
                    
                }
            }
            .outLogin{
                position: fixed;
                bottom: 0;
                height:0.5rem;
                line-height: 0.5rem;
                width: 100%;
                background:rgba(255,255,255,1);
                box-shadow:0px -1px 0px 0px rgba(248,248,248,1);
                font-size:0.14rem;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                text-align: center;
            }
        }
    }
    
</style>
<template>
<!-- 设置 -->
    <div class="setting">
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <img src="../images/def_ic_back.png">
        </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>设置</h2>
        </header>  
        <div class="h88"></div>
        <div class="main">
            <div class="setItem" @click="goEditUserMessage">
                <span>头像</span>
                <div class="right" >
                    <!-- <img class="avatar" src="../images/c1_ic_biaoqbao.png" alt=""> -->
                    <img class="avatar" :src="avatar" alt="">
                    <img class="arrow" src="../images/b2_ic_fanhui.png" alt="">
                </div>
            </div>
            <div class="setItem" @click="goEditPassword">
                <span>修改密码</span>
                <div class="right">
                    <!-- <img src="../images/c1_ic_biaoqbao.png" alt=""> -->
                    <img class="arrow" src="../images/b2_ic_fanhui.png" alt="">
                </div>
            </div>
            <div class="outLogin" @click="outLogin">退出当前账号</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                avatar:this.getCookie("avatar")
            }
        },
        mounted () {
        },
        beforeDestroy () {

        },
        methods: {
            // 跳转编辑密码
            goEditPassword(){
                 this.$router.push({
                        name: "editPassword",
                        query: {
                        // id: id
                        }
                    });
            },
            // 跳转用户资料编辑
            goEditUserMessage(){
                 this.$router.push({
                        name: "editUserMessage",
                        query: {
                        // id: id
                        }
                    });
            },
            // 退出登录
            outLogin(){
                this.removeCookie("sessionId");
                this.$router.push({
                        name: "login",
                        query: {
                        // id: id
                        }
                    });
            }
        }
    }
</script>
