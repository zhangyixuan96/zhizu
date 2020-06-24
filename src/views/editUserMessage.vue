
<style  lang="less">
    .editUserMessage{
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
                    
                }
                .van-uploader{
                        position: absolute;
                        right: 0.1rem;
                        opacity: 0;
                        width: 100%;
                        height: 0.6rem;
                        
                }
            }
           .van-uploader__upload{
                        width: 100%;
                        height: 0.6rem;
            } 
        }
    }
</style>
<template>
    <div class="editUserMessage">
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
            <div class="setItem">
                <span>头像</span>
                <van-uploader :after-read="afterRead" />
                </van-uploader>
                <div class="right">
                    <!-- <img class="avatar" src="../images/c1_ic_biaoqbao.png" alt=""> -->
                    <img class="avatar" :src="avatar" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // 用户头像
               avatar:this.getCookie("avatar")
			
            }
        },
        mounted () {
        },
        beforeDestroy () {

        },
        methods: {
            // 上传头像
            afterRead(file){
                const vm = this;
                vm.$toast.loading({
                    message: '上传头像中...',
                    forbidClick: true,
                    loadingType: 'spinner',
                    duration: 0, 
                });
                // console.log("file",file.file);
                let params = {
                    sessionId:vm.sessionId,
                    file:file.file,
                };
                vm.api(vm, "/api/app/common/getImgUrl.json", params, "post", function(res) {
                   console.log("res",res);
                    let url = res.url;
                    // vm.$toast('头像修改成功');
                    let params2 = {
                        sessionId:vm.sessionId,
                        avatar:url,
                    };
                    
                    vm.api(vm, "/api/app/user/updateUserInfo.json", params2, "post", function(res) {
                        console.log("res",res);
                        vm.avatar = "http://qiniu.zhizu001.com/"+url;
                        vm.addCookie("avatar","http://qiniu.zhizu001.com/"+url);
                        vm.$toast('头像修改成功');
                        vm.$toast.clear();
                    });
                });
                
            }
        }
    }
</script>
