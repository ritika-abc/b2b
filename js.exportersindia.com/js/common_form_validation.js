//this script is use on EI/contact-us.htm
function contact_us_validation(frm) {
	
	//user does not Login
	var radio_val='';
	
	if (frm.subject.options[frm.subject.selectedIndex].value == "x") {
	
		alert("Please Select Subject for Your Comments");
		frm.subject.focus();
		return false;
	}
	
	if (frm.comments.value.length<50) {
	
		alert("Please Enter Your Comments [ Min 50 Characters ]");
		frm.comments.focus();
		return false;
	} 
	if (frm.comments.value.length>500) {
	
		alert("Please Enter Your Comments upto 500 Characters. ");
		frm.comments.focus();
		return false;
	} 
	
	/*
	if (frm.captcha.value.length==0) {
	
		alert("Please Enter Confirmation Code or Captcha");
		frm.captcha.focus();
		return false;
	}
	if(frm.captch_value.value!='') {
		
	 	if(parseInt(frm.captcha.value)!=parseInt(frm.captch_value.value)) {
	 		
	 		alert("Confirmation Code did not Match With the Displayed Code.");
	 		frm.captcha.focus();
	 		return false;
	 	}
 	}*/
 	
 	return common_form_validation(frm);
 	
    //END
}

//This is use for country code select as per contry name
function return_isd_code(formName, fldNameLen, fldNameVal) {

	box1 = eval('document.' + formName + '.' + fldNameLen);	
	var val1 =box1.value;	
	var val1Array = val1.split('^'); 	
	box2 = eval('document.' + formName + '.' + fldNameVal);	
	box2.value=val1Array[1];
}


function common_validate_form_field(val,field) {
	
	var validate_password =/^([a-zA-Z0-9])+$/;
	
	var validate_name =/^([a-zA-Z. ])+$/;
	
	var text = "";
	
	
	if(field=="country" || field=="mobile_phone" ||  field=="captcha" || field=="state_code1" || field=="your_name" || field=="comments" || field=="feedbackType" || field=="your_desc" || field=="subject" || field=="req_detail" || field=="quantity_req") {
				
		var f_value = document.getElementById(field).value;
		
		if(field=="country" && f_value=="x") {
			
			f_value="";
		}	
		
		if(chktrim(f_value)=="") {
			
			if(field=="comments") {
				
				text = "Please Enter Your Comments [ min. 50 Characters ].";
			}
			else if(field=="feedbackType") {
				
				text = "Please Select Your Type of Feedback.";
			}
			else if(field=="your_desc") {
				
				text = "Please Enter Your Feedback / Message [ min. 50 Characters ].";
			}
			else if(field=="subject") {
				
				if(document.getElementById('subject').value=="Enter your product / service want to buy..." || document.getElementById('subject').value=="") {
					
					text = "Please Enter Your Products / Services.";
				}
			}
			else if(field=="req_detail") {
				
				text = "Please Enter Your Requirement Details (min. 50 Characters).";
			}
			else if(field=="quantity_req") {
				
				text = "Please Enter Estimated Order Quantity.";
			}
			else if(field=="captcha") {
			
				text = "Please Enter Confirmation Code.";
			}
			else if(field=="your_name") {
			
				text = "Please Enter Your Name.";
			}	
			else if(field=="country") {
				
				text = "Please Select Country.";
			}
			else if(field=="state_code1") {
			
				text = "Please Select State.";
			}
			else if(field=="mobile_phone") {
				
				if(document.getElementById('mobile_phone').value=="Mobile No." || document.getElementById('mobile_phone').value=="") {
					
					text = "Please Enter Mobile Number.";
				}
			}		
		}
				
		
		if(field=="comments" && f_value!="") {
				
			if ((!f_value.indexOf('.com')) || (!f_value.indexOf('.net')) || (!f_value.indexOf('.www'))) {
			
				text= "Don't specify your site address in Your Comments fields.";
			}
			if (chktrim(f_value).length<50) {
		
				text= "Please Enter Your Comments [ min. 50 Characters ].";
			}
			if (chktrim(f_value).length>500) {
		
				text= "Enter Your Comments (max. 500 characters).";
			}
		}
		
		if(field=="captcha" && text=="") {
			
			if(isNaN(f_value)) {
				
				text = "Please Enter Valid Captcha Code.";
			}
			else if(parseInt(f_value)!=parseInt(document.getElementById("captch_value").value)) {
			
				text = "Verification (Captcha Image) Code did not match with displayed code";
			}
		}
		
		
		if(field=="your_name" && f_value!='') {
			
			if ((!validate_name.test(document.getElementById('your_name').value))) {
				
				text = "Please Enter Valid Name.";
			}
		}
		
		
	    if(field=="mobile_phone" && f_value!="Mobile No." && f_value!="") {
			
			if ((f_value.length<10) && document.getElementById('country').value=="IN^91") {
			   
			   text = "Mobile Number Should be 10 Digits.";
		    }
		    
		    if ((f_value.length<3) && document.getElementById('country').value!="IN^91") {
			   
			   text = "Mobile Number Should be at least 3 Digits.";
		    }
	    }
	    
		if(text=='') {
		
			/*
			if(field=="mobile_phone") {
			
				if(field=="mobile_phone" && f_value!="" && f_value!="Mobile No.") {
				
					document.getElementById("im_"+field+"_id").style.display="";
					
					document.getElementById("d_ph_number_id").style.display="none";
					
					jQuery('#text_ph_number_id').removeClass('red');
				}
			}
			else {
			
				document.getElementById("im_"+field+"_id").style.display="";
			}
			*/
			
			
			document.getElementById("im_"+field+"_id").style.display="";
			
			jQuery('#text_'+field+'_id').removeClass('red');
			
			
			document.getElementById("d_"+field+"_id").style.display="none";
		}
		else {
			
			var text_field_id = jQuery('#text_'+field+'_id');

			if(text_field_id.not('.red')) {
				
				text_field_id.addClass('red');
			}
		
			document.getElementById("d_"+field+"_id").style.display="";
			document.getElementById("im_"+field+"_id").style.display="none";
			document.getElementById("s_"+field+"_id").innerHTML=text;
		}
 	}
}

//for checking mobile length as india and foreign case
function setMobileMaxLenValue(val) {
	
	if(val=='IN^91') {
		
		document.getElementById('mobile_phone').setAttribute('maxlength','10');
		
		document.getElementById('mobile_phone2').setAttribute('maxlength','10');
		
		if(document.getElementById('mobile_phone').value.length>10) {
		
			document.getElementById('mobile_phone').value = document.getElementById('mobile_phone').value.substring(0, 10);
		}
		if(document.getElementById('mobile_phone2').value.length>10) {
		
			document.getElementById('mobile_phone2').value = document.getElementById('mobile_phone2').value.substring(0, 10);
		}
	}
	else {
		
			document.getElementById('mobile_phone').setAttribute('maxlength','20');
			
			document.getElementById('mobile_phone2').setAttribute('maxlength','20');
	}
}


//for checking mobile length as india and foreign case
function setMobileMaxLenValue_new(val) {
	
	if(val=='IN^91') {
		
		document.getElementById('mobile_phone').setAttribute('maxlength','10');
		
		if(document.getElementById('mobile_phone').value.length>10) {
		
			document.getElementById('mobile_phone').value = document.getElementById('mobile_phone').value.substring(0, 10);
		}
		
	}
	else {
		
			document.getElementById('mobile_phone').setAttribute('maxlength','15');
	}
}




function char_valid() {			
	
	document.joinForm.char_len.value=document.joinForm.comments.value.length;	
	
    if (document.joinForm.comments.value.length>500) {
	    
    	alert("Your Limit Has Exceeded 500 characters.");
        document.joinForm.comments.focus();
        return false;
	}
}


function common_form_validation(frm) {

	if(frm.check_user.value=="false") {
		
		if (document.getElementById('existingUser').style.display=='') {
		    
		    document.getElementById('action_id').value="member_login";
		    
			if (frm.pass_word.value.length==0) {
				
		    	alert("Please Enter Your Password");
		        frm.pass_word.focus();
		        return false;
			}
	    }
	    else {
		    
		    document.getElementById('action_id').value="member_reg";
		    
		    if(frm.username.value.length!='') {
		    	
			    if (frm.your_name.value.length==0) {
					alert("Please Enter Your Name");
					frm.your_name.focus();
					return false;
				}
				
				var validate_name =/^([a-zA-Z. ])+$/;
	
				if (!validate_name.test(frm.your_name.value)) {
					
					alert("Please Enter Valid Name");
					frm.your_name.focus();
					return false;
				}
				
				if (!frm.comp_name_valid.checked) {
				
			    	if (frm.comp_name.value.length==0) {
				
				    	alert("Please Enter Company Name");
				        frm.comp_name.focus();
				        return false;
					}
				}
				
				
				if (frm.country.options[frm.country.selectedIndex].value=="x") {
				
					alert("Please Select Country");
					frm.country.focus();
					return false;
				}
				
				if ((frm.country.options[frm.country.selectedIndex].value=="IN^91") && (frm.state_code1.options[frm.state_code1.selectedIndex].value=="")) {
		     
		        	alert("Please Select Your State Name");
		        	frm.state_code1.focus();
		        	return false;
		     	}
	 		
		   			
				if(frm.mobile_phone.value=="Mobile No.") {
					
					alert('Please Enter Your Mobile Number.');
					frm.mobile_phone.focus();
			     	return false;
				}
				
			 
				if(frm.mobile_phone.value!="Mobile No.") {
				
					if (frm.mobile_phone.value.length<10 && frm.country.options[frm.country.selectedIndex].value=="IN^91") {
					   
					  // alert("Please Enter Valid Mobile Number");
					  alert("Mobile Number Should be 10 Digits.");
					   frm.mobile_phone.focus();
					   return false;
					}
					
					if ((frm.mobile_phone.value.length<3) && frm.country.options[frm.country.selectedIndex].value!="IN^91") {
					   
					  // alert("Please Enter Valid Mobile Number");
					   alert("Mobile Number Should be at least 3 Digits.");
					   frm.mobile_phone.focus();
					   return false;
					}
					
					if(isNaN(frm.mobile_phone.value)== true)
					{	
						alert("Please enter numeric values");
						frm.mobile_phone.focus();
						return false;
					}
				}
			
				if (frm.username.value.length == 0) {
					
					alert("E-mail address can't be left blank");
					frm.username.focus();
					return false;
				}
				
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
				
		   		if(reg.test(frm.username.value) == false) {
		 
		      		alert('Invalid Email Address');
		      		frm.username.focus();
		      		return false;
		   		}		    
	    	}
		}
	}
}



function validate_feeback(frm) {
	
	if (frm.feedbackType.options[frm.feedbackType.selectedIndex].value.length=="0") {
			
	    alert("Please Select Your Type of Feedback ");
	    frm.feedbackType.focus();
	    return false;
	}
	
	if (frm.your_desc.value.length==0) {
		
    	alert("Please Enter Your Feedback / Message");
        frm.your_desc.focus();
        return false;
	}
	if (frm.your_desc.value.length<50) {
		
    	alert("Please Enter Your Feedback / Message [Min. 50 characters]");
        frm.your_desc.focus();
        return false;
	}
	if (frm.your_desc.value.length>500) {
		
    	alert("Please Enter Your Feedback / Message [Max. 500 characters]");
        frm.your_desc.focus();
        return false;
	}
	
	/*
	if (frm.captcha.value.length==0) {
		
    	alert("Please Enter Confirmation Code");
        frm.captcha.focus();
        return false;
	}*/
	
    return common_form_validation(frm);
}

function post_requirement(chk1) { 	
	
	if (chktrim(chk1.subject.value).length==0) {
		
     	alert("Please Enter Your Products / Services");
     	chk1.subject.focus();
     	return false;
  	}
  	
  	 	
	if (chktrim(chk1.req_detail.value).length<50) {
		
     	alert("Please Enter Your Requirement Details (min. 50 Characters)");
     	chk1.req_detail.focus();
     	return false;
  	}  	
	else if(chktrim(chk1.req_detail.value).length>500) {
		
		alert("Your Requirement Details Should not Exceed 500 characters");
		chk1.req_detail.focus();
		return false;
	}
  	
  	if (chktrim(chk1.quantity_req.value).length==0) {
	  	
     	alert("Please Enter Estimated Order Quantity");
     	chk1.quantity_req.focus();
     	return false;
  	}
  	
  	if(chktrim(chk1.quantity_req.value)!='') {
		
	  	if(chktrim(chk1.quantity_req.value).indexOf("-")==0){
			
		  	alert("Please Enter Positive Number.");
			chk1.quantity_req.focus();
			return false;
		
		}
	}
	
	if (chktrim(chk1.captcha.value).length==0) {				
		alert("Please Enter Confirmation Code From The Image");
		chk1.captcha.focus();
		return false; 
	}
	
	if(chktrim(chk1.captch_value.value)!='') {

		if(parseInt(chk1.captcha.value)!=parseInt(chk1.captch_value.value)) {
	 		
	 		alert("Enter Code did not match with displayed code.");
	 		chk1.captcha.focus();
	 		return false;
	 	}
 	}
 	
 	
 	if (!chk1.agree.checked) {
	    	
	    	alert("You must check the Terms and Conditions");
	        chk1.agree.focus();
	        return false;
	
	}
	
	
	return common_form_validation(chk1);
}

function getExistingUser(ajax_url, email_id) {
	
	if(!email_id) {
		
		return false;
	}
	
	$.ajax({	

		dataType: "json",
		url: ajax_url,	
		type: "GET",
		data: { id:'check_existing_user', email: email_id},			
		success: function(result) {
		
			if($.trim(result.user_type) == 'existing') {
				
				remove_error_msg();	

				$('#comp_name').val(result.comp_name);
				$('#your_name').val(result.your_name);
				$('#country').val(result.country_isd_code);
				$('#ph_ccode1').val('+'+result.isd_code);
				$('#mobile_phone').val(result.mobile_phone);				
				$('#city').val(result.city);
			}
			else {
				
				$('#comp_name').val('');
				$('#your_name').val('');
				$('#country').val('');
				$('#ph_ccode1').val('ISD');
				$('#mobile_phone').val('');				
				$('#city').val('');				
			}
	  	}
	});	
}

function remove_error_msg() {
	
	$('#comp_name_span').html('');
	$('#your_name_span').html('');
	$('#country_span').html('');
	$('#mobile_phone_span').html('');
	$('#city_span').html('');	
}

var focus_flag = 0;

$('#feedbackType').on('change',function(){validate_feedback_type('feedbackType')});
$('#your_desc').blur(function(){validate_description('your_desc', '3000')});
$('#username').blur(function(){validate_email('username')});
$('#your_name').blur(function(){validate_name('your_name');});
$('#comp_name').blur(function(){validate_company_name('comp_name');});
$('#country').on('change',function(){validate_country('country')});
$('#city').blur(function(){validate_name('city');});
$('#mobile_phone').blur(function(){validate_mobile('mobile_phone')});

function validate_feeback_form() {
	
	focus_flag = 0;
	
	if(validate_feedback_type('feedbackType') & validate_description('your_desc', '3000') & validate_email('username') & validate_name('your_name') & validate_company_name('comp_name') & validate_country('country') & validate_mobile('mobile_phone') & validate_name('city')) {

		return true;
	}
	else {

		return false;
	}	
}

function validate_feedback_type(fieldId) {

	if ($('#'+fieldId).val().length == 0) {
		
		$('#'+fieldId+'_span').html("Select Your Feedback Type.");
		
		if (focus_flag == 0) {
			
			$('#'+fieldId).focus();
			focus_flag = 1;
		}
				
	    return false;
	}
	else {
		
		$('#'+fieldId+'_span').html("");
		return true;
	}	
}

function validate_description(fieldId, maxchar) {
	
	if (chktrim($('#'+fieldId).val()).length == 0) {
		
		$('#'+fieldId+'_span').html("Enter Detail [50 to "+maxchar+" Characters]");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
		
	    return false; 
	}
	else if (chktrim($('#'+fieldId).val()).length < 50) {
		
		$('#'+fieldId+'_span').html("Enter Detail [50 to "+maxchar+" Characters]");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
		
	    return false; 
	}	
	else if (chktrim($('#'+fieldId).val()).length > maxchar) {
		
		$('#'+fieldId+'_span').html("Enter Detail [50 to "+maxchar+" Characters]");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
		
	    return false; 
	}
	else {
		
		$('#'+fieldId+'_span').html("");
		
		return true; 
	}	
}

function validate_email(fieldId) {
	 

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
	
	if (chktrim($('#'+fieldId).val()).length==0) {
	    
		$('#'+fieldId+'_span').html("Enter Email Id.");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
			
		return false;
	}	
	else if(reg.test($('#'+fieldId).val()) == false) {

		$('#'+fieldId+'_span').html("Invalid Email Address.");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
				
		return false;
	}		
	else if ($('#'+fieldId).val().indexOf('@') != $('#'+fieldId).val().lastIndexOf('@')) {
		
		$('#'+fieldId+'_span').html("Specify One E-mail address only.");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
				
	    return false;
	}
	else {
		
		$('#'+fieldId+'_span').html("");
		
		return true;
	} 	
}

function validate_name(fieldId) {
	 
	var name_txt = 'Your Name';
	
	if(fieldId == 'group_name') {
		
		name_txt = 'Group Name';
	}
	else if(fieldId == 'city') {
		
		name_txt = 'City Name';
	}
	else if(fieldId == 'subject') {
		
		name_txt = 'Looking for Supplier of ';
	}
	
	var validate_name =/^([a-zA-Z. )(&\-])+$/;

    if (chktrim($('#'+fieldId).val()).length==0) {
	    
	    $('#'+fieldId+'_span').html("Enter "+name_txt);
	    
		if (focus_flag == 0) {
			
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
		    
        return false;
    }
    else if (fieldId == 'subject' && chktrim($('#subject').val()).length<3) {
	    
	    $('#'+fieldId+'_span').html("Looking for Supplier of should be at least 3 characters");
	    
		if (focus_flag == 0) {
			
			$('#'+fieldId).focus();
			focus_flag = 1;
		}	
		    
        return false;
    }		
 	else if((validate_name.test($('#'+fieldId).val())==false) && fieldId != 'subject') {
	
	 	$('#'+fieldId+'_span').html(name_txt+" Should Contain Charactors, Space and Dot(.) only");
		
		if (focus_flag == 0) {
			
			$('#'+fieldId).focus();
			focus_flag = 1;
		}
			 	
        return false;
	}
	else {
		
		$('#'+fieldId+'_span').html("");
		return true;
	}
}

function validate_company_name(fieldId) {
	 
	var validate_name =/^([a-zA-Z0-9.&\- ])+$/;
	
	if (chktrim($('#'+fieldId).val()).length == 0) {
		
		return true;
	}
 	else if((validate_name.test($('#'+fieldId).val())== false)) {
	
	 	$('#'+fieldId+'_span').html("Enter Valid Company Name [Charactors, Numbers, Space, - and Dot(.)]");
		
		if (focus_flag == 0) {
			
			$('#'+fieldId).focus();
			focus_flag = 1;
		}
			 	
        return false;
	}	
	else {
		
		$('#'+fieldId+'_span').html("")

		return true;		
	}	
}

function validate_country(fieldId) {
	 

	if ($('#'+fieldId).val()=="x" || $('#'+fieldId).val()=="") {
		
		$('#'+fieldId+'_span').html("Select Your Country Name");
		
		if (focus_flag == 0) {
			
			$('#'+fieldId).focus();
			focus_flag = 1;
		}
				
	    return false;
	}
	else {
		
		$('#'+fieldId+'_span').html("");
		return true;
	}	
}

function validate_mobile(fieldId) {
	 
	if($('#'+fieldId).val().length == 0) {
		
		$('#'+fieldId+'_span').html("Enter Mobile Number.");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}
				
		return false;		
	}
	
	var st = $('#'+fieldId).val(); 
	
	var num_len = st.replace(/\D/g, '').length;
	
	if($('#'+fieldId).val().length != num_len){
		 
		$('#'+fieldId+'_span').html("Enter Only Numbers In Mobile Input");		
		$('#'+fieldId).focus();
		return false;
	}
	 
	if(($('#'+fieldId).val().length < 10 || $('#'+fieldId).val().length > 10) && $('#country').val() == "IN^91") {
	   
		$('#'+fieldId+'_span').html("Mobile Number Should be 10 Digits.");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}
				
		return false;
	}	   
	else if (($('#'+fieldId).val().length < 3) && $('#country').val() != "IN^91") {
	   
		$('#'+fieldId+'_span').html("Mobile Number Should be at least 3 Digits.");
		
		if (focus_flag == 0) {
		
			$('#'+fieldId).focus();
			focus_flag = 1;
		}
			  
		return false;
	}
	else {
		
		$('#'+fieldId+'_span').html("");
		return true;
	}   
}

function validate_state_city() {
	
	if($('#country').val().length == 0) {
		
		return true;
	}	
	
	var countryCode = $('#country').val();
	
	if(countryCode.indexOf('^') >= 0) {
		
		var country_code_arr = countryCode.split('^');
		
		countryCode = country_code_arr['0'];
	}	

	var validate_name =/^([a-zA-Z. ])+$/;
	
 	if ((countryCode=="IN") && ($('#state_code').val().length==0)) {

	 	$('#state_code_span').html("Select State Name");  
		
		if (focus_flag == 0) {
			
			$('#state_code').focus();
			focus_flag = 1;
		}
			 		   	
    	return false;
 	}
 	else if ((countryCode=="IN") && ($('#state_code').val().length!=0)) {

	 	$('#state_code_span').html("");  
	 		   	
    	return true;	 	
	}
 	else if ((countryCode != "IN") && ((countryCode != '') || (countryCode !='x'))) {

	 	if($('#city').val().length == 0) {
		 	
		 	$('#city_span').html("Enter City"); 
		
			if (focus_flag == 0) {
				
				$('#city').focus();
				focus_flag = 1;
			}
				 	  	
	    	return false;
    	}
    	else if (!validate_name.test($('#city').val()) ) {
			
	    	$('#city_span').html("Enter Valid City");
	    	
			if (focus_flag == 0) {
				
				$('#city').focus();
				focus_flag = 1;
			}
		
			return false;
		}
		else {
			
	    	$('#city_span').html("");

			return true;			
		}
 	}
 	else {

	 	return true;
	}	
}

$(document).ready(function(){
	
	$( "#city" ).keypress(function(){
		
		var country = $('#country').live().val();
		
		//alert($('#ajx_url').val());

		if(($('#ajx_url').val().length > 0)) {
			
			var ajx_url = $('#ajx_url').val();
			
			$( "#city" ).autocomplete({
				
				source: ajx_url+"?action=get_city&country="+country,
				
				minLength: 1,
				
				select: function (event, ui) {
					
					var city_state_split = ui.item.value.split('(');
					
					$( "#city").val($.trim(city_state_split[0]));
							
					return false;
				}							
			});	
		}
	});
});



//======= Post Requirement in classified Pages  START ===========
/*
$('#subject').blur(function(){validate_name('subject')});
$('#user_name').blur(function(){validate_email('user_name')});
$('#req_detail').blur(function(){validate_description('req_detail', '2000')});
$('#state_code1').blur(function(){validate_requirement_state_city()});
$('#foreign_city').blur(function(){validate_requirement_state_city()});
*/

function validate_post_requirement() {
	
	focus_flag = 0;
	
	if(document.getElementById('check_user').value=='false' || document.getElementById('check_user').value=='') {
		
		if(validate_name('subject') & validate_description('req_detail','2000') & validate_email('user_name') & validate_name('your_name') & validate_country('country') & validate_mobile('mobile_phone') & validate_requirement_state_city() ) {

			return true;
		}
		else {
	
			return false;
		}	
	}
	else {
		
		if(validate_name('subject') & validate_description('req_detail','2000')) {

			return true;
		}
		else {
	
			return false;
		}	
	}
		
	
	
}


function validate_requirement_state_city() {
	
	var countryCode = $('#country').val();
	
	if(countryCode.indexOf('^')>=0) {
		
		var country_code_arr = countryCode.split('^');
		
		countryCode = country_code_arr['0'];
	}	

	var validate_name =/^([a-zA-Z. ])+$/;
	
 	if ((countryCode=="IN") && ($('#state_code1').val().length==0)) {

	 	$('#state_code1_span').html("Please Select State Name");  
		
		if (focus_flag == 0) {
			
			$('#state_code1').focus();
			focus_flag = 1;
		}
			 		   	
    	return false;
 	}
 	else if ((countryCode=="IN") && ($('#state_code1').val().length>0)) {

	 	$('#state_code1_span').html("");  
	 		   	
    	return true;	 	
	}
 	else if ((countryCode != "IN") && ((countryCode != '') || (countryCode !='x'))) {

	 	if($('#foreign_city').val().length == 0) {
		 	
		 	$('#foreign_city_span').html("Please Enter City"); 
		
			if (focus_flag == 0) {
				
				$('#foreign_city').focus();
				focus_flag = 1;
			}
				 	  	
	    	return false;
    	}
    	else if (!validate_name.test($('#foreign_city').val()) ) {
			
	    	$('#foreign_city_span').html("Please Enter Valid City");
	    	
			if (focus_flag == 0) {
				
				$('#foreign_city').focus();
				focus_flag = 1;
			}
		
			return false;
		}
		else {
			
	    	$('#foreign_city_span').html("");

			return true;			
		}
 	}
 	else {

	 	return true;
	}	
}

//======= Post Requirement in classified Pages  END ===========