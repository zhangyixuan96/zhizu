// Mixins

// import LAreaData from './cityData'
export default {
  data() {
    return {
      sessionId: ""
    }
  },
  mounted() {
    const vm = this;
    vm.$root.apiRoot = ``;
    // vm.axios.defaults.baseURL = 'http://139.199.175.39:16699/zhizu';
    vm.axios.defaults.baseURL = 'http://api.zhizu001.com/zhizu/';
    vm.axios.defaults.headers.post['Content-Type'] = 'application/json';
    vm.sessionId = vm.getCookie('sessionId');
    if(document.documentElement.clientWidth<750){
      initScreen();
    }
    
    window.onresize = function() {
      if(document.documentElement.clientWidth<750){
        initScreen();
      }
    }

    function defaultfont() {
      var sw = document.documentElement.clientWidth;
      var pw = 375;
      //  sw = sw > 750 ? 750 : sw < 320 ? 320 : sw;
      var f = 100 * sw / pw;
      document.documentElement.style.fontSize = f + 'px';
    }

    function initScreen() {
      defaultfont();
      setTimeout(function() {
        defaultfont();
      }, 100);
    }
  },
  methods: {
    api(vm, url, params, way,successCallback) {
      let _this = vm;
      // _this.$Loading.start();
      if (way == 'post') {
        let formData = new FormData();
        for (let p in params) {
          formData.append(p, params[p]);
        }
        _this.axios.post(url, formData).then(res => {
          // console.log("res",res);
          // _this.$Loading.finish();
          if (res.data.status == 2000000) {
            successCallback(res.data.data);
          }else if (res.data.status == 5000002 || res.data.status == 5000003 ||res.data.status == 5000103) {
            _this.removeCookie("sessionId");
            // _this.removeCookie("nickname");
            _this.removeCookie("avatar");
            _this.$toast.fail("登录过期,请重新登录")
            // _this.$Message.error("登录过期,请重新登录");
            _this.handleRouter('login');
            // _this.$Loading.finish();
          }else {
            // _this.$Message.error(res.data.message);
            this.$toast.fail(res.data.message)
            // _this.$Loading.error();
          }
        });
      } else {
        let urls = url;
        let first = true;
        if(params){
          for(let i in params){
            if(first){
              urls +="?"
              first = false;
            }else{
              urls+="&"
            }
            urls+=i+"="+params[i]
          }
          // console.log("getUrlend",urls);   
        }
        _this.axios.get(urls).then(res => {
          // _this.$Loading.finish();
          console.log("res",res);
          if (res.data.status == 2000000) {
            successCallback(res.data.data);
          }else if (res.data.status == 5000002 || res.data.status == 5000003 ||res.data.status == 5000103) {
            _this.removeCookie("sessionId");
            // _this.removeCookie("nickname");
            _this.removeCookie("avatar");
            _this.$Message.error("登录过期,请重新登录");
            _this.handleRouter('login');
            _this.$Loading.finish();
          }else {
            // _this.$Message.error(res.data.message);
            // _this.$Loading.error();
            this.$toast.fail(res.data.message)
          }
        });
      }
    },
    // getUrlParam(name) {
    //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //構造壹個含有目標參數的正則表達式對象
    //   var r = window.location.search.substr(1).match(reg); //匹配目標參數
    //   if(r != null) return decodeURI(r[2]);
    //   return null; //返回參數值
    // },
    handleRouterBack() {
      this.$router.back();
    },
    //跳转页面
    handleRouter(name, obj) {
      // window.event.stopPropagation();
      console.log("handleRouter");
      
      this.$router.push({ name: name, query: obj });
    },
    // 阻止事件冒泡
    handleStopPropagation() {
      window.event.stopPropagation();
    },
    //删除cookie
    removeCookie(name, options) {
      this.addCookie(name, null, options);
    },
    // 阻止蒙层底部页面滑动
    stopBodyScroll(isFixed, bodyEl) {
      if (isFixed) {
        const top = window.scrollY;

        bodyEl.style.position = 'fixed';
        bodyEl.style.top = -top + 'px';
      } else {
        bodyEl.style.position = '';
        bodyEl.style.top = '';

        window.scrollTo(0, top) // 回到原先的top
      }
    },
    //检验是否是真的手机号码并提醒
    checkPhone(val) {
      if (!this.isphoneFun(val)) {
        this.$Message.error("请输入正确的手机号");
        return false;
      } else {
        return true;
      }
    },
    //检验是否是手机号
    isphoneFun(number) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      return myreg.test(number);
    },
    //添加cookie
    addCookie(name, value, options) {
      if (arguments.length > 1 && name != null) {
        if (options == null) {
          options = {};
        }
        if (value == null) {
          options.expires = -1;
        }
        if (typeof options.expires == "number") {
          var time = options.expires;
          var expires = options.expires = new Date();
          expires.setTime(expires.getTime() + time * 1000);
        }
        document.cookie = encodeURIComponent(String(name)) + "=" + encodeURIComponent(String(value)) + (options.expires ? "; expires=" + options.expires.toUTCString() : "") + (options.path ? "; path=" + options.path : "") + (options.domain ? "; domain=" + options.domain : ""), (options.secure ? "; secure" : "");
      }
    },
    //获取cookie
    getCookie(name) {
      if (name != null) {
        var value = new RegExp("(?:^|; )" + encodeURIComponent(String(name)) + "=([^;]*)").exec(document.cookie);
        return value ? decodeURIComponent(value[1]) : null;
      }
    }
  }
};
