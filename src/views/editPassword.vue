
<style scoped lang="less">
    .editPassword{
        background-color: rgb(248, 248, 248);
        height: 100vh;
        .inputPassword{
            font-size:0.14rem;
            font-family:PingFang-SC-Medium,PingFang-SC;
            font-weight:500;
            color:rgba(51,51,51,1);
            display: flex;
            align-items: center;
            padding:0.2rem 0 0.2rem 0.15rem;
            background-color: white;
            position: relative;
            img{
                width: 0.2rem;
                position: absolute;
                right: 0.3rem;
                top:0.2rem;
            }
            .myInput{
                margin-left: 0.4rem;
                width: 2rem;
                // font-size: 0.1rem;
            }
        }
        .next{
            // position: fixed;
            // right: 0.49rem;
            // bottom: 1.4rem;
            margin: 357px auto;
            width:2.76rem;
            height:0.45rem;
            line-height: 0.45rem;
            text-align: center;
            background:rgba(44,134,248,1);
            border-radius:0.23rem;  
            font-size:0.15rem;
            font-family:PingFang-SC-Medium,PingFang-SC;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
    }
</style>
<template>
    <div class="editPassword">
        <header class="topbar">
        <!-- 关闭 -->
        <span class="fl" onClick="javascript:history.go(-1)">
	            <img src="../images/def_ic_back.png">
            </span>
        <!-- 三个原点 -->
        <img class="three_circles" src="../images/line_ic_04.png">
        <!-- 标题 -->
        <h2>确认原密码</h2>
        </header>  
        <div class="h88"></div>
        <!-- 原密码 -->
        <div class="inputPassword" v-if="!showNext">
            <span>原密码</span>
            <input class="myInput" :type="inputType" placeholder="请输入当前密码" v-model="originPassword">
            <img v-if="!showPassword" src="../images/b2_ic_xianshi.png" alt="" @click="changeSee('show',1)">
            <img v-else src="../images/b2_ic_yincang.png" alt="" @click="changeSee('hide',1)">
        </div>
        <!-- <div class="next" @click="next">下一步</div> -->
        <!-- 设置密码 -->
        <div class="setPassword" v-else>
            <div class="inputPassword">
                <span>设置密码</span>
                <input class="myInput" :type="inputTypeF" placeholder="6-16位数字、英文及下划线" v-model="firstSetPassword">
                <img v-if="!showFPassword" src="../images/b2_ic_xianshi.png" alt="" @click="changeSee('show',2)">
                <img v-else src="../images/b2_ic_yincang.png" alt="" @click="changeSee('hide',2)">
            </div>
            <div class="inputPassword">
                <span>设置密码</span>
                <input class="myInput" :type="inputTypeS" placeholder="请再次输入密码" v-model="secondSetPassword">
                <img v-if="!showSPassword" src="../images/b2_ic_xianshi.png" alt="" @click="changeSee('show',3)">
                <img v-else src="../images/b2_ic_yincang.png" alt="" @click="changeSee('hide',3)">
                <!-- <div class="next" @click="finish">完成</div> -->
            </div>
        </div>
        <div class="next" @click="next" v-if="!showNext">下一步</div>
        <div class="next" @click="finish" v-else>完成</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // 显示设置密码
                showNext:false,
                // 原始密码的输入框类型
                inputType:'password',
                // 第一次输入的新密码的输入框类型
                inputTypeF:'password',
                // 第二次输入的新密码的输入框类型
                inputTypeS:'password',
                // 是否显示密码
                showPassword:false,
                // 是否显示第一次输入的新密码
                showFPassword:false,
                // 是否显示第二次输入的新密码
                showSPassword:false,
                // 原始密码
                originPassword:'',
                // 第一次输入的新密码
                firstSetPassword:'',
                // 第二次输入的新密码
                secondSetPassword:'',
                md5Code:''
            }
        },
        mounted () {
        },
        beforeDestroy () {

        },
        methods: {
            // 切换查看密码
            changeSee(type,number){
                switch(number){
                    case 1:
                        this.showPassword = !this.showPassword;
                            if(type=='show'){
                                this.inputType = 'text'
                            }else{
                                this.inputType = 'password'
                            }
                        
                    break;
                    case 2:
                        this.showFPassword = !this.showFPassword;
                            if(type=='show'){
                                this.inputTypeF = 'text'
                            }else{
                                this.inputTypeF = 'password'
                            }
                        
                    break;
                    case 3:
                        this.showSPassword = !this.showSPassword;
                            if(type=='show'){
                                this.inputTypeS = 'text'
                            }else{
                                this.inputTypeS = 'password'
                            }
                        
                    break;
                }
            },
            // 校验原密码是否正确
            next(){
                const vm = this;
                if(!vm.originPassword.trim()){
                    vm.$toast.fail('原密码不可为空');
                    vm.originPassword = '';
                    return;
                }
                let params = {
                    sessionId:vm.sessionId,
                    password:vm.originPassword.trim()
                };
                vm.api(vm, "/api/app/user/editPasswordValidated.json", params, "post", function(res) {
                    vm.md5Code = res.md5Code;
                    vm.showNext = true;
                   console.log("res",res);
                });
                // this.$toast('原密码错误');
                
            },
            // 完成,进行密码校验
            finish(){
                // console.log("finish");
                let firstPassword = this.firstSetPassword.trim();
                let secondPassword = this.secondSetPassword.trim();
                if(!firstPassword){
                    this.$toast.fail('密码不可为空');
                    this.firstSetPassword = '';
                    return;
                }
                if(!secondPassword){
                    this.$toast.fail('密码不可为空');
                    this.secondSetPassword = '';
                    return;
                }
                if(firstPassword!=secondPassword){
                    this.$toast('两次密码输入不一致');
                    return;
                }
                console.log("password",firstPassword,secondPassword);
                var reg = /^[\w]{6,16}$/
                if(!firstPassword.match(reg)){
                    this.$toast('密码格式不正确,请输入6-16位,只包含字母,数字,下划线格式的密码');
                    return;
                }
                if(!secondPassword.match(reg)){
                    this.$toast('密码格式不正确,请输入6-16位,只包含字母,数字,下划线格式的密码');
                    return;
                }
                const vm = this;
                let params = {
                    sessionId:vm.sessionId,
                    password:vm.secondSetPassword,
                    md5Code:vm.md5Code
                };
                vm.api(vm, "/api/app/user/editPassword.json", params, "post", function(res) {
                //    console.log("res",res);
                   vm.$toast('密码已成功修改, 请重新登录');
                   vm.$router.push({
                        name: "login",
                        query: {
                            // userId: userMessage.id
                        }
                    });
                });
            }
        }
    }
</script>
