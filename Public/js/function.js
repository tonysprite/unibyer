 /**
 * 公共Js方法
 * Created by chenruo.
 * Date: 14-11-25
 */

/**
 * 检查变量是不是为空
 */
function chkEmpty(val)
{
    var isempty=/^\s*$/;
    return isempty.test(val);
}
/**
 * 确认删除
 */
function delcfm()
{
    if(!confirm("确认要删除？"))
    {
        return false;
    }
    return true;
}
/**
 * 手机号验证
 */
function  checkMobile(v){

	if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(v))){
        return false;
    }
    return true;

}
/**
 **邮箱验证
 */
function isEmail(str){

//       var reg = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;
	var reg = /^[a-zA-Z0-9]+[\w\.-]+?@([\w\-]+\.){1,2}(com|com.cn|cn|edu|net)$/;
       return reg.test(str);
}

function isLogin()
{
	var uid = "<?php echo $_SESSION('uid');?>";
	if(chkEmpty(uid))
	{
		return false;
	}
	return true;
}

function sendPost(url,data,callback)
{
	$.post(url,data,function(vo){
		if(vo.status == 0)
		{
			alert(vo.info);
			return false;
		}

		if($.type(callback) == 'function')
		{
			callback.call();
		}

	});
}
//通过ID获取某一节点
function g(nodeId) {
   return document.getElementById(nodeId);
}
//sn号判断
function snNum(value) {
    var rect = /^[A-Za-z0-9]{7,15}$/g;
    if (rect.test(value)) {
        return true;
    }else{
        return false;
    }
}
//imei号判断
function snImei(value) {
    var rect = /^[A-Za-z0-9]{14,17}$/g;
    if (rect.test(value)) {
        return true;
    }else{
        return false;
    }
}

function checkString(v)
{
    var Regx = /^[A-Za-z0-9]*$/;
    if (Regx.test(v))
    {
        return true;
    }
    else
    {
        return false;
    }

}


//判断密码是否符合规范

function check_password($v) {
    var rect = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,20}$/;
    if (rect.test($v)) {
        return true;
    }else{
        return false;
    }
 }



//JS 保留几位小数
Number.prototype.toFixed = function(s)
{
changenum=(parseInt(this * Math.pow( 10, s ) + 0.5)/ Math.pow( 10, s )).toString();
index=changenum.indexOf(".");
if(index<00){
changenum=changenum+".";
for(i=0;i<s;i++){
changenum=changenum+"0";
}
}else {
index=changenum.length-index;
for(i=0;i<(s-index)+1;i++){
changenum=changenum+"0";
}
}
return changenum;
}

function sdf_alert(str, buttonName, func) {
    var html_structs = '<div class="dialog_tip_mod" id="sdf_alert_dialog"  >' +
            '<div class="order_del_t">' +
            '<span class="t_ts">友情提示</span>' +
            '<a class="t_close" id="sdf_alert_close"  style="Z-index:9999" href="javascript:closeDialog(1)"></a>' +
            '</div>' +
            '<div class="dialog_word" id="sdf_alert_text">' + str + '</div>' +
            '<div class="dialog_btn_ok" id="sdf_alert_dialog_btnOK" onclick="' + func + '()">' + buttonName + '</div>' +
            '</div>';
    $(".header").append(html_structs);
    $("#sdf_alert_dialog").show();
}
function closeDialog() {
    $("#sdf_alert_dialog").remove();
}

function checkNum(v)
{
    var Regx = /^[0-9]*$/;
    if (Regx.test(v))
    {
        return true;
    }
    else
    {
        return false;
    }

}
//带小数点
function CheckFloat(v) {
    var pattern = /^[1-9]\d*|$/; //匹配非负整数
    if (!pattern.test(v)) {
        return false;
    }
    if(isNaN(v)){
        return false;
    }

    return true;
}


function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
}

//读取cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    var exp = new Date();
    exp.setTime(exp.getTime());
   document.cookie = name + "=a; expires=" + exp.toGMTString()+";path=/";
}
/**
 * js截取字符串，中英文都能用
 * @param str：需要截取的字符串
 * @param len: 需要截取的长度
 */
function cutstr(str, len) {
	var str_length = 0;
	var str_len = 0;
	str_cut = new String();
	str_len = str.length;
	for (var i = 0; i < str_len; i++) {
		a = str.charAt(i);
		str_length++;
		if (escape(a).length > 4) {
			//中文字符的长度经编码之后大于4
			str_length++;
		}
		str_cut = str_cut.concat(a);
		if (str_length >= len) {
			str_cut = str_cut.concat("...");
			return str_cut;
		}
	}
	//如果给定字符串小于指定长度，则返回源字符串；
	if (str_length < len) {
		return str;
	}
}
/*校验姓名合法性的函数*/
function validName(name){
	var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/g;
	if(!reg.test(name)){
		return false;
	}
	return true;
}