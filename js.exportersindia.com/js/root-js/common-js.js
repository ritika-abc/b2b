function emailThisPage(rUrl){var target=document.location;var win=window.open(''+rUrl+'/email_with_us.htm?sendurl='+target,'notice','width=600,height=560,location=no,toolbar=no,status=no,resizable=no,scrollbars=yes');win.focus()}
$("document").ready(function(){var urlVar=document.location;if(window.sidebar||window.opera&&window.print){$('#bookmark_page').attr("href",urlVar);$('#bookmark_page').attr("rel","sidebar")}});function addToFavorite(){var titleVar=document.title;var urlVar=document.location;if(window.sidebar||window.opera&&window.print){return}
if(window.external&&window.external.AddFavorite){window.external.AddFavorite(urlVar,titleVar)}else{alert("Press Control + d to bookmark")}}
function CreateBookmarkLink(){var title=document.title;var url=document.location.href;if(window.sidebar){window.sidebar.addPanel(title,url,"")}else if(window.external){window.external.AddFavorite(url,title)}else if(window.opera&&window.print){alert("Press Control + D to bookmark");return!0}else{alert("Press Control + D to bookmark")}}
function firefoxAlert(pageurl){if(navigator.appName=="Microsoft Internet Explorer"){pageurl.style.behavior='url(#default#homepage)';pageurl.setHomePage('//www.exportersindia.com')}else{alert('To set ExportersIndia.com as your home page of your Browser, click and drag the button to the "Home" icon in your browser.')}
return!1}
function openWindow(src){window.open(src,"mywindow","menubar=0,resizable=1,width=500,height=400")}
function openwin(file,Iwidth,Iheight){var newWin1=window.open(file,'nWin1','x=0,y=0,toolbar=no,location=no,directories=no,status=yes,scrollbars=yes, copyhistory=no,width=400,height=300,screenX=0,screenY=0,left=20,top=20')}
function openwin1(file,Iwidth,Iheight){var newWin1=window.open(file,'nWin2','x=0,y=0,toolbar=no,location=no,directories=no,status=yes,scrollbars=yes, copyhistory=no,width='+Iwidth+',height='+Iheight+',screenX=0,screenY=0,left=20,top=20')}
function openwin2(file,Iwidth,Iheight){var newWin1=window.open(file,'nWin3','x=0,y=0,toolbar=no,location=no,directories=no,status=yes,scrollbars=yes, copyhistory=no,width=560,height=500,screenX=0,screenY=0,left=20,top=20')}
function openwin3(file,Iwidth,Iheight){var newWin1=window.open(file,'nWin5','x=0,y=0,toolbar=no, menubar=yes, location=no, directories=no,status=yes,scrollbars=yes, copyhistory=no,width='+Iwidth+',height='+Iheight+',screenX=0,screenY=0,left=20,top=20')}
function openwin4(file,Iwidth,Iheight){var newWin1=window.open(file,'nWin4','x=0,y=0,toolbar=no,location=no,directories=no,status=yes,scrollbars=yes, copyhistory=no,width='+Iwidth+',height='+Iheight+',screenX=0,screenY=0,left=20,top=20')}
function openwin5(nm,keyword,bus_type,product_category){var pop='';var name=nm;if(pop&&!pop.closed){pop.close()}
var key1=",";var newStr=keyword.replace(/ /gi,key1)
pop=eval("window.open('"+name+"&keyword="+newStr+"&bus_type="+bus_type+"&product_category="+product_category+"','NewWIN','chrome[4],toolbar=no,left=10,top=5,width=600,height=450,directories=no,menubar=no,SCROLLBARS=yes')");if(!pop.opener)popUpWin.opener=self}
function multiple_openwin(file,Iwidth,Iheight,popup_name){var newWin=open(file,popup_name,'x=0,y=0,toolbar=no,location=no,directories=no,status=no,scrollbars=yes, copyhistory=no,width='+Iwidth+',height='+Iheight+',screenX=0,screenY=0,left=20,top=20');newWin.focus()}
function chktrim(inputString){if(typeof inputString!="string"){return inputString}
var retValue=inputString;var ch=retValue.substring(0,1);while(ch==" "){retValue=retValue.substring(1,retValue.length);ch=retValue.substring(0,1)}
ch=retValue.substring(retValue.length-1,retValue.length);while(ch==" "){retValue=retValue.substring(0,retValue.length-1);ch=retValue.substring(retValue.length-1,retValue.length)}
while(retValue.indexOf("  ")!=-1){retValue=retValue.substring(0,retValue.indexOf("  "))+retValue.substring(retValue.indexOf("  ")+1,retValue.length)}
return retValue}
var ei={hideShow:function(hide,show){for(i=0;i<hide.length;i++){$(document.getElementById(hide[i])).slideUp('slow')}
for(i=0;i<show.length;i++){$(document.getElementById(show[i])).slideDown('slow')}}}
function offsetLimit(chk1){if((Math.floor(chk1.pageno.value)>Math.floor(chk1.maxpage.value)||Math.floor(chk1.pageno.value)<1)||isNaN(chk1.pageno.value)){alert("Your Page No should be 1 to  "+chk1.maxpage.value);chk1.pageno.focus()
return!1}}
function chk_charlen(var1,var2){box1=eval('document.'+var1+'.'+var2)
box2=eval('document.'+var1);box2.char_len.value=box1.value.length}
function chk_charlen1(var1,var2){box1=eval('document.'+var1+'.'+var2)
box2=eval('document.'+var1);box2.char_len1.value=box1.value.length}
function valid(chk){if(chk.username.value.length==0){alert("E-mail address can't be left blank");chk.username.focus();return!1}
if(chk.username.value.indexOf('@')==-1){alert("Error in e-mail address");chk.username.focus();return!1}
if(chk.username.value.indexOf('.')==-1){alert("Error in e-mail address");chk.username.focus();return!1}
if(chk.username.value.indexOf('@')!=chk.username.value.lastIndexOf('@')){alert("Please Specify One E-mail address only");chk.username.focus();return!1}
return!0}
function isProhibited(obj){var objval=obj.value;invalidstr=new Array("indiamart","india mart","alibaba","ali baba","tradeindia","trade-india");for(i=0;i<invalidstr.length;i++){if(chktrim(objval).toLowerCase().indexOf(chktrim(invalidstr[i]).toLowerCase())>=0){alert("Please use Email ID other than "+invalidstr[i]+".")
obj.focus();return!0}}
return!1}
function isValid(obj){var objval=obj.value;invalidstr=new Array("hotmail","gmail","indiatimes","rediffmail","yahoo",".com",".net",".org",".co.in",".co.cn",".co.ca",".gov",".co.uk");for(i=0;i<invalidstr.length;i++){if(chktrim(objval).toLowerCase().indexOf(chktrim(invalidstr[i]).toLowerCase())>=0){alert("Please don't use "+invalidstr[i]+".")
obj.focus();return!1}}
return!0}
function site_url(slno,url){popupWin=window.open(''+url+'/redirect.php?slno='+slno+'','newwin','menubar=yes,toolbar=yes,location=yes,directories=yes,titlebar=yes,status=yes,scrollbars=yes,resizable=yes')}
function chk2(){document.joinForm.char_len.value=document.joinForm.product_desc.value.length;if(document.joinForm.product_desc.value.length>350){alert("your text exceed 350 characters");document.joinForm.product_desc.focus();return!1}}
function textCounter(maxlimit){document.joinowfrm.product_desc.value=document.joinowfrm.product_desc.value.substring(0,maxlimit);document.joinowfrm.char_len.value=maxlimit-document.joinowfrm.product_desc.value.length}
function isNumberKey(evt){var charCode=(evt.which)?evt.which:event.keyCode;if(charCode>31&&(charCode<48||charCode>57)){return!1}else{return!0}}
function isNumberKeywithdash(evt){var charCode=(evt.which)?evt.which:event.keyCode;if(charCode==45){return!0}else if(charCode>31&&(charCode<48||charCode>57)){return!1}else{return!0}}
function validate_chars_left(objValue,maxlimit,txtid){var chars=document.getElementById(txtid);var len=parseInt((objValue).length);if(len>0||len==0){chars.innerHTML=maxlimit-parseInt(len)}else{chars.innerHTML=maxlimit}}
function validateTextProductCounterExt(field_id,length_field_id,maxlimit){document.getElementById(field_id).value=document.getElementById(field_id).value.substring(0,maxlimit);document.getElementById(length_field_id).innerHTML=maxlimit-document.getElementById(field_id).value.length}
function validateTextCounterExt(field_id,length_field_id,maxlimit){document.getElementById(field_id).value=document.getElementById(field_id).value.substring(0,maxlimit);document.getElementById(length_field_id).value=maxlimit-document.getElementById(field_id).value.length}
function show_vtrust(mi,url){popupWin=window.open(''+url+'popup/popup-trustcode.php?mi='+mi+'','newwin','toolbar=no,directories=no,scrollbars=yes,resizable=0,status=no,menubar=0,width=560,height=500')}
function show_url(var1,site_ty){if(site_ty=="live"){popupWin=window.open('//www.exportersindia.com/members/show-url.php?id=wwwicon&member_id='+var1+'','newwin','menubar=yes,toolbar=yes,location=yes,directories=yes,titlebar=yes,status=yes,scrollbars=yes,resizable=yes')}else if(site_ty=="live1"){popupWin=window.open('//66.36.253.143/members/show-url.php?id=wwwicon&member_id='+var1+'','newwin','menubar=yes,toolbar=yes,location=yes,directories=yes,titlebar=yes,status=yes,scrollbars=yes,resizable=yes')}else{popupWin=window.open('//192.168.1.106/members/show-url.php?id=wwwicon&member_id='+var1+'','newwin','menubar=yes,toolbar=yes,location=yes,directories=yes,titlebar=yes,status=yes,scrollbars=yes,resizable=yes')}}