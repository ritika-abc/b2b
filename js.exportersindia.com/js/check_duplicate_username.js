function GetXmlHttpObject() { 
	var objXMLHttp=null;
	if (window.XMLHttpRequest) {
		objXMLHttp=new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return (objXMLHttp);
} 
function checkDuplicateUserName(str,sitename,geturl,element_name) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	document.getElementById(element_name).innerHTML="<br><b>Please Wait....</b>";
	
	var url=sitename+geturl;
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=
	function dynstateChanged() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
			document.getElementById(element_name).innerHTML=xmlHttp.responseText;
		} 
	};
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}