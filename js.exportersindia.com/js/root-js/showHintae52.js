var xmlHttp

// For frreelist forward used in misc/freelist_fwd.php.somesh
// Start
function addCatgBox(cont, url) {

	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	if (cont!=="x") {
		url=url+"?id1=chk_catg&cont="+cont;
		url=url+"&sid="+Math.random();
		xmlHttp.onreadystatechange=stateChanged;

		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
}
// End 


function dynshowHintstatecity(str,sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	
	if (xmlHttp==null) {
		
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	//document.getElementById('indian_state').innerHTML="<center><img src=\"/static/images_iyp/loading.gif\"></center>";
	//document.getElementById('indian_city').innerHTML="<center><img src=\"/static/images_iyp/loading.gif\"></center>";
	
	document.getElementById('indian_city').innerHTML="<input type=\"text\" name=\"job_state\" id=\"job_state\" value=\"\" class=\"input w70 p2px mr10px\">";
	
	var url=sitename+geturl;
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();
	
	xmlHttp.onreadystatechange=
	function dynstateChanged() {
		
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
			
			document.getElementById('indian_state').innerHTML=xmlHttp.responseText;
		} 
	};
	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function dynshowHint(str,sitename,geturl,element_name) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	document.getElementById(element_name).innerHTML="<b>Please Wait....</b>";
	
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
function dynshowHintUpdate(str,sitename,geturl,element_name) {
	
	xmlHttp=GetXmlHttpObject();
	
	if (xmlHttp==null) {
		
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	document.getElementById(element_name).innerHTML="<b>Please Wait....</b>";
	
	var url=sitename+geturl;
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();	
	
	xmlHttp.onreadystatechange=
	function dynstateChanged() {
		
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
			
			var split_result = xmlHttp.responseText.split('||');
			
			document.getElementById(element_name).innerHTML=split_result[0];
			
			if(document.getElementById("email_duplicate_status")) {
				
				document.getElementById("email_duplicate_status").value=split_result[1];
			}
		} 
	};
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

//this is used for mail email exist or not
function showHint(str,sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=sitename+geturl;
	 
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();
	
	//alert(url);
	
	xmlHttp.onreadystatechange=stateChanged;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function showHintJoinNow_new(str,sitename,geturl) {
	
	if(str=='') {
		return false;
	}
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=sitename+geturl;
	
	var edit_mode = document.getElementById('email_edit_status').value;
	
	var cnty = '';
	var cnty_data = document.getElementById('country');
	if(typeof country !== null && country !== 'undefined' ) {
	  var cnty = document.getElementById('country').value;
	}
	
	url=url+"&q="+str;
	url=url+"&cnty="+cnty;
	url=url+"&sid="+Math.random();
	url=url+"&edit_mode="+edit_mode;
	//alert(url);
	
	xmlHttp.onreadystatechange=stateChangedJoinNow_new;	
	xmlHttp.open("GET",url,true);
	xmlHttp.withCredentials = true;
	xmlHttp.send(null)
}

function stateChangedJoinNow_new() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		var pageName = window.location.pathname;
		 
		if(pageName=='/register-business-online') {
			
			var tresult = xmlHttp.responseText;
			
			var split_result = tresult.split('||');
			
			var email_status = split_result[1].replace(/\s/g,"");
			
			if(email_status=='Y') {
								
				document.getElementById("s_email_id").innerHTML = '';
				document.getElementById("create_account_submit_btn").disabled = false;
				document.getElementById("create_account_submit_btn").classList.add("submit_bt");
				document.getElementById("create_account_submit_btn").classList.remove("submit_bt_d");
			}
			else {
			
				if(split_result[0] && split_result[0].trim() == 'Enter Email ID.'){
					
					document.getElementById('s_email_id').parentElement.classList.add('invalid');
					
				}
				else {
					
					document.getElementById("s_email_id").innerHTML = split_result[0];
					document.getElementById('s_email_id').parentElement.classList.add('invalid');
					
					document.getElementById("create_account_submit_btn").disabled = true;
					document.getElementById("create_account_submit_btn").classList.add("submit_bt_d");
					document.getElementById("create_account_submit_btn").classList.remove("submit_bt");
				}
				
			}
			
			document.getElementById("email_duplicate_status").value=email_status;
		}
		else {
			
			document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
		}
	} 
}

function showHintJoinNow(str,sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=sitename+geturl;
	
	var edit_mode = document.getElementById('email_edit_status').value;
	
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();
	url=url+"&edit_mode="+edit_mode;
	//alert(url);
	
	xmlHttp.onreadystatechange=stateChangedJoinNow;	
	xmlHttp.open("GET",url,true);
	xmlHttp.withCredentials = true;
	xmlHttp.send(null)
}

function stateChangedJoinNow() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		var pageName = window.location.pathname;
		 
		if(pageName=='/register-business-online') {
			
			var tresult = xmlHttp.responseText;
			
			var split_result = tresult.split('||');
			
			var email_status = split_result[1].replace(/\s/g,"");
			
			if(email_status=='Y') {
								
				document.getElementById("s_email_id").innerHTML = '';
				document.getElementById("create_account_submit_btn").disabled = false;
				document.getElementById("create_account_submit_btn").classList.add("submit_bt");
				document.getElementById("create_account_submit_btn").classList.remove("submit_bt_d");
			}
			else {
			
				if(split_result[0] && split_result[0].trim() == 'Enter Email ID.'){
					
					document.getElementById('s_email_id').parentElement.classList.add('invalid');
					
				}
				else {
					
					document.getElementById("s_email_id").innerHTML = split_result[0];
					document.getElementById('s_email_id').parentElement.classList.add('invalid');
					
					document.getElementById("create_account_submit_btn").disabled = true;
					document.getElementById("create_account_submit_btn").classList.add("submit_bt_d");
					document.getElementById("create_account_submit_btn").classList.remove("submit_bt");
				}
				
			}
			
			document.getElementById("email_duplicate_status").value=email_status;
		}
		else {
			
			document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
		}
	} 
}

function stateChanged() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		var pageName = window.location.pathname;
		 
		//alert(pageName); 
		//alert( pageName.indexOf('/trade/') )  // /trade/buyingleads-india/apple-74796.htm
		// /advertise/order-now.php
		
		if(pageName=='/join-now.php' || pageName=='/members/join-now.php' || pageName.indexOf('/trade/') == 0 || pageName == '/advertise/order-now.php') {
			
			//alert(xmlHttp.responseText);
			
			var tresult = xmlHttp.responseText;
			
			//tresult = tresult.replace(/\s/g,"");
			
			//alert(tresult);
			
			//tresult = $.trim(tresult);
			
			//alert(tresult);
			
			var split_result = tresult.split('||');
			
			//alert(split_result[0]);
			//alert(split_result[1]);
			
			var email_status = split_result[1].replace(/\s/g,"");
			
			if(email_status=='Y') {
				
				if(document.getElementById("im_email_id")) {
					document.getElementById("im_email_id").style.display="";
					document.getElementById("text_email_id").className="w150px b gray tar";
					document.getElementById("d_email_id2").style.display="none";
				}
				
				document.getElementById("s_email_id").innerHTML = '';
			}
			else {
				
				if(document.getElementById("im_email_id")) {
					document.getElementById("im_email_id").style.display="none";
					document.getElementById("text_email_id").className="w150px b gray tar red";
					document.getElementById("d_email_id2").style.display="";
				}
				
				document.getElementById("s_email_id").innerHTML = split_result[0];
			}
			document.getElementById("email_duplicate_status").value=email_status;
		}
		else if(pageName=='/register1.php' || pageName=='/members/register.php') {
			
			var tresult = xmlHttp.responseText;
			
			var split_result = tresult.split('||');
			
			var email_status = split_result[1].replace(/\s/g,"");
			
			if(email_status=='Y') {
								
				document.getElementById("s_email_id").innerHTML = '';
				document.getElementById("create_account_submit_btn").disabled = false;
				document.getElementById("create_account_submit_btn").classList.add("submit_bt");
				document.getElementById("create_account_submit_btn").classList.remove("submit_bt_d");
			}
			else {
			
				if(split_result[0] && split_result[0].trim() == 'Enter Email ID.'){
					
					document.getElementById('s_email_id').parentElement.classList.add('invalid');
					
				}
				else {
					
					document.getElementById("s_email_id").innerHTML = split_result[0];
					document.getElementById('s_email_id').parentElement.classList.add('invalid');
					
					document.getElementById("create_account_submit_btn").disabled = true;
					document.getElementById("create_account_submit_btn").classList.add("submit_bt_d");
					document.getElementById("create_account_submit_btn").classList.remove("submit_bt");
				}
				
			}
			
			document.getElementById("email_duplicate_status").value=email_status;
		}
		else {
			
			document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
		}
	} 
}

//this is used for mail email exist or not
function showHint_mobile(str,sitename,geturl) {
		
	var country = document.getElementById('country').value;
	
	if(str=='Mobile No.') {
		
		return false;
	}
	
	if(country=='x' || country=='') {
		
		document.getElementById('country').focus();
		alert("Please select country before you enter mobile number.");
		return false;
	}
	
	if(document.getElementById("im_mobile_phone_id")) {
					
		document.getElementById("im_mobile_phone_id").style.display="none";
	}
	
	var isdCode = country; // in case of mobile script there is only isd_code in country field
	
	if(country.indexOf('^')>=0) { // in case of DesktoP websitE IN^91
		
		var country_code_arr = country.split('^');
		
		isdCode = country_code_arr['1'];
	}	
	
	/*if(isdCode != '91') {
		
		return false;
	}
	*/
	
	if(document.domain=='192.168.1.104') {
		
		img_path = "http://192.168.1.104/static/myfolder-images/loading_01.gif";
	}
	else if(document.domain=='ei.exportersindia.com') {
		
		img_path = "//ei.exportersindia.com/static/myfolder-images/loading_01.gif";
	}	
	else {
		
		img_path = "//static.exportersindia.com/myfolder-images/loading_01.gif";
	}
	
	var img_dis = "<img src='"+img_path+"'>";
	
	if(document.getElementById("s2_mobile_phone_id")) {
		
		document.getElementById('s2_mobile_phone_id').innerHTML=img_dis;
	}
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=sitename+geturl;
	url=url+"&isd_code="+isdCode+"&q="+str;
	url=url+"&sid="+Math.random();
	
	xmlHttp.onreadystatechange=stateChanged_mobile;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function stateChanged_mobile() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		var pageName = window.location.pathname;
		
		if(pageName=='/join-now.php' || pageName=='/members/join-now.php' || pageName=='/members/guest-member-join-now.php' || pageName=='/guest-member-join-now.php') {
			
			//alert(xmlHttp.responseText);
			
			var split_result = xmlHttp.responseText.split('||');
			
			var mobile_status = split_result[1].replace(/\s/g,"");
			
			//document.getElementById("d2_mobile_phone_id").style.display="";
			//document.getElementById("s2_mobile_phone_id").innerHTML = split_result[0];

			document.getElementById("submit_member_mobile").value=split_result[1];
			
			if(document.getElementById("s2_mobile_phone_id")) {
				
				document.getElementById("s2_mobile_phone_id").innerHTML="";
			}
			
			if(split_result[1]=='N') {
				
				if(document.getElementById("im_mobile_phone_id")) {
					
					document.getElementById("im_mobile_phone_id").style.display="none";
				}
				
				if(document.getElementById("d_mobile_phone_id")) {
					
					document.getElementById("d_mobile_phone_id").style.display="";
				}
				
				document.getElementById("s_mobile_phone_id").style.display="";
				
				document.getElementById("s_mobile_phone_id").innerHTML = split_result[0];
				
				//document.getElementById('mobile_msg_p_id').setAttribute("class", "no_tips");
			}
			else {
				
				if(document.getElementById("im_mobile_phone_id")) {
					
					document.getElementById("im_mobile_phone_id").style.display="";
				}
				
				if(document.getElementById("d_mobile_phone_id")) {
					
					document.getElementById("d_mobile_phone_id").style.display="none";
				}
				
				document.getElementById("s_mobile_phone_id").style.display="none";
			}
		}
		else if(pageName=='/register1.php' || pageName=='/members/register.php') {
			
			var tresult = xmlHttp.responseText;
			
			var split_result = tresult.split('||');
			
			var mobile_status = split_result[1].replace(/\s/g,"");		
			
			if(mobile_status=='N') {
				
				if(split_result[0] && split_result[0].trim() == 'Enter Mobile Number'){
					
					document.getElementById('s_mobile_phone_id').parentElement.classList.add('invalid');
				}
				else {
					document.getElementById("s_mobile_phone_id").innerHTML = split_result[0];
					
					document.getElementById("create_account_submit_btn").disabled = true;
					document.getElementById("create_account_submit_btn").classList.add("submit_bt_d");
					document.getElementById("create_account_submit_btn").classList.remove("submit_bt");
				}
				
			}
			else {
				
				//document.getElementById("s_mobile_phone_id").style.display="";
				document.getElementById("s_mobile_phone_id").innerHTML = '';
				document.getElementById("create_account_submit_btn").disabled = false;
				document.getElementById("create_account_submit_btn").classList.add("submit_bt");
				document.getElementById("create_account_submit_btn").classList.remove("submit_bt_d");
			}
			
			document.getElementById("submit_member_mobile").value=mobile_status;
		}
	} 
}

function showHintJoinNow_mobile(str,sitename,geturl) {
	
	//alert(str);
		
	var country = document.getElementById('country').value;
	
	if(str=='Mobile No.' || str=='') {
		
		return false;
	}
	
	if(country=='x' || country=='') {
		
		document.getElementById('country').focus();
		alert("Please select country before you enter mobile number.");
		return false;
	}
	
	if(document.getElementById("im_mobile_phone_id")) {
					
		document.getElementById("im_mobile_phone_id").style.display="none";
	}
	
	var isdCode = country; // in case of mobile script there is only isd_code in country field
	
	if(country.indexOf('^')>=0) { // in case of DesktoP websitE IN^91
		
		var country_code_arr = country.split('^');
		
		isdCode = country_code_arr['1'];
	}	
	
	/*if(isdCode != '91') {
		
		return false;
	}
	*/
	
	if(document.domain=='192.168.1.104') {
		
		img_path = "http://192.168.1.104/static/myfolder-images/loading_01.gif";
	}
	else if(document.domain=='ei.exportersindia.com') {
		
		img_path = "//ei.exportersindia.com/static/myfolder-images/loading_01.gif";
	}	
	else {
		
		img_path = "//static.exportersindia.com/myfolder-images/loading_01.gif";
	}
	
	var img_dis = "<img src='"+img_path+"'>";
	
	if(document.getElementById("s2_mobile_phone_id")) {
		
		document.getElementById('s2_mobile_phone_id').innerHTML=img_dis;
	}
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	var edit_mode = document.getElementById('mob_edit_status').value;
	
	var url=sitename+geturl;
	url=url+"&isd_code="+isdCode+"&q="+str;
	url=url+"&sid="+Math.random();
	url=url+"&edit_mode="+edit_mode;
	
	xmlHttp.onreadystatechange=stateChanged_JoinNowmobile;	
	xmlHttp.open("GET",url,true);
	xmlHttp.withCredentials = true;
	xmlHttp.send(null)
}

function stateChanged_JoinNowmobile() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		var pageName = window.location.pathname;
		
		if(pageName=='/register-business-online') {
			
			var tresult = xmlHttp.responseText;
			
			var split_result = tresult.split('||');
			
			var mobile_status = split_result[1].replace(/\s/g,"");		
			
			if(mobile_status=='N') {
				
				if(split_result[0] && split_result[0].trim() == 'Enter Mobile Number'){
					
					document.getElementById('s_mobile_phone_id').parentElement.classList.add('invalid');
				}
				else {
					document.getElementById("s_mobile_phone_id").innerHTML = split_result[0];
					
					document.getElementById("create_account_submit_btn").disabled = true;
					document.getElementById("create_account_submit_btn").classList.add("submit_bt_d");
					document.getElementById("create_account_submit_btn").classList.remove("submit_bt");
				}
				
			}
			else {
				
				//document.getElementById("s_mobile_phone_id").style.display="";
				document.getElementById("s_mobile_phone_id").innerHTML = '';
				document.getElementById("create_account_submit_btn").disabled = false;
				document.getElementById("create_account_submit_btn").classList.add("submit_bt");
				document.getElementById("create_account_submit_btn").classList.remove("submit_bt_d");
			}
			
			document.getElementById("submit_member_mobile").value=mobile_status;
		}
	} 
}

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

function show_search_state(str,sitename,geturl) {
	
	if(str=='IN'){
		
		xmlHttp=GetXmlHttpObject();
		if (xmlHttp==null) {
			alert ("Browser does not support HTTP Request");
			return;
		}
		var url=sitename+geturl;
		url=url+"&q="+str;
		url=url+"&sid="+Math.random();
		xmlHttp.onreadystatechange=stateChanged_search_state;	
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null)
	}
	else{
		
		document.getElementById("txtHint1").innerHTML='';
	}
}

function stateChanged_search_state() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		document.getElementById("txtHint1").innerHTML=xmlHttp.responseText;
			
	} 
} 


function show_advance_search_hint(str,sitename,geturl) {
			
		xmlHttp=GetXmlHttpObject();
		if (xmlHttp==null) {
			alert ("Browser does not support HTTP Request");
			return;
		}
		var url=sitename+geturl;
		url=url+"&q="+str;
		url=url+"&sid="+Math.random();
		xmlHttp.onreadystatechange=stateChanged_advance_search;	
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null)
	
}

function stateChanged_advance_search() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
		document.getElementById("txtHint1").innerHTML='';
			
	} 
} 



function changeshow(id1) {
	
	var myarray = id1.split("^"); 
	
	if(myarray[0]=='IN')  {
		
		document.getElementById("showstate").style.display='';
		
		if(document.getElementById("stateid")) {
			
			document.getElementById("stateid").style.display='none';
		}
	}
	else{
		
		document.getElementById("showstate").style.display='none';
		
		if(document.getElementById("stateid")) {
		
			document.getElementById("stateid").style.display='';
		}
		
	}
}


function changeshow_new(id1) {
	
	var myarray = id1.split("^"); 
	
	if(myarray[0]=='IN')  {
		
		document.getElementById("showstate").style.display='';
	}
	else {
		
		document.getElementById("showstate").style.display='none';
	}
}

function post_req_changeshow(id1) {
	
	var myarray = id1.split("^"); 
	
	if(myarray[0]=='IN')  {
		
		document.getElementById("showstate").style.display='';
		document.getElementById("showstatestar").style.display='';
		document.getElementById("stateid").style.display='none';
	}
	else{
		
		document.getElementById("showstate").style.display='none';
		document.getElementById("showstatestar").style.display='none';
		document.getElementById("stateid").style.display='';		
	}
}


function changeshow2(id1) {
	
	if(id1=='Offer')  {
		
		document.getElementById("Offer").style.display='';
		document.getElementById("Offer1").style.display='';
		document.getElementById("Demand").style.display='none';
		document.getElementById("classified").style.display='none';
	}
	else {
		
		document.getElementById("Demand").style.display='';
		
		document.getElementById("Offer").style.display='none';
		
		document.getElementById("Offer1").style.display='none';
		
	}
}
	
function getRequest(id1){
	
	var myarray = id1.split("^"); 
	
	document.getElementById("ph_ccode").value=myarray[1];	
}

function getRequest1(id1){
	
	var myarray = id1.split("^"); 
	
	document.getElementById("ph_ccode1").value=myarray[1];	
} 

function changeshow1() {	
		
	if(document.getElementById("bus_ty").value=='x' || document.getElementById("bus_ty").value=='')  {
		
		document.getElementById("classified").style.display='none';
	}
	else {		
		
		document.getElementById("classified").style.display='';
	}
}
function display_classified_area_detail() {
	
	if(document.getElementById("bus_ty1").value=='x' || document.getElementById("bus_ty1").value=='')  {
		
		document.getElementById("classified").style.display='none';
	}
	else {		
		
		document.getElementById("classified").style.display='';
	}
}

function display_classified_area_detail_post_req() {
	
	if(document.getElementById("bus_ty1").value=='x' || document.getElementById("bus_ty1").value=='')  {
		
		document.getElementById("classified").style.display='none';
		
		document.getElementById("showscompstar").style.display='none';
		
		
	}
	else {		
		
		document.getElementById("classified").style.display='';		
		document.getElementById("showscompstar").style.display='';
	}
}


function changeshow_seeach() {
		
	if(document.getElementById("bus_ty").value=='x' || document.getElementById("bus_ty").value=='')  {
		
		document.getElementById("classified").style.display='none';
		document.getElementById("classified1").style.display='none';
	}
	else {
		
		document.getElementById("classified").style.display='';
		document.getElementById("classified1").style.display='';
	}
}

function showHint2(str,sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=sitename+geturl;
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateChanged2;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function stateChanged2() { 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		document.getElementById("tradelead").innerHTML=xmlHttp.responseText;
	} 
}


//this is used for alternate email exist or not
function showHint3(str,sitename,geturl) {
	
	if (document.getElementById("username1").value!='') {
		
		xmlHttp=GetXmlHttpObject();
		if (xmlHttp==null) {
			alert ("Browser does not support HTTP Request");
			return;
		}
		var url=sitename+geturl;
		url=url+"&q="+str+"&username1="+str;	
		url=url+"&sid="+Math.random();
		xmlHttp.onreadystatechange=stateChanged3;	
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null)
	}
}

function stateChanged3() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		document.getElementById("txtHint1").innerHTML=xmlHttp.responseText;
	} 
}


function changeshow3(id1) {
		
	if(id1=='offer')  {
		
		document.getElementById("tradeoffer").style.display='block';
		document.getElementById("tradeoffer1").style.display='block';
		
	}
	else {
		
		document.getElementById("tradeoffer").style.display='none';
		document.getElementById("tradeoffer1").style.display='none';
	}
}

/*function changeshow2() {
		
	if(document.getElementById("tradelead_type").value=='Offer')  {
		
		document.getElementById("offerblock").style.display='block';		
				
		document.getElementById("demand").style.display='none';
		
		
	}
	if(document.getElementById("tradelead_type").value=='Demand')  {			
		
		document.getElementById("demand").style.display='block';
		
		document.getElementById("offerblock").style.display='none';
	}
	else {
		
		document.getElementById("offerblock").style.display='none';
		
		document.getElementById("classified").style.display='none';
	}
}*/
function show_member_category(str,url) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=url;
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=getCategory;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}
// End

function getCategory() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		var splitResult=xmlHttp.responseText.split('||');
		var id=splitResult[1];
		document.getElementById('add_group').style.display='';
		document.getElementById(id).innerHTML=splitResult[0];
		//document.getElementById('txtHint').style.display = 'block'; 
	} 
}

//Run time Captch Check without Jquery
function getSessionContact(sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	var url=sitename+geturl;	
	url=url+"&sid="+Math.random();	
	
	xmlHttp.onreadystatechange=stateChangedContact;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function stateChangedContact() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		//alert(document.getElementById("captch_value").value);
		var text='';
		
		text = xmlHttp.responseText.replace(/\s/g,"");
	
		if(chktrim(text)!='') {
	
			document.getElementById("captch_value").value=text;
			
			var pageName = window.location.pathname;
		
			if(pageName=='/join-now.php' || pageName=='/inquiry.php' || pageName=='/contact-us.htm' || pageName=='/feedback.htm' || pageName.substring(0, 7)=='/trade/' || pageName=='/members/post-requirement.php' || pageName=='/post-requirement.php') {
				
				validate_form_field(document.getElementById('captcha').value,'captcha');
			}
		}
	} 
}

//Run time Captch Check with Jquery
function getCaptchaSession(sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	var url=sitename+geturl;	
	url=url+"&sid="+Math.random();
	
	xmlHttp.onreadystatechange=stateChangedCaptchaSession;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function stateChangedCaptchaSession() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		var text;
		
		text = xmlHttp.responseText.replace(/\s/g,"");
		
		if(chktrim(text)!='') {
			
			document.getElementById("captch_value").value=text;
			validate_form_field(document.getElementById('captcha').value,'captcha');
		}
	} 
}
//Run time Captch Check
function getSessionContact1(sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	var url=sitename+geturl;	
	url=url+"&sid="+Math.random();	
	
	alert(url);
	
	xmlHttp.onreadystatechange=stateChangedContact1;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function stateChangedContact1() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		//alert(document.getElementById("captch_value").value);
		var text;		
		
		text = xmlHttp.responseText.replace(/\s/g,"");	
		
		alert(text);
			
		document.getElementById("captch_value").value=text;
	} 
}

function updtae_refer_url(page_name,sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	var url=sitename+geturl;	
	
	url=url+"?id=insert_refer_url&page_name="+page_name+"&sid="+Math.random();
	
	//alert(url);
	
	xmlHttp.onreadystatechange=insertRefererUrl;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
	
}
function insertRefererUrl() {
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		//alert("hiiii");
	}
}

function skpe_show(id1) {
	
	var myarray = id1.split("^"); 
	
	//alert(myarray[0]);
	
	if(myarray[0]!='IN' && myarray[0]!='CN' && myarray[0]!='HK') {
		
		document.getElementById("showskpeChina").style.display='none';		
		document.getElementById("showskpe").style.display='';		
	}
	else if(myarray[0]=='CN' || myarray[0]=='HK') {
		
		document.getElementById("showskpe").style.display='none';		
		document.getElementById("showskpeChina").style.display='';				
	}
	else {
				
		document.getElementById("showskpe").style.display='none';
		document.getElementById("showskpeChina").style.display='none';		
	}
		
	/*
	var skpecontarray = ['CN', 'CA','CH','GU','HK','PR','SG','TH','US','AR','AU','AT','BE','CL','HR','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IL','IT','JP','KR','LU','MY','NL','NZ','NO','PL','PT','RU','SK','ES','SE','CH','TW','UK'];

	var cnt=0;
	
	for(var i=0; i<skpecontarray.length;i++) {
		
		if(skpecontarray[i]==myarray[0]) {
			
			cnt=1;
			
			document.getElementById("showskpe").style.display='';
						
			break;
		}
	}
	if(cnt==0) {
		
		document.getElementById("showskpe").style.display='none';
	}*/
}

//this is used in request call form
function change_deptt_name() {
		
	if(document.getElementById("deptt_name").value=='' || document.getElementById("deptt_name").value=='sales')  {
		
		document.getElementById("supportQry").style.display='none';
	}
	else {
		
		document.getElementById("supportQry").style.display='';
	}
}

//this is used in request call form

function change_skpe_id() {
		
	if(document.getElementById("country1").value=='CN^86')  {
		
		document.getElementById("skpeID").style.display='';
	}
	else {
		
		document.getElementById("skpeID").style.display='none';
	}
}	

function update_privacy_setting(chk_bx_id,span_id,url) {
	
	var privacy_val = "";
	
	if(document.getElementById(chk_bx_id).checked==false) {
		
		privacy_val = 'N';
	}
	else {
		privacy_val = 'Y';
	}
	
	var domain_name = document.domain;
	var img_path = "";
	
	if(domain_name=='192.168.1.104') {
		
		img_path = "http://192.168.1.104/static/myfolder-images/loading_01.gif";
	}
	else if(document.domain=='ei.exportersindia.com') {
		
		img_path = "//ei.exportersindia.com/static/myfolder-images/loading_01.gif";
	}	
	else {
		
		img_path = "//static.exportersindia.com/myfolder-images/loading_01.gif";
	}
	
	var img_dis = "<img src='"+img_path+"'>";
	
	document.getElementById(span_id).innerHTML=img_dis;
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=url+"&priv_val="+privacy_val+"&span_id="+span_id;
	url=url+"&sid="+Math.random();
	
	xmlHttp.onreadystatechange=show_update_privacy_setting;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}
// End


function show_update_privacy_setting() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
	
		var splitResult=xmlHttp.responseText.split('||');
		
		var updated_val = splitResult[0].replace(/\s/g,"");
		
		if(updated_val=='Y') {
		
			document.getElementById(splitResult[1]).setAttribute("class", "n green");
			document.getElementById(splitResult[1]).innerHTML='Enabled';
		}
		else {
			
			document.getElementById(splitResult[1]).setAttribute("class", "n gray");
			document.getElementById(splitResult[1]).innerHTML='Disabled';
		}
	} 
}

function showPiHint(str,sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	
	if (xmlHttp==null) {
		
		alert ("Browser does not support HTTP Request");
		return;
	}
	//document.getElementById('txtHint').innerHTML="<center><img src=\"/static/images/loading.gif\"></center>";
	document.getElementById('txtHint').innerHTML="<b>Please Wait....</b>";
	//document.getElementById("txtHint").innerHTML="<center><img src=\""+imgbaseurl+"/images/loading.gif\"></center>";
	
	var url=sitename+geturl;
	url=url+"&q="+str;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=statePiChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function statePiChanged() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
	} 
}

function showHintMyfolderTemplate(str,sitename,geturl) {
	
	if(str!='') {
	
		xmlHttp=GetXmlHttpObject();
		
		if (xmlHttp==null) {
			
			alert ("Browser does not support HTTP Request");
			return;
		}
	
		document.getElementById('template_content').innerHTML="<b>Please Wait....</b>";
			
		var url=sitename+geturl;
		url=url+"?q="+str+"&type=get_content";
		
		//alert(url);
		
		url=url+"&sid="+Math.random();
		xmlHttp.onreadystatechange=stateMyfolderTemplateChanged;
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null)
		
	}
	else {
		
		document.getElementById("template_content").innerHTML='';
	}
}

function stateMyfolderTemplateChanged() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		document.getElementById("template_content").innerHTML=xmlHttp.responseText;
	} 
}

function get_inq_sub_catg(catg,url) {
	
	if(catg>0) {
	
		xmlHttp=GetXmlHttpObject();
		if (xmlHttp==null) {
			alert ("Browser does not support HTTP Request");
			return;
		}
		url=url+"&refId="+catg;
		url=url+"&sid="+Math.random();
		//alert(url);
		xmlHttp.onreadystatechange=inq_sub_catg_container;
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null);
	}
}
function inq_sub_catg_container() { 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		//alert(xmlHttp.responseText);
		document.getElementById("inq_sub_catg_container").innerHTML=xmlHttp.responseText;
	} 
}

//this is used for mail email exist or not
function showHint_mobile_guest_member(str,sitename,geturl) {
	
	var country = document.getElementById('country').value;
	
	if(country=='x' || country=='') {
		
		document.getElementById('country').focus();
		alert("Please select country before you enter mobile number.");
		return false;
	}
	
	var country_code_arr = country.split('^');
	
	if(country_code_arr[0]!='IN') {
		
		return false;
	}
	
	if(document.domain=='192.168.1.104') {
		
		img_path = "http://192.168.1.104/static/myfolder-images/loading_01.gif";
	}
	else if(document.domain=='ei.exportersindia.com') {
		
		img_path = "//ei.exportersindia.com/static/myfolder-images/loading_01.gif";
	}	
	else {
		
		img_path = "//static.exportersindia.com/myfolder-images/loading_01.gif";
	}
	
	var img_dis = "<img src='"+img_path+"'>";
	
	document.getElementById('s2_mobile_phone_id').innerHTML=img_dis;
	
	var isdCode = country_code_arr[1];
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=sitename+geturl;
	url=url+"&isd_code="+isdCode+"&q="+str;
	url=url+"&sid="+Math.random();
	
	xmlHttp.onreadystatechange=stateChanged_mobile_guest_member;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function stateChanged_mobile_guest_member() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		//alert(xmlHttp.responseText);
		
		var pageName = window.location.pathname;
		
		var split_result = xmlHttp.responseText.split('||');
			
		var mobile_status = split_result[1].replace(/\s/g,"");
		
		if(document.getElementById("submit_member_mobile")) {
			
			document.getElementById("submit_member_mobile").value=split_result[1];
		}
		
		document.getElementById("submit_member_mobile").value=split_result[1];
			
		if(document.getElementById("s2_mobile_phone_id")) {
			
			document.getElementById("s2_mobile_phone_id").innerHTML="";
		}
		
		if(split_result[1]=='N') {
			
			if(document.getElementById("im_mobile_phone_id")) {
				
				document.getElementById("im_mobile_phone_id").style.display="none";
			}
			
			if(document.getElementById("d_mobile_phone_id")) {
				
				document.getElementById("d_mobile_phone_id").style.display="";
			}
			
			document.getElementById("s_mobile_phone_id").style.display="";
			
			document.getElementById("s_mobile_phone_id").innerHTML = split_result[0];
			
			//document.getElementById('mobile_msg_p_id').setAttribute("class", "no_tips");
		}
		else {
			
			if(document.getElementById("im_mobile_phone_id")) {
				
				document.getElementById("im_mobile_phone_id").style.display="";
			}
			
			if(document.getElementById("d_mobile_phone_id")) {
				
				document.getElementById("d_mobile_phone_id").style.display="none";
			}
			
			document.getElementById("s_mobile_phone_id").style.display="none";
		}
	} 
}

function check_mobile(str,sitename,geturl) {
	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	var url=sitename+geturl;
	url=url+"&q="+str+"&username1="+str;	
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=state_check_mobile;	
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function state_check_mobile() { 
	
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		document.getElementById("mobile_no_check").innerHTML=xmlHttp.responseText;
	} 
}