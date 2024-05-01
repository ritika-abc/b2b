function get_url_path(){
	if(document.domain=='192.168.1.104') {
		var url = '//192.168.1.104';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		var url = '//www.betaei.in';
	}
	else {
		var url = '//www.exportersindia.com';
	}
	return url;
}
function primary_business_updated(primary_business){
	
	if(primary_business == 4){
		 
		$("#ul_product").hide();	
		
		$('input[name^="product_desc[]"]').each(function() {
			$(this).val('');
		});
 
	}
	else {
		
		$("#ul_product").show();		 
	} 
}
function get_join_now_city_reg(url, element_id) {

	$(document).ready(function() {
		
		var city_code = '';
		if($('#default_city_code').val()){
			city_code = $('#default_city_code').val();
		}
		
		var default_subcity_code = '';
		if($('#default_subcity_code').val()){
			default_subcity_code = $('#default_subcity_code').val();
		}
		  
		$.ajax({
			type: 'POST',
			url: url,
			dataType: "html",
			data: {action_id: "reg_get_join_now_city", default_city_code: city_code, default_subcity_code: default_subcity_code},
			cache : false,
			success: function(newHTML) {
				//alert(newHTML);
				
				$('#'+element_id).html(newHTML); 
				if(city_code && city_code != 0){
					$('#city_code1').trigger('change');
				}
	
			},
			xhrFields: {
				
		    	withCredentials: true
		  	},
		  	error: function(xhr, status) {
			
				if(xhr.status==404) {
					alert('Page Not Found.');
				}
				else if(xhr.status==401) {
					
					alert('Authorization Required.');
				}
			}
		});
		
	});
}
function get_join_now_subcity_reg(city_code) {
	
	var subcity_code = '';
	if($('#default_subcity_code').val()){
		subcity_code = $('#default_subcity_code').val();
	}
	
	var state_code = $('#state_code').val();
	$.ajax({
		type: 'POST',
		url: get_url_path()+'/ajax.php?upd_state_reg_from=reg_join_now_subcity&reg_city_code='+city_code+'&reg_state_code='+state_code,
		dataType: "html",
		data: { action_id: "reg_get_join_now_city", default_subcity_code: subcity_code},
		cache : false,
		success: function(newHTML) {
			//alert(newHTML);
			
			$('#sel_subcity_div').html(newHTML); 
			$('#default_city_code').val('0');
			$('#default_subcity_code').val('0');

		},
		xhrFields: {
			
			withCredentials: true
		},
		error: function(xhr, status) {
		
			if(xhr.status==404) {
				alert('Page Not Found.');
			}
			else if(xhr.status==401) {
				
				alert('Authorization Required.');
			}
		}
	});
}
function validate_mobile_first_digit($mobile, $isd_code){

	$error = '';
	
	if($isd_code == 91 && $mobile[0] < 6){ // checking first digit
	 
		//$error = 'Invailid Mobile Number. Mobile number should not start with digits (4,3,2,1,0)';
		$error = 'Invalid Mobile Number.'; // Mahesh Gupta
	}
	
	return $error;
}
function stopEnterKey(evt) {
	
  var evt = (evt) ? evt : ((event) ? event : null);
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);  
  
  //alert(evt.keyCode);  
   
	if ((evt.keyCode == 13))  {
		
		(evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
		return false;
	}
}
function upload_main_image_add(event, id) {
	
	$('.comm_join_img_err').html('');
		
	files = event.target.files;
	 
	var main_server_baseurl = $("#main_server_baseurl").val();
	var dynamic_basepath = $("#dynamic_basepath").val();
 
	var temp_slno = $("#add_img_"+id).val();
	var product_slno = $("#product_slno").val();
	//var sess_id = $("#sess_id").val();
	
	var loader_image = main_server_baseurl+'/images/icon_loader.gif';
	var loader_image_backup = '';
	 
	var form_data = new FormData();
	
	form_data.append("product_main_image", files[0]);	
	
	form_data.append("temp_slno", temp_slno);
	form_data.append("product_slno", product_slno);
	
	form_data.append("action", "upload_prod_main_image");
	 
	$.ajax({ //ajax form submit
		 
		//url : main_server_baseurl + '/upload_product_main_image.php?sess_id='+sess_id+'&get_image_size=Y&page_name=join_now',
		url : main_server_baseurl + '/upload_product_main_image.php?get_image_size=Y&page_name=join_now',
		type: 'POST',
		data : form_data,	
		contentType: false,
		xhrFields: {withCredentials: true},
		cache: false,
		processData:false,
		beforeSend: function(){
			loader_image_backup = $("#upload_file_"+id).attr('src');
			$("#upload_file_"+id).attr('src',loader_image);
		},
		success: function(response) {
			
			if(response){
				
				var response_res = response.trim().split('|');
				var img_file_name = response_res[1];
				
				if(response_res[0] && response_res[0]==="error") {        
					
					if(response_res[1]){
						
						$('.up_img_err_'+id).html(response_res[1]);
					}
					else {
						$('.up_img_err_'+id).html('');
					}
					$("#upload_file_"+id).attr('src',loader_image_backup);
				}
				else {
					
					var ext_1 = img_file_name.substr(img_file_name.length-4,img_file_name.length);
					
					ext_1 = ext_1.toLowerCase();  
					
					if(ext_1=='jpeg') {
						ext = ext_1;
					}
					else {
						var ext= img_file_name.substr(img_file_name.length-3,img_file_name.length);
					}
					
					if(ext=="jpg" || ext=="gif" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="JPEG" || ext=="GIF" || ext=="PNG"){
						
						var mem_id=0;
						var img_fl_arr = img_file_name.split('_');
						if(img_fl_arr[1]){
							
							mem_id = img_fl_arr[1].slice(2);
							mem_id = mem_id.slice(0,-6);
						}
						var upload_fl_path = dynamic_basepath+'/temp-product_images/bc-full/'+mem_id+'/'+img_file_name;
						$("#upload_file_"+id).attr('src', upload_fl_path);
						var img_arr = response_res[2].split("^^");
						$('#main_image_width_height_'+id).val(img_arr[0] + '^' + img_arr[1]);
						
						if(response_res[3]){
							$('#add_img_'+id).val(response_res[3]);
							
						}
					}        
				}	 
			}
		
		}						
	});		 
}

function join_now_form_submit_4(form_id, step) {
	
	var img_src = "//static.exportersindia.com/myfolder-images/ajax-loader.gif";
	var img_tag = "<img src='"+img_src+"' height='18'>";
    
    frm = document.getElementById(form_id);
    
    var eduInput = document.getElementsByName('gst_number[]');
    
	var gst_apply_status=$('input[name=gst_apply_status]:checked').val();
	
	if(!gst_apply_status){
		//$("input[name=gst_apply_status").attr('disabled',true);
		for (i=0; i<eduInput.length; i++)
		{
		 if (trimx(eduInput[i].value) == "")
			{
				('#error-list-step-4').html('All the fields are required!');	 
		 		return false;
			}
		}
	}
	
	$('#join-now-ajax-loader-step-4').html(img_tag);
   
    $.ajax({
		type: 'POST',
		url: $('#main_server_baseurl').val()+'/join-now-final-step.php',
		dataType: "html",
		cache : false,
		data : $("#"+form_id).serialize(),
		success: function(msg) {
			
			$('#join-now-ajax-loader-step-4').html('');
			var split_msg = msg.split("~~");
			var data_msg = split_msg[2];
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			
			if(sucess_status=='Y' && insert_member_status=='Y') {
				
				$('#error-list-step-4').html("");
				
				if(split_msg[5]){
					
					window.location.href= get_url_path()+'/join-now-thanks.php';
					
				}
				
			}
			else {
				
				if(data_msg.length>0) {
					
					var error_msg = data_msg.replace(/(<br>)|(<br \/>)|(<br\/>)|(<li>)|(<\/li>)/g, "\n");
					$('#error-list-step-4').html(data_msg);
				}
			}
			
		},
		xhrFields: {			
			withCredentials: true
		},
		crossDomain: true
	});
}
function join_now_form_submit_3(form_id, step) {
	
	var img_src = "//static.exportersindia.com/myfolder-images/ajax-loader.gif";
	var img_tag = "<img src='"+img_src+"' height='18'>";
    
    frm = document.getElementById(form_id);
    
     jQuery('.prod_serv').removeClass('invalid');
     jQuery('span.spn_class').text('');
    
    var prd_service_flag = false;
	var prd_service_name_flag = true;
	var flag_id =0;
	var valid_product_name = /^([A-Za-z0-9_\-\%\&\,\`\+\(\)\s])+$/;

	$('.prod_serv').each(function(){
		
		var prod_serv_val = $(this).val();
		var prod_serv_id = $(this).attr('id');
		var img_val = 0;
		var id_arr = prod_serv_id.split('prod_serv_');
		if(id_arr[1]){
			img_val = $('#add_img_'+id_arr[1]).val();
			flag_id = id_arr[1];
		}
		
		prod_serv_val = $.trim(prod_serv_val);
		
		if(prod_serv_val != '') {	
					
			prd_service_flag = true;
			
			if(prod_serv_val.length < 3) {
				
				//alert('Product or Service Name length Should be Greater Than 2');
				
				$('#err_'+prod_serv_id).html('Enter Keyword(s) at least three characters');
				$('#'+prod_serv_id).addClass('invalid');
				$('#'+prod_serv_id).focus();
				prd_service_name_flag = false;
				
				return false;
			}
						
			if(valid_product_name.test(prod_serv_val) == false) {
				
				//alert("Product or Service Name can contain only alphabets (a-z A-Z), numbers (0-9), underscore (_), hiphen (-), spaces ( ), percent (%), and (&), comma (,), (`) and (+).");
				$('#err_'+prod_serv_id).html('Product or Service Name can contain only alphabets (a-z A-Z), numbers (0-9), underscore (_), hiphen (-), spaces ( ), percent (%), and (&), comma (,), (`) and (+).');
				$('#'+prod_serv_id).addClass('invalid');
				$('#'+prod_serv_id).focus();
				prd_service_name_flag = false;
								
				return false;
			}		
		}
	
		if(img_val > 6 && prod_serv_val.length == 0){
			
			$('#'+prod_serv_id).addClass('invalid');
			$('#'+prod_serv_id).focus();
			prd_service_name_flag = false;
							
			return false;
		}
		
	});
	
	if(prd_service_name_flag == false) {
		
		$('#prod_serv_'+flag_id).addClass('invalid');
		$('#prod_serv_'+flag_id).focus();
		return false;
	}
	
	if(prd_service_flag == false) {
		
		$('#prod_serv_0').addClass('invalid');
		$('#prod_serv_0').focus();
		//alert('Please Enter Atleast One Product or Service You Offer.');
		return false;
	}
 	
	 $('#join-now-ajax-loader-step-3').html(img_tag);
    
    $.ajax({
		type: 'POST',
		url: $('#main_server_baseurl').val()+'/join-now-final-step.php',
		dataType: "html",
		cache : false,
		data : $("#"+form_id).serialize(),
		success: function(msg) {
		
			
			var split_msg = msg.split("~~");
			var data_msg = split_msg[2];
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			var cnty = $('#default_cntry').val();
			
			if(sucess_status=='Y' && insert_member_status=='Y') {
				$('#error-list-step-3').html("");
				
				if(split_msg[5]){
					$('.common-regs-right').html(split_msg[5]);
				}
				$('#reg-step001').hide();
				$('#reg-step002').hide();
				
				if(cnty && cnty != 'IN^91'){
					
					$('#gst-submit-btn').trigger('click');
				}
				else {
					$('#join-now-ajax-loader-step-3').html("");
					$('#reg-step003').hide();
					$('#reg-step004').show();
					$('.regs-heading ul').scrollLeft('260');
					$('html,body').animate({scrollTop:0}, 500);
				}
			}
			else {
				$('#join-now-ajax-loader-step-3').html("");
				if(data_msg.length>0) {
					
					var error_msg = data_msg.replace(/(<br>)|(<br \/>)|(<br\/>)|(<li>)|(<\/li>)/g, "\n");
					$('#error-list-step-3').html(data_msg);
				}
			}
			
		},
		xhrFields: {			
			withCredentials: true
		},
		crossDomain: true
	});
}
function join_now_form_submit_2(form_id, step) {
	
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
	var validate_name =/^([a-zA-Z ])+$/;

	var img_src = "//static.exportersindia.com/myfolder-images/ajax-loader.gif";
	var img_tag = "<img src='"+img_src+"' height='18'>";
    
    frm = document.getElementById(form_id);
    
     jQuery('.regs-class').removeClass('invalid');
     jQuery('span.spn_class').text('');
     
     var validate_comp_name =/^([a-zA-Z0-9.'()\-&/ ])+$/;
     var validate_name_check =/^(['() ])+$/;
		
	if (chktrim(frm.company_comp_name.value).length==0) {
		
		jQuery('#company_comp_name').addClass('invalid');
	    frm.company_comp_name.focus();
	    return false;
    }
 	else if((validate_comp_name.test(chktrim(frm.company_comp_name.value))== false)) {
	
	 	jQuery('#company_comp_name').addClass('invalid');
	 	jQuery('#company_comp_name').parent().find('span.red').text('Please Enter Valid Company Name [Charactors, Numbers, Space, -, &, / and Dot(.)].');
	    frm.company_comp_name.focus();	 	 	
        return false;
	}	
	else if(chktrim(frm.company_comp_name.value).length < 3) {
		
		jQuery('#company_comp_name').parent('li.reg_form').addClass('invalid');
	 	jQuery('#company_comp_name').parent().find('span.red').text('Company Name at least three characters');
	    frm.comp_name.focus();	 	 	
        return false;
	}
	else if(chktrim(frm.company_comp_name.value) && validate_name_check.test(chktrim(frm.company_comp_name.value))){
		
		jQuery('#company_comp_name').parent('li.reg_form').addClass('invalid');
	 	jQuery('#company_comp_name').parent().find('span.red').text('Please Enter Valid Company Name');
	    frm.comp_name.focus();	
	    return false;
	}
    
    if (frm.primary_business.options[frm.primary_business.selectedIndex].value=="") {		
	  
		jQuery('#primary_business').addClass('invalid');
	    frm.primary_business.focus();
	    return false;
	}
	
	if (chktrim(frm.web_address.value).length !=0) {
		
		var web_add_url = frm.web_address.value;
		var res = web_add_url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
	    if(res == null){
			jQuery('#web_address').addClass('invalid');
			jQuery('#web_address').parent().find('span.red').text('Please Enter Valid url.');
			frm.web_address.focus();
			return false;
	    }
    }
	
	if (chktrim(frm.street_address.value).length ==0) {
	    
        jQuery('#street_address').addClass('invalid');
        frm.street_address.focus();
        return false;
    }
    
    //To check .net .com etc words in address field
    if(!isValid(frm.street_address)) {
	    
    	 jQuery('#street_address').addClass('invalid');
        frm.street_address.focus();
        return false;
 	}
 	
 	 if (frm.default_cntry.value!="IN^91") {
	     
	 	if(chktrim(frm.city.value).length==0) {
		 	
	    	//alert("Please Enter City");    	
	    	jQuery('#city').addClass('invalid');	
	    	frm.city.focus();    	
	    	return false;
    	}
    	
		if (!validate_name.test(frm.city.value) ) {
			
			//alert("Please Enter Valid City.");
			jQuery('#city').addClass('invalid');	
			jQuery('#city_err').html("Please Enter Valid City.");
			frm.city.focus();
			return false;
		}
 	}
 	else {
	 	
 		if ((frm.default_cntry.value=="IN^91") && (frm.state_code.options[frm.state_code.selectedIndex].value=="")) {
        
	    	jQuery('#state_code').addClass('invalid');	
	    	frm.state_code.focus();    	
	    	return false;
	 	}
	 	
		var territory_state = $("input[name=territory_state]").val();
		if (territory_state==undefined && frm.default_cntry.value=="IN^91") {
		    
		 	if(frm.city_code1.value=='x') {
			 	   
		    	jQuery('#city_code1').addClass('invalid');		
		    	frm.city_code1.focus();    	
		    	return false;
	    	}    	
			
	 	}
		else if (territory_state=='Y' && frm.default_cntry.value=="IN^91") {
			
			if(frm.city_code1.value=='x') {
			 	
		    	//alert("Please Select Sub City");   
		    	jQuery('#city_code1').addClass('invalid');	 	
		    	frm.city_code1.focus();    	
		    	return false;
	    	}
		}
		
		if (frm.city_code1.value=='other_city' && frm.default_cntry.value=="IN^91") {
		     
		 	if(chktrim(frm.city.value).length==0) {
			 	
		    	//alert("Please Enter City");    	
		    	jQuery('#city').addClass('invalid');	 	
		    	frm.city.focus();    	
		    	return false;
	    	}
	    	else{
				if (!validate_name.test(frm.city.value) ) {
					
					//alert("Please Enter Valid City.");
					jQuery('#city').addClass('invalid');	
					jQuery('#city_err').html("Please Enter Valid City.");
					frm.city.focus();
					return false;
				}
			}
	 	}
		
		if((typeof territory_state) == 'undefined' && frm.default_cntry.value=="IN^91") {
		    
			if((typeof frm.subcity_code) === 'undefined'){
				
				 var subcity_code = '';
				 var valu = 'N';
			}
			else{
				var subcity_code = frm.subcity_code.value; 
				var valu = 'Y';
			}
			
			if(subcity_code == '' && valu == 'Y'){
				
				if(chktrim(subcity_code).length==0) {
					
					//alert("Please Select Sub City");    
					jQuery('#subcity_code').addClass('invalid');	
					frm.subcity_code.focus();    	
					return false;
				}
			}
			else if(valu == 'Y' && subcity_code == 'other_subcity'){
				
				if(chktrim(frm.sub_city.value).length==0) {
					
					//alert("Please Enter Sub City");    	
					jQuery('#sub_city').addClass('invalid');	
					frm.sub_city.focus();    	
					return false;
				}
				else{
					if (!validate_name.test(frm.sub_city.value) ) {
						
						//alert("Please Enter Valid Sub City.");
						jQuery('#sub_city').addClass('invalid');	
						jQuery('#subcity_err').html("Please Enter Valid Sub City.");
						frm.sub_city.focus();
						return false;
					}
				}
			}
			else if(frm.city_code1.value != 'other_city' && valu == 'N'){
				
				if(chktrim(frm.sub_city.value).length==0) {
					
					//alert("Please Enter Sub City");    	
					jQuery('#sub_city').addClass('invalid');	
					jQuery('#subcity_err').html("Please Enter Sub City.");
					frm.sub_city.focus();    	
					return false;
				}
				else {
					
					if(!validate_name.test(frm.sub_city.value)) {				
						
						//alert("Please Enter Valid Sub City.");
						jQuery('#sub_city').addClass('invalid');	
						jQuery('#subcity_err').html("Please Enter Valid Sub City");
						frm.sub_city.focus();
						return false;
					}
				}
			}
	 	}
 	}
 	
	 $('#join-now-ajax-loader-step-2').html(img_tag); // 
    
    $.ajax({
		type: 'POST',
		url: $('#main_server_baseurl').val()+'/join-now-final-step.php',
		dataType: "html",
		cache : false,
		data : $("#"+form_id).serialize(),
		success: function(msg) {
			
			$('#join-now-ajax-loader-step-2').html(""); // 
			var split_msg = msg.split("~~");
			var data_msg = split_msg[2];
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			
			if(sucess_status=='Y' && insert_member_status=='Y') {
				
				$('#error-list-step-2').html("");
				
				if(split_msg[5]){
					$('.common-regs-right').html(split_msg[5]);
				}
				
				$('#reg-step001').hide();
				$('#reg-step002').hide();
				$('#reg-step003').show();
				$('.regs-heading ul').scrollLeft('190');
				$('html,body').animate({scrollTop:0}, 500);
				$('#prod_serv_0').focus();
			}
			else {
				
				if(data_msg.length>0) {
					
					var error_msg = data_msg.replace(/(<br>)|(<br \/>)|(<br\/>)|(<li>)|(<\/li>)/g, "\n");
					$('#error-list-step-2').html(data_msg);
				}
			}
			
		},
		xhrFields: {			
			withCredentials: true
		},
		crossDomain: true
	});
 	
}

//validation Of Join Now Form
function join_now_form_submit(form_id, step) {
	
	var action_url = get_url_path()+"/register-business-online";

	var img_src = "//static.exportersindia.com/myfolder-images/ajax-loader.gif";
	var img_tag = "<img src='"+img_src+"' height='18'>";
    
    frm = document.getElementById(form_id);
    
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
   	
    var validate_name =/^([a-zA-Z. ])+$/;
    //var validate_password =/^([a-zA-Z0-9])+$/;
    var validate_password =/^([a-zA-Z0-9!#$%&()*+,-./:;<=>?@[\]^_{|}~])+$/;
    
     jQuery('li.li_class').removeClass('invalid');
     jQuery('span.spn_class').text('');
     
     if(step==1) {
     
	    if (chktrim(frm.your_name.value).length==0) {
		  
		    jQuery('#your_name').parent('li.reg_form').addClass('invalid');
		    frm.your_name.focus();
	        return false;
	    }
	   
	    //To check .net .com etc words in name field
	    if(!isValid(frm.your_name)) {
		    jQuery('#your_name').parent('li.reg_form').addClass('invalid');
		    jQuery('#your_name').parent().find('span.red').text('Please Enter Valid Name.');
		    frm.your_name.focus();
	    	return false;
	 	}
	 	else if((validate_name.test(frm.your_name.value)==false)) {
			jQuery('#your_name').parent('li.reg_form').addClass('invalid');
		 	jQuery('#your_name').parent().find('span.red').text('Please Enter Valid Name.');
		    frm.your_name.focus();
	        return false;
		}
		
		var validate_comp_name =/^([a-zA-Z0-9.'()\-&/ ])+$/;
		var validate_name_check =/^(['() ])+$/;
		if (chktrim(frm.comp_name.value).length==0) {
			
			jQuery('#comp_name').parent('li.reg_form').addClass('invalid');
		    frm.comp_name.focus();
		    return false;
	    }
	 	else if((validate_comp_name.test(chktrim(frm.comp_name.value))== false)) {
		
		 	jQuery('#comp_name').parent('li.reg_form').addClass('invalid');
		 	jQuery('#comp_name').parent().find('span.red').text('Please Enter Valid Company Name [Charactors, Numbers, Space, -, &, / and Dot(.)].');
		    frm.comp_name.focus();	 	 	
	        return false;
		}	
		else if(chktrim(frm.comp_name.value).length < 3) {
			
			jQuery('#comp_name').parent('li.reg_form').addClass('invalid');
		 	jQuery('#comp_name').parent().find('span.red').text('Company Name at least three characters');
		    frm.comp_name.focus();	 	 	
	        return false;
		}
		else if(chktrim(frm.comp_name.value) && validate_name_check.test(chktrim(frm.comp_name.value))){
			
			jQuery('#comp_name').parent('li.reg_form').addClass('invalid');
		 	jQuery('#comp_name').parent().find('span.red').text('Please Enter Valid Company Name');
		    frm.comp_name.focus();	
		    return false;
		}
	    
		var allCountries = [ 
		[ "Afghanistan", "af", "93" ],
		[ "Albania", "al", "335" ],
		[ "Algeria", "dz", "213" ],
		[ "American Samoa", "as", "684" ],
		[ "Andorra", "ad", "376" ],
		[ "Angola", "ao", "244" ],
		[ "Anguilla", "ai", "264" ],
		[ "Antarctica", "aq", "672" ],
		[ "Antigua and Barbuda", "ag", "268" ],
		[ "Argentina", "ar", "54" ],
		[ "Armenia", "am", "374" ],
		[ "Aruba", "aw", "297" ],
		[ "Australia", "au", "61" ],
		[ "Austria", "at", "43" ],
		[ "Azerbaijan", "az", "994" ],
		[ "Bahamas", "bs", "242" ],
		[ "Bahrain", "bh", "973" ],
		[ "Bangladesh", "bd", "880" ],
		[ "Barbados", "bb", "246" ],
		[ "Belarus", "by", "375" ],
		[ "Belgium", "be", "32" ],
		[ "Belize", "bz", "501" ],
		[ "Benin", "bj", "229" ],
		[ "Bermuda", "bm", "441" ],
		[ "Bhutan", "bt", "975" ],
		[ "Bolivia", "bo", "591" ],
		[ "Bosnia and Herzegowina", "ba", "387" ],
		[ "Botswana", "bw", "267" ],
		[ "Bouvet Island", "bv", "47" ],
		[ "Brazil", "br", "55" ],
		[ "British Indian Ocean Territory", "io", "246" ],
		[ "Brunei Darussalam", "bn", "673" ],
		[ "Bulgaria", "bg", "359" ],
		[ "Burkina Faso", "bf", "226" ],
		[ "Burundi", "bi", "257" ],
		[ "Cambodia", "kh", "855" ],
		[ "Cameroon", "cm", "237" ],
		[ "Canada", "ca", "1" ],
		[ "Cape Verde", "cv", "238" ],
		[ "Cayman Islands", "ky", "345" ],
		[ "Central African Republic", "cf", "236" ],
		[ "Chad", "td", "235" ],
		[ "Chile", "cl", "56" ],
		[ "China", "cn", "86" ],
		[ "Christmas Island", "cx", "61" ],
		[ "Cocos (Keeling) Islands", "cc", "61" ],
		[ "Colombia", "co", "57" ],
		[ "Comoros", "km", "269" ],
		[ "Congo", "cg", "242" ],
		[ "Cook Islands", "ck", "682" ],
		[ "Costa Rica", "cr", "506" ],
		[ "Cote D'Ivoire", "ci", "225" ],
		[ "Croatia", "hr", "385" ],
		[ "Cuba", "cu", "53" ],
		[ "Cyprus", "cy", "357" ],
		[ "Czech Republic", "cz", "420" ],
		[ "Denmark", "dk", "45" ],
		[ "Djibouti", "dj", "253" ],
		[ "Dominica", "dm", "767" ],
		[ "Dominican Republic", "do", "809" ],
		[ "East Timor", "tp", "670" ],
		[ "Ecuador", "ec", "593" ],
		[ "Egypt", "eg", "20" ],
		[ "El Salvador", "sv", "503" ],
		[ "Equatorial Guinea", "gq", "240" ],
		[ "Eritrea", "er", "291" ],
		[ "Estonia", "ee", "372" ],
		[ "Ethiopia", "et", "251" ],
		[ "Falkland Islands (Malvinas)", "fk", "500" ],
		[ "Faroe Islands", "fo", "298" ],
		[ "Fiji", "fj", "679" ],
		[ "Finland", "fi", "358" ],
		[ "France", "fr", "33" ],
		[ "France, Metropolitan", "fx", "590" ],
		[ "French Guiana", "gf", "594" ],
		[ "French Polynesia", "pf", "689" ],
		[ "French Southern Territories", "tf", "590" ],
		[ "Gabon", "ga", "241" ],
		[ "Gambia", "gm", "220" ],
		[ "Georgia", "ge", "995" ],
		[ "Germany", "de", "49" ],
		[ "Ghana", "gh", "233" ],
		[ "Gibraltar", "gi", "350" ],
		[ "Greece", "gr", "30" ],
		[ "Greenland", "gl", "299" ],
		[ "Grenada", "gd", "809" ],
		[ "Guadeloupe", "gp", "590" ],
		[ "Guam", "gu", "1" ],
		[ "Guatemala", "gt", "502" ],
		[ "Guinea", "gn", "224" ],
		[ "Guinea-bissau", "gw", "245" ],
		[ "Guyana", "gy", "592" ],
		[ "Haiti", "ht", "509" ],
		[ "Heard and Mc Donald Islands", "hm", "61" ],
		[ "Honduras", "hn", "504" ],
		[ "Hong Kong", "hk", "852" ],
		[ "Hungary", "hu", "36" ],
		[ "Iceland", "is", "354" ],
		[ "India", "in", "91" ],
		[ "Indonesia", "id", "62" ],
		[ "Iran (Islamic Republic of)", "ir", "98" ],
		[ "Iraq", "iq", "964" ],
		[ "Ireland", "ie", "353" ],
		[ "Israel", "il", "972" ],
		[ "Italy", "it", "39" ],
		[ "Jamaica", "jm", "876" ],
		[ "Japan", "jp", "81" ],
		[ "Jordan", "jo", "962" ],
		[ "Kazakhstan", "kz", "7" ],
		[ "Kenya", "ke", "254" ],
		[ "Kiribati", "ki", "686" ],
		[ "Korea, Democratic People's Republic of", "kp", "850" ],
		[ "Korea, Republic of", "kr", "82" ],
		[ "Kuwait", "kw", "965" ],
		[ "Kyrgyzstan", "kg", "7" ],
		[ "Lao People's Democratic Republic", "la", "856" ],
		[ "Latvia", "lv", "371" ],
		[ "Lebanon", "lb", "961" ],
		[ "Lesotho", "ls", "266" ],
		[ "Liberia", "lr", "231" ],
		[ "Libya", "ly", "218" ],
		[ "Liechtenstein", "li", "423" ],
		[ "Lithuania", "lt", "370" ],
		[ "Luxembourg", "lu", "352" ],
		[ "Macau", "mo", "853" ],
		[ "Macedonia, The Former Yugoslav Republic of", "mk", "389" ],
		[ "Madagascar", "mg", "261" ],
		[ "Malawi", "mw", "265" ],
		[ "Malaysia", "my", "60" ],
		[ "Maldives", "mv", "960" ],
		[ "Mali", "ml", "223" ],
		[ "Malta", "mt", "356" ],
		[ "Marshall Islands", "mh", "692" ],
		[ "Martinique", "mq", "596" ],
		[ "Mauritania", "mr", "222" ],
		[ "Mauritius", "mu", "230" ],
		[ "Mayotte", "yt", "269" ],
		[ "Mexico", "mx", "52" ],
		[ "Micronesia, Federated States of", "fm", "691" ],
		[ "Moldova, Republic of", "md", "373" ],
		[ "Monaco", "mc", "377" ],
		[ "Mongolia", "mn", "976" ],
		[ "Montenegro", "me", "382" ],
		[ "Montserrat", "ms", "664" ],
		[ "Morocco", "ma", "212" ],
		[ "Mozambique", "mz", "258" ],
		[ "Myanmar", "mm", "95" ],
		[ "Namibia", "na", "264" ],
		[ "Nauru", "nr", "674" ],
		[ "Nepal", "np", "977" ],
		[ "Netherlands", "nl", "31" ],
		[ "Netherlands Antilles", "an", "599" ],
		[ "New Caledonia", "nc", "687" ],
		[ "New Zealand", "nz", "64" ],
		[ "Nicaragua", "ni", "505" ],
		[ "Niger", "ne", "227" ],
		[ "Nigeria", "ng", "234" ],
		[ "Niue", "nu", "683" ],
		[ "Norfolk Island", "nf", "672" ],
		[ "Northern Mariana Islands", "mp", "670" ],
		[ "Norway", "no", "47" ],
		[ "Oman", "om", "968" ],
		[ "Pakistan", "pk", "92" ],
		[ "Palau", "pw", "680" ],
		[ "Panama", "pa", "507" ],
		[ "Papua New Guinea", "pg", "675" ],
		[ "Paraguay", "py", "595" ],
		[ "Peru", "pe", "51" ],
		[ "Philippines", "ph", "63" ],
		[ "Pitcairn", "pn", "872" ],
		[ "Poland", "pl", "48" ],
		[ "Portugal", "pt", "351" ],
		[ "Puerto Rico", "pr", "787" ],
		[ "Qatar", "qa", "974" ],
		[ "Reunion", "re", "262" ],
		[ "Romania", "ro", "40" ],
		[ "Russian Federation", "ru", "7" ],
		[ "Rwanda", "rw", "250" ],
		[ "Saint Kitts and Nevis", "kn", "869" ],
		[ "Saint Lucia", "lc", "758" ],
		[ "Saint Vincent and the Grenadines", "vc", "784" ],
		[ "Samoa", "ws", "685" ],
		[ "San Marino", "sm", "378" ],
		[ "Sao Tome and Principe", "st", "239" ],
		[ "Saudi Arabia", "sa", "966" ],
		[ "Senegal", "sn", "221" ],
		[ "Serbia", "rs", "381" ],
		[ "Seychelles", "sc", "248" ],
		[ "Sierra Leone", "sl", "232" ],
		[ "Singapore", "sg", "65" ],
		[ "Slovakia (Slovak Republic)", "sk", "421" ],
		[ "Slovenia", "si", "386" ],
		[ "Solomon Islands", "sb", "677" ],
		[ "Somalia", "so", "252" ],
		[ "South Africa", "za", "27" ],
		[ "South Georgia and the South Sandwich Islands", "gs", "44" ],
		[ "South Sudan", "ss", "211" ],
		[ "Spain", "es", "34" ],
		[ "Sri Lanka", "lk", "94" ],
		[ "St. Helena", "sh", "290" ],
		[ "St. Pierre and Miquelon", "pm", "508" ],
		[ "Sudan", "sd", "249" ],
		[ "Suriname", "sr", "597" ],
		[ "Svalbard and Jan Mayen Islands", "sj", "47" ],
		[ "Swaziland", "sz", "268" ],
		[ "Sweden", "se", "46" ],
		[ "Switzerland", "ch", "41" ],
		[ "Syrian Arab Republic", "sy", "963" ],
		[ "Taiwan", "tw", "886" ],
		[ "Tajikistan", "tj", "992" ],
		[ "Tanzania, United Republic of", "tz", "255" ],
		[ "Thailand", "th", "66" ],
		[ "Togo", "tg", "228" ],
		[ "Tokelau", "tk", "64" ],
		[ "Tonga", "to", "676" ],
		[ "Trinidad and Tobago", "tt", "868" ],
		[ "Tunisia", "tn", "216" ],
		[ "Turkey", "tr", "90" ],
		[ "Turkmenistan", "tm", "993" ],
		[ "Turks and Caicos Islands", "tc", "649" ],
		[ "Tuvalu", "tv", "688" ],
		[ "Uganda", "ug", "256" ],
		[ "Ukraine", "ua", "380" ],
		[ "United Arab Emirates", "ae", "971" ],
		[ "United Kingdom", "uk", "44" ],
		[ "United States", "us", "1" ],
		[ "United States Minor Outlying Islands", "um", "1" ],
		[ "Uruguay", "uy", "598" ],
		[ "Uzbekistan", "uz", "998" ],
		[ "Vanuatu", "vu", "678" ],
		[ "Vatican City State (Holy See)", "va", "39" ],
		[ "Venezuela", "ve", "58" ],
		[ "Viet Nam", "vn", "84" ],
		[ "Virgin Islands (British)", "vg", "1" ],
		[ "Virgin Islands (U.S.)", "vi", "1" ],
		[ "Wallis and Futuna Islands", "wf", "681" ],
		[ "Western Sahara", "eh", "212" ],
		[ "Yemen", "ye", "967" ],
		[ "Yugoslavia", "yu", "381" ],
		[ "Zaire", "zr", "243" ],
		[ "Zambia", "zm", "260" ],
		[ "Zimbabwe", "zw", "263" ] ];
		
		var cont_id = $('#join-now-frm-step1').find('.selected-contID').val();
		
		var mem_isd_code = cont_id.replace("+", "");
		var mem_country_code = "";
		
		 var fetch_country_code = $('#join-now-frm-step1 .country-list').find('.active').attr('data-country-code');
	     if(fetch_country_code){
			mem_country_code = fetch_country_code.toUpperCase();
	     }
	     else {
		     
	     	for (var i = 0; i < allCountries.length; i++) {
		        var c = allCountries[i];
		      	if(c[2]==mem_isd_code) {
			      	mem_country_code = c[1].toUpperCase();
			      	break;
		      	}
		    }
		    
	     }
	    
	    var selected_country_code = mem_country_code+'^'+mem_isd_code;
	    $('#join-now-frm-step1 #country').val(selected_country_code);
	    
	    $('#default_cntry').val(selected_country_code);
	  
		if(chktrim(frm.mobile_phone.value)=="") {
		     
			jQuery('#mobile_phone').parents('li.reg_form').addClass('invalid');
			frm.mobile_phone.focus();
		 	return false;
		}
		
		if (chktrim(frm.mobile_phone.value)!="") {
					   
		    if(isNaN(frm.mobile_phone.value)== true) {	
			    
			    jQuery('#mobile_phone').parents('li.reg_form').addClass('invalid');
				jQuery('#mobile_phone').parents('.phonemsg').find('span.red').text('Please enter numeric values.');
				frm.mobile_phone.focus();
				return false;
			}
		}
		
		if(chktrim(frm.mobile_phone.value)!="") {
			
			if ((frm.mobile_phone.value.length<10 || frm.mobile_phone.value.length>10) && frm.country.value=="IN^91") {
			   
				jQuery('#mobile_phone').parents('li.reg_form').addClass('invalid');
				jQuery('#mobile_phone').parents('.phonemsg').find('span.red').text('Mobile Number Should be 10 Digits.');
				frm.mobile_phone.focus();
				return false;
		   }
		   
		   if ((frm.mobile_phone.value.length<3) && frm.country.value!="IN^91") {
			   
			   jQuery('#mobile_phone').parents('li.reg_form').addClass('invalid');
			   jQuery('#mobile_phone').parents('.phonemsg').find('span.red').text('Mobile Number Should be at least 3 Digits.');
			   frm.mobile_phone.focus();
			   return false;
		   }
		   
			var mobile_submit_status = document.getElementById('submit_member_mobile').value;
			
			if(mobile_submit_status=='N' && selected_country_code && selected_country_code == 'IN^91') {
				
				jQuery('#mobile_phone').parents('li.reg_form').addClass('invalid');
				jQuery('#mobile_phone').parents('.phonemsg').find('span.red').html('<b class="bn dif">Your Mobile No. is already Registered with us.</b> <span>Please <a class="hig track_scr_join"  href="javascript:void(0);" data-uname="'+frm.mobile_phone.value+'" data-title="Sign-in" style="color: #03c;font-weight:bold;">Sign-in</a></span>');
				frm.mobile_phone.focus();
				return false;
			}
		}
		
		if (chktrim(frm.username.value).length==0) {
		    
			jQuery('#username').parent('li.reg_form').addClass('invalid');
		    frm.username.focus();
			return false;
		}
	    else if(reg.test(frm.username.value) == false) {
	
		    jQuery('#username').parent('li.reg_form').addClass('invalid');
		    jQuery('#username').parent().find('span.red').text('Invalid Email Address.');
			frm.username.focus();
			return false;
		}
		else if (frm.username.value.indexOf('@') != frm.username.value.lastIndexOf('@')) {
			
			jQuery('#username').parent('li.reg_form').addClass('invalid');
			jQuery('#username').parent().find('span.red').text('Please Specify One E-mail address only.');
		    frm.username.focus();
		    return false;
		}
		
		//To check 'india mart,alibaba etc. words
		if(isProhibited(frm.username)) {
			
			jQuery('#username').parent('li.reg_form').addClass('invalid');
	   		return false;
		}
		
		var email_status = frm.email_duplicate_status.value.replace(/\s/g,"");
			
		if (email_status=='N' && selected_country_code && selected_country_code != 'IN^91') {
			
			jQuery('#username').parent('li.reg_form').addClass('invalid');
			jQuery('#username').parent().find('span.red').html('<b class="bn dif">This email id already exists.</b> <span>Please <a class="hig track_scr_join"  href="javascript:void(0);" data-uname="'+frm.username.value+'" data-title="Join Now" style="color: #03c;font-weight:bold;">Sign-in</a></span>');
			frm.username.focus();
	        return false;
		}
		
		if (chktrim(frm.location.value).length==0) {
			jQuery('#location').parent('li.reg_form').addClass('invalid');
		    frm.location.focus();
	        return false;
	    }
	    
	    /*
	    if (chktrim(frm.captcha_code.value).length==0) {
			jQuery('#captcha_code').parent().parent('li.reg_form').addClass('invalid');
		    frm.captcha_code.focus();
	        return false;
	    }
	    */
	   
		$('#join-now-ajax-loader').html(img_tag); // 
    }
    
    $.ajax({
		type: 'POST',
		url: action_url,
		dataType: "html",
		cache : false,
		data : $("#"+form_id).serialize(),
		success: function(msg) {
			
			$('#join-now-ajax-loader').html(""); // 
			var split_msg = msg.split("~~");
			//var nw_id = split_msg[1].replace(/\s/g,"");
			var data_msg = split_msg[2];
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			
			if(sucess_status=='Y' && insert_member_status=='Y') {
				
				$('#error-list-step-1').hide();
				$('#error-list-step-1').html("");
				$('#post_req_popup_ei').html(data_msg);
				
				if(get_url_path() && get_url_path()=='//www.exportersindia.com'){
				
					window.pagesense = window.pagesense || [];
					window.pagesense.push(['trackEvent', 'Create Account']);
				}
				
			}
			else if(sucess_status=='Y' && insert_member_status=='V') {
				
				$('#error-list-step-1').hide();
				$('#error-list-step-1').html("");
				$('#post_req_popup_ei').html(data_msg);
				
				if(get_url_path() && get_url_path()=='//www.exportersindia.com'){
				
					window.pagesense = window.pagesense || [];
					window.pagesense.push(['trackEvent', 'Create Account']);
				}
				
			}
			else {
				
				if(data_msg.length>0 || split_msg[0].length>0) {
					
					var error_msg = data_msg.replace(/(<br>)|(<br \/>)|(<br\/>)|(<li>)|(<\/li>)/g, "\n");
					
					if(split_msg[0]) {
						$('#error-list-step-2').html(split_msg[0]);
					}
					$('#error-list-step-1').show();
					$('#error-list-step-1').html(data_msg);
				}
			}
			
		},
		xhrFields: {			
			withCredentials: true
		},
		crossDomain: true
	});
	event.preventDefault();
}

function isURL(s) {
	
	if (s.indexOf('.') == -1) {
		
		return false;
	}
	
	var splitResult = s.split(".");
	
	var lastChar = splitResult[splitResult.length-1];
	
	var url_valid = /^\s*www\.[a-z\d\-]{1,255}\.[A-Za-z]{2,14}\s*$/;
	
	//var url_valid = /^\s*www\.[a-z\d\-]{1,255}\.com\s*$/;
		
	if(chktrim(lastChar)=='') {
		
		return false;
	}
	else if(chktrim(lastChar).length<2) {
		
		return false;
	}
	else if(url_valid.test(s)==false){
		
		return false;
	}
	else {
		
		return true;
	}
}

function validate_form_field(val,field) {
		
	var validate_password =/^([a-zA-Z0-9!#$%&()*+,-./:;<=>?@[\]^_{|}~])+$/;	
	var validate_name =/^([a-zA-Z. ])+$/;	
	var text = "";
	
	if(field=="country" || field=="ph_number" || field=="mobile_phone" || field=="comp_name" || field=="street_address" || field=="product_desc" || field=="captcha" || field=="state_code" || field=="web_address" || field=="your_name" || field=="pass1" || field=="pass2" || field=="city" || field=="city_code1") {
				
		var f_value = document.getElementById(field).value;
		
		if(field=="country" && f_value=="x") {
			
			f_value="";
		}
	
		if(chktrim(f_value)=="") {
			
			if(field=="country") {
				
				text = "&nbsp;&nbsp;&nbsp;Please Select Country.";
			}
			else if(field=="mobile_phone") {
				
				if(document.getElementById('mobile_phone').value=="Mobile No." || document.getElementById('mobile_phone').value=="") {
					
					text = "&nbsp;&nbsp;&nbsp;Please Enter Mobile Number.";
				}
			}			
			else if(field=="comp_name") {
				
				text = "&nbsp;&nbsp;&nbsp;Please Enter Company Name.";
			}
			else if(field=="street_address") {
				
				text = "&nbsp;&nbsp;&nbsp;Please Enter Company Address.";
			}
			else if(field=="product_desc") {
				
				text = "&nbsp;&nbsp;&nbsp;Enter Your Products/Services Offer [ minimum 10 characters ].";
			}
			/*else if(field=="captcha") {
			
				text = "&nbsp;&nbsp;&nbsp;Please Enter Security Code.";
			}*/
			else if(field=="state_code") {
			
				text = "&nbsp;&nbsp;&nbsp;Please Select State.";
			}
			else if(field=="your_name") {
			
				text = "&nbsp;&nbsp;&nbsp;Please Enter Your Name.";
			}
		}
		if(field=="product_desc") {
			
			if ((!f_value.indexOf('.com')) || (!f_value.indexOf('.net')) || (!f_value.indexOf('.www'))) {
			
				text= "&nbsp;&nbsp;&nbsp;Don't specify your site address in Product Details fields.";
			}
			if (chktrim(f_value).length<10) {
		
				text= "&nbsp;&nbsp;&nbsp;Enter Products/Services Offer [ minimum 10 characters ].";
			}
			if (chktrim(f_value).length>350) {
		
				text= "&nbsp;&nbsp;&nbsp;Enter Product Detail (max. 350 characters).";
			}
		}
		
		/*
		if(field=="captcha" && text=="") {
			
			if(isNaN(f_value)) {
				
				text = "&nbsp;&nbsp;&nbsp;Please Enter Valid Captcha Code.";
			}
			else if(parseInt(f_value)!=parseInt(document.getElementById("captch_value").value)) {
			
				text = "&nbsp;&nbsp;&nbsp;Verification (Captcha Image) Code did not match with displayed code";
			}
		}*/
		
		/*
		if(field=="web_address" && f_value!='') {
			
			if(isURL(f_value)==false) {
				
				text = "&nbsp;&nbsp;&nbsp;Please Enter Valid Website URL";
			}
		}*/
		
		if(field=="your_name" && f_value!='') {
			
			if ((!validate_name.test(document.getElementById('your_name').value))) {
				
				text = "&nbsp;&nbsp;&nbsp;Please Enter Valid Name.";
			}
		}
		if(field=="city" && document.getElementById('country').value!="IN^91") {
			
			if(f_value!='') {
				
				if ((!validate_name.test(document.getElementById('city').value))) {
					
					text = "&nbsp;&nbsp;&nbsp;Please Enter Valid City.";
				}
			}
			else {
				
				text = "&nbsp;&nbsp;&nbsp;Please Enter City.";
			}
		}
		
		if(field=="city" && document.getElementById('country').value=="IN^91") {
			
			if(val.trim()==''){
				
				text = "&nbsp;&nbsp;&nbsp;Please Enter City.";
			}			
			else {
				
				if ((!validate_name.test(val))) {
				
					text = "&nbsp;&nbsp;&nbsp;Please Enter Valid City.";
				}
			}
		}
		
		var territory_state = $("input[name=territory_state]").val();		
		if(territory_state==undefined && field=="city_code1" && val=='x' && document.getElementById('country').value=="IN^91") {
			
			text = "&nbsp;&nbsp;&nbsp;Please Select City.";
		}
		if(territory_state=='Y' && field=="city_code1" && val=='x' && document.getElementById('country').value=="IN^91") {
			
			text = "&nbsp;&nbsp;&nbsp;Please Select Sub City.";
		}
		if(field=="pass1") {
			
			if ((!validate_password.test(f_value)) && chktrim(f_value).length >5) {
			
				text = "&nbsp;&nbsp;&nbsp;Please do not use Special Character in Password. + 333";
			}
		
			if (chktrim(f_value).length<6) {
			
				text = "&nbsp;&nbsp;&nbsp;Password must be 6 characters.";
			}
		}
		if(field=="pass2") {
		
			if(chktrim(document.getElementById('pass1').value)!=chktrim(document.getElementById('pass2').value)) {
			
				text = "&nbsp;&nbsp;&nbsp;Passwords doesn't match.";
			}
			if(f_value=='') {
			
				text = "&nbsp;&nbsp;&nbsp;Please Enter Confirm Passowrd.";
			}
		}
		if(field=="ph_number" && f_value!="Phone No." && f_value!="") {
			
			if ((f_value.length>8 || f_value.length<5) && document.getElementById('country').value=="IN^91") {
			   
			   text = "&nbsp;&nbsp;&nbsp;Phone Number Should be 5 to 8 Digits.";
		    }
		    
		    if ((f_value.length>15 || f_value.length<4) && document.getElementById('country').value!="IN^91") {
			   
			   text = "&nbsp;&nbsp;&nbsp;Phone Number Should be 4 to 15 Digits."
		    }
	    }
	    if(field=="mobile_phone" && f_value!="Mobile No." && f_value!="") {
			
			if ((f_value.length<10) && document.getElementById('country').value=="IN^91") {
			   
			   text = "&nbsp;&nbsp;&nbsp;Mobile Number Should be 10 Digits.";
		    }
		    
		    if ((f_value.length<3) && document.getElementById('country').value!="IN^91") {
			   
			   text = "&nbsp;&nbsp;&nbsp;Mobile Number Should be at least 3 Digits.";
		    }
	    }
	    
	    /*No clearify Why use this 30/08/2013
	    if(field=="skpe_info" && f_value!=""){
		    
		    if(!checkemail(f_value)){			    
				text = "&nbsp;&nbsp;&nbsp;Please Enter valid Skype ID .";
			}
		}*/
	    	    
		if(text=='') {
		
			if(field=="ph_number" || field=="mobile_phone") {
			
				if(field=="ph_number" && f_value!="" && f_value!="Phone No.") {
				
					document.getElementById("im_"+field+"_id").style.display="";
					
					document.getElementById("d_mobile_phone_id").style.display="none";
					document.getElementById("text_mobile_phone_id").className="w150px b gray tar";
				}
				if(field=="mobile_phone" && f_value!="" && f_value!="Mobile No.") {
				
					document.getElementById("im_"+field+"_id").style.display="";
					
					document.getElementById("d_ph_number_id").style.display="none";
					document.getElementById("text_ph_number_id").className="w150px b gray tar";
				}
			}
			else {
				
				document.getElementById("im_"+field+"_id").style.display="";
			}
			
			document.getElementById("d_"+field+"_id").style.display="none";
			document.getElementById("s_"+field+"_id").innerHTML='';
			document.getElementById("text_"+field+"_id").className="w150px b gray tar";			
		}
		else {
				
			document.getElementById("d_"+field+"_id").style.display="";
			document.getElementById("im_"+field+"_id").style.display="none";			
			document.getElementById("s_"+field+"_id").innerHTML=text;
			document.getElementById("text_"+field+"_id").className="w150px b gray tar red";
		}
 	}
}
function setMobileMaxLenValue(val) {
	
	if(val=='IN^91') {
		
		document.getElementById('mobile_phone').setAttribute('maxlength','10');
		
		//document.getElementById('mobile_phone2').setAttribute('maxlength','10');
		
		if(document.getElementById('mobile_phone').value.length>10) {
		
			document.getElementById('mobile_phone').value = document.getElementById('mobile_phone').value.substring(0, 10);
		}
		/*
		if(document.getElementById('mobile_phone2').value.length>10) {
		
			document.getElementById('mobile_phone2').value = document.getElementById('mobile_phone2').value.substring(0, 10);
		}
		*/
	}
	else {
		
		document.getElementById('mobile_phone').setAttribute('maxlength','15');
		
		//document.getElementById('mobile_phone2').setAttribute('maxlength','15');
	}
}



function checkemail(str) {
	var testresults;
	//var str=document.validation.emailcheck.value
	
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (filter.test(str))
	{
		//testresults=true
		return true;
	}
	else{
	//testresults=false
	return false;
	}
	//return (testresults)
}

function isNumberKeywithdash(evt) {

	var charCode = (evt.which) ? evt.which : event.keyCode;
	
	if(charCode == 45){
		return true;
	}
	else if (charCode > 31 && (charCode < 48 || charCode > 57 )) {
		
		return false;
	}
	else {
		
		return true;
	}
}

function closeMyJoinNowForm() {
	
	var reload_page = 'N'
	
	if($('#reload_page').length > 0) {
		reload_page = $('#reload_page').val();
	}

	if(reload_page == 'Y') {
		
		$('#post_req_popup_ei').html('');
		$('#mobile_script_ei').html('');
		var redirect_url=$('#main_server_baseurl').val();
		 window.location.href=redirect_url+'/join-now-final-step.php';
	}
	else {
		
		//$('#post_req_popup_ei').html('');
		//$('#mobile_script_ei').html('');
		location.reload();
	}
	
}
$(function(){
	
	$(document).on('click', '.reg-enq-now-form', function(){
		
		var ck_source = '';
		if($(this).attr('data-title')){
			var ck_source = $(this).attr('data-title');
		}
		 $.ajax({
			type: 'POST',
			url: get_url_path()+"/join_now_call_back_form.php",
			dataType: "html",
			cache : false,
			data: { action_id: "show_enquire_now_form", click_source: ck_source},
			success: function(data_msg) {
				$('#post_req_popup_ei').html(data_msg);
			},
			error: function(xhr, status) {
				
				if(xhr.status==404) {
					alert('Page Not Found.');
				}
				else if(xhr.status==401) {
					
					alert('Authorization Required.');
				}
			},
			xhrFields: {
		
		    	withCredentials: true
		  	}
		});
		
	});
	
	$(document).on('click', '#add_more_ps', function(){
		$(this).hide();
		$('#amProductServices').show();
	});
	
	$(document).on('keyup', '.gst-input', function(){
		
		$(this).val($(this).val().toUpperCase());
		var inputs = document.getElementsByClassName('gst-input'),
		gst_code  = [].map.call(inputs, function( input ) {
			return input.value;
		}).join('');
		$('input[name="gst_apply_status"]').attr('checked', false);
		if(gst_code.length == 15){
			$('#gst-submit-btn').attr("onclick","join_now_form_submit_4('join-now-frm-step4','4');");
			$('#gst-submit-btn').removeClass('gst-submit-cls');
		}
		else {
			$('#gst-submit-btn').removeAttr('onclick');
			$('#gst-submit-btn').addClass('gst-submit-cls');
		}
	});
	
	$(".gst-input").keyup(function () {
	
		if($(this).val().length > 0){
			$(this).next('input.gst-input').focus();
		}
	});
	
	$('.gst-input').keydown(function(e) {
	    if ((e.which == 8 || e.which == 46) && $(this).val() =='') {
	        $(this).prev('input.gst-input').val('').focus();
	    }
	});
	
	$('input[name=gst_apply_status]').click(function() {
		var gst_apply_status=$('input[name=gst_apply_status]:checked').val();
		if(gst_apply_status){
			$('#gst-submit-btn').attr("onclick","join_now_form_submit_4('join-now-frm-step4','4');");
			$('#gst-submit-btn').removeClass('gst-submit-cls');
			$('.gst-input').val('');
		}
	});
	
	$(document).on('keyup', '#location', function() {
			
		var country_val = $('#join-now-frm-step1 #country').val();
		
		//if(country_val && country_val== 'IN^91'){
			
			$(this).autocomplete({
			source: get_url_path()+"/catg_search.php?action=search&type=join_now_sub_city&type2=in_short&term="+$(this).val()+"&cntry="+country_val, // data should be in json format
			minLength: 3,  
			appendTo: "#location_list",
			select: function(event, ui) {
			   
			  $("#location_tree").val(ui.item.city_tree);        
			}
			})
			.data("autocomplete")._renderItem = function(ul, item) {
			let txt = String(item.value).replace(new RegExp(this.term, "gi"),"<b>$&</b>");
			        return $("<li></li>")
			            .data("item.autocomplete", item)
			            .append("<a>" + txt + "</a>")
			            .appendTo(ul);
			};
		//}
	});
	
	$(document).on('keyup', '.prod_serv', function() {
		$( ".prod_serv" ).autocomplete({
		
			source: get_url_path()+"/catg_search.php?action=get_main_serch_kword", // data should be in json format
			
			minLength: 3,
			
			select: function(event, ui) {
	    	}
		});
	});
	
	//desktop start
	/*
	var index = 0, 
	interval = setInterval(function () { rotate(); }, 3000), 
	$tabs = $('ul.hew-tabs-link'),
	$content = $('.hew-tc-wrap');
	$('ul.hew-tabs-link li').each(function (i) {
	    $(this).click(function () {
	        index = i;
	        switchElement();
	    });
	});
	function rotate() {   
	    index++;    
	    if (index >= $tabs.children('li').length)
	        index = 0;
	    switchElement();
	}
	function switchElement() {
	    clearInterval(interval);		    
	    $('ul.hew-tabs-link li').removeClass('active');
	    $('.hew-tc-wrap .hew-tabs-container').css('opacity','0');		    
	    $tabs.children('li').eq(index).addClass('active');
	    $content.children('.hew-tc-wrap .hew-tabs-container').eq(index).delay(300).css('opacity','1');		  
	    interval = setInterval(function () { rotate(); }, 3000);
	}
	$('.hew-tabs-link li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.hew-tabs-link li').removeClass('active');
		$('.hew-tabs-container').removeClass('active');
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
	*/
	//desktop end
	
	if ($(window).width() <= 800) {
	   $('.mm-toggle').on('click',function(e){
		$('.prh-right').toggle();
		e.stopPropagation();
		});
		$('.prh-right li').on('click',function(e){
			e.stopPropagation();
		});
		$(document).on('click',function(){
			$('.hmm-dropdown .prh-right').hide();
		});
	}
	else {
		$('.mm-toggle').css('display','none');
		$(document).on('click',function(){
			$('.hmm-dropdown .prh-right').show();
		});
	}
	/*
	$('.testimonials-list').bxSlider({
		mode: 'horizontal',
		captions: false,
		auto:true,
		autoStart:true,
		slideMargin: 0,
		infiniteLoop:true,	   
		pager:true,
		controls:false,	    
		minSlides:1,
		maxSlides:3,
		moveSlides:1,
		slideWidth:400,
		responsive:true
	});
	*/
	/*
	$(".country-list li").click(function(){var DG=$(this).attr('data-country-code').toUpperCase()+'^'+$(this).attr("data-dial-code");$("input[id=country]").val(DG)});
	*/
	
	$('.fluidinput').on('focus',function(){
		$(this).parents('.reg_form').addClass('valid');
	});  
	
	$(document).on('keyup', '.fluidinput', function(){
		
		if($(this).val().length >0){
			$(this).parents('.reg_form').removeClass('invalid');
			$(this).next('span.spn_class').html('');
		}
		
		if($(this).attr('name') == 'location' && $(this).val().length == 0){
			$('#location_tree').val('');
		}
	});
	
	$(document).on('keyup', '.regs-fc', function(){
		
		if($(this).val().length >0){
			$(this).removeClass('invalid');
			$(this).next('span.spn_class').html('');
		}
		
	});
	
	$('#join-now-frm-step1 #mobile_phone').on('focus',function(){
		
		country_ck = $('#country').val();
	
		if(country_ck && country_ck != 'IN^91'){
			$(this).removeAttr('minlength');
			$(this).removeAttr('maxlength');
			$(this).attr({'minlength':'3', 'maxlength':'15'});
		}
		else {
			$(this).removeAttr('minlength');
			$(this).removeAttr('maxlength');
			$(this).attr('maxlength','10');
			if($(this).val().length > 10){
				$(this).val('');
			}
		}
	});
	
	$(document).on('keyup', '#mobile_phone', function(){
	
		var ck_mob = $('#mobile_phone').val();
		var ck_isd_code = $('#country').val();
		if(ck_isd_code && ck_isd_code == 'IN^91' && ck_mob && ck_mob.slice(0,1)< 6){ // checking first digit
	 
			//$error = 'Invailid Mobile Number. Mobile number should not start with digits (4,3,2,1,0)';
			//$error = 'Invalid Mobile Number.'; // Mahesh Gupta
			$('#mobile_phone').parents('.reg_form').addClass('invalid');
			$('#s_mobile_phone_id').html('Invalid Mobile Number');
			$('#create_account_submit_btn').attr('disabled', true);
			$('#create_account_submit_btn').addClass('submit_bt_d');
			$('#create_account_submit_btn').removeClass('submit_bt');
			
		}
		else {
			$('#mobile_phone').parents('.reg_form').removeClass('invalid');
			$('#s_mobile_phone_id').html('');
			$('#create_account_submit_btn').removeAttr('disabled');
			$('#create_account_submit_btn').addClass('submit_bt');
			$('#create_account_submit_btn').removeClass('submit_bt_d');
		}
	});
	
	$(document).on('click', '.track_scr_join', function(){
		 
		//console.log('#1' + $(this).attr('data-uname')); // radhe
		//console.log('#2' + $(this).attr('data-title')); // radhe
		
		if($(this).attr('data-uname') && $(this).attr('data-title')){
			var unme = $(this).attr('data-uname');
			var dtitle = $(this).attr('data-title');
			var country_code = $('#join-now-frm-step1 #country').val();
			
			if(dtitle == 'Sign-in' && country_code == 'IN^91'){
				// generate NA
				var reg_name = $('#join-now-frm-step1 #your_name').val();
				var comp_name = $('#join-now-frm-step1 #comp_name').val();
				var email = $('#join-now-frm-step1 #username').val();
				var loc = $('#join-now-frm-step1 #location').val();
				$.ajax({		
					url: get_url_path()+'/ajax.php',	
					type: "POST",
					data: { action_id:'create_sign_in_na', 'duplicate_number':unme, reg_name:reg_name, comp_name:comp_name, email:email, loc:loc },		
					success: function(msg) {			
					
					},
					xhrFields: {			
						withCredentials: true
					},
					crossDomain: true
				});
			}
			if(dtitle != 'Verify Mobile'){
				$('.ip_login').trigger('click');
				setTimeout(function () {
			        $('#popup_login').attr("value", unme);
			        if(unme && $.isNumeric(unme)){
				         $('#login_type').attr("value", "mobile");
			        }
			        else {
				        if(country_code){
					        var cntry_code = country_code.split('^');
					      
					        if(cntry_code[0]){
								$('#login_mail_error .country-list').find('li').each(function() {
								
									if($(this).attr('data-country-code') && $(this).attr('data-country-code') == cntry_code[0].toLowerCase()){
	
										$(this).click();
										$(this).addClass("highlight");
										$(this).addClass("active");
										$('#login_mail_error .flag-container .selected-flag').attr('title', $(this).find("span:nth-child(2)").text()+': '+$(this).find("span:nth-child(3)").text());
										$('#login_mail_error .flag-container .selected-flag').find("div:first-child").attr('class', 'iti-flag '+$(this).attr('data-country-code'));
									}
									else {
										$(this).removeClass("active");
									}
								});
							}
						}
						$('#login_type').attr("value", "email");
			        }
			    }, 200);
			}
			 
			$.ajax({		
				url: get_url_path()+'/ajax.php',	
				type: "POST",
				data: { action_id:'duplicate_email_track', pname:$(this).attr('data-title'), uname:$(this).attr('data-uname'), mode:1},		
				success: function(msg) {
					
					//console.log(msg);
					
					//alert(msg);
				},
				xhrFields: {			
					withCredentials: true
				},
				crossDomain: true
			});
		}
		
		//console.log('#9' + $('#login_type').attr("value")); // radhe
	});
	
	$(document).on('click', '.track_scr', function(){
		if($(this).attr('data-title') && ($(this).attr('data-uname') || $('#popup_login').val() || $('#MobInput').val())){
			
			if($(this).attr('data-uname')){
				var user_nm = $(this).attr('data-uname');
			}
			else if($('#MobInput').length){
				var user_nm = $('#MobInput').val();
			}
			else {
				var user_nm = $('#popup_login').val();
			}
			$.ajax({		
				url: get_url_path()+'/ajax.php',	
				type: "POST",
				data: { action_id:'duplicate_email_track', pname:$(this).attr('data-title'), uname:user_nm},		
				success: function(msg) {			
				
				},
				xhrFields: {			
					withCredentials: true
				},
				crossDomain: true
			});
		}
	});
	
	$(document).on('click', '#close_s', function(){
		var lmt_over = $.trim($('#otp_limit_over').text());
		if(lmt_over.length>0){
			
			$.ajax({		
				url: get_url_path()+'/ajax.php',	
				type: "POST",
				data: { action_id:'duplicate_email_track', pname:'OTP Limit Over', uname:$('#MobInput').val()},		
				success: function(msg) {			
				
				},
				xhrFields: {			
					withCredentials: true
				},
				crossDomain: true
			});
		}
		
		if($('#thanx_box').css('display') == 'inline'){
			$.ajax({		
				url: get_url_path()+'/ajax.php',	
				type: "POST",
				data: { action_id:'duplicate_email_track', pname:'successfully verified', uname:$('#MobInput').val()},		
				success: function(msg) {			
				
				},
				xhrFields: {			
					withCredentials: true
				},
				crossDomain: true
			});
		}
		
		var pageName = window.location.pathname;
	
		if(pageName=='/guest-to-free-thanks.php' || pageName=='/thanks.htm' || pageName=='/members/thanks.htm' || pageName=='/join-now.php' || pageName=='/members/join-now.php' || pageName=='/members/guest-member-join-now.php' || pageName=='/guest-member-join-now.php' || pageName=='/members/index.php' || pageName=='/index.php' || pageName=='/members/add_edit_product.php' || pageName=='/add_edit_product.php' || pageName=='/members/add_product.php' || pageName=='/join-now-thanks.php' || pageName=='/members/verify-your-communication-details.php' || pageName=='/verify-your-communication-details.php' || pageName=='/members/purchased-lead.php' || pageName=='/signin.htm') {
		
			$('#popup_ei').html('');
			
			if(pageName=='/signin.htm') {
				$('#login_popup_container').html('');
			}
		}
		else {
			
			parent.location.reload(true); // redirect page
		}
	});
	
	$(document).on('click', '.country-list li', function(){
		var cntry_data = $(this).data('country-code');
		if(cntry_data && cntry_data != 'in'){
			$('#txt_lbl_location').html('Enter your City');
		}
		else {
			$('#txt_lbl_location').html('Enter your Locality');
		}
	});
	
	$(".acordian-row .heading03").click(function() {
		$(this).next().slideToggle(), $(this).parent().siblings().find(".acordian-box").slideUp(), $(this).toggleClass("active"), $(this).parent().siblings().find(".heading03").removeClass("active")
	}); 
	
	$(document).on('keyup', '#your_name', function(){
		
		var validate_name =/^([a-zA-Z. ])+$/;
		if($(this).val() && validate_name.test($(this).val())==false){
			$(this).parent('li.reg_form').addClass('invalid');
		 	$(this).parent().find('span.red').text('Please Enter Valid Name.');
		    $(this).focus();
		    return false;
		}
	});
	
	/*
	$(document).on('keyup', '#captcha_code', function(){
		
		if($(this).val().length == 5){
			if($('#mobile_phone').val() && $('#s_mobile_phone_id').html() == ''){
				
				$('#mobile_phone').blur();
			}
			if($('#username').val() && $('#s_email_id').html() == ''){
				
				$('#username').blur();
			}
		}
		$('#error-list-step-2').html('');
	});
	*/
	
	
	
	$(document).on('keyup', '#comp_name', function(){
		
		var validate_comp_name =/^([a-zA-Z0-9.'()\-&/ ])+$/;
		var validate_name_check =/^(['() ])+$/;
		if($(this).val().length == 0) {
		
		 	$(this).parent('li.reg_form').addClass('invalid');
		 	$(this).parent().find('span.red').text('');
		    $(this).focus();	 	
	        return false;
		}
		else if($(this).val() && validate_comp_name.test($(this).val())== false) {
		
		 	$(this).parent('li.reg_form').addClass('invalid');
		 	$(this).parent().find('span.red').text('Please Enter Valid Company Name [Charactors, Numbers, Space, -, &, / and Dot(.)].');
		    $(this).focus();	 	
	        return false;
		}
		else if($(this).val().length < 3) {
	
		 	$(this).parent('li.reg_form').addClass('invalid');
		 	$(this).parent().find('span.red').text('Company Name at least three characters');
		    $(this).focus();	 	
	        return false;
		}
		else if($(this).val() && validate_name_check.test($(this).val())){
			$(this).parent('li.reg_form').addClass('invalid');
		 	$(this).parent().find('span.red').text('Please Enter Valid Company Name.');
		    $(this).focus();
		    return false;
		}
	});
	
	$(document).on('click', '.track_join_now_cls', function(){
		
	if($(this).text() && $(this).text().length < 30 || $(this).attr('data-title')){
		
		if($(this).attr('data-title')){
			var dtitle = $(this).attr('data-title');
		}
		else {
			var dtitle = $(this).text();
		}
		
		$.ajax({		
			url: get_url_path()+'/ajax.php',	
			type: "POST",
			data: { action_id:'track_join_now_process', pname:dtitle },		
			success: function(msg) {			
			
			},
			xhrFields: {			
				withCredentials: true
			},
			crossDomain: true
		});
	}
});

$(document).on('keyup', '#mobile_phone23', function(){
	
	var cntry_codee = $('#join-now-frm-step1 #country').val();
	var pattern = /^[6-9][0-9]{0,9}$/;
	if(cntry_codee && cntry_codee !='IN^91'){	
		var pattern = /^[1-9][0-9]{0,14}$/;
	}
	var input = document.getElementById('mobile_phone');
	var value = input.value;
	!pattern.test(value) && (input.value = value = '');
	input.addEventListener('input', function() {
	var currentValue = this.value;
	if(currentValue && !pattern.test(currentValue)) this.value = value;
	else value = currentValue;
	});
});


$('.fluidinput').on('focus',function(){
	$(this).parents('.reg_form').addClass('valid');
	$(this).parents('.reg_form').removeClass('invalid');
}) 
$('.fluidinput').on('blur',function(){
	if($(this).val() == ''){
	$(this).parents('.reg_form').addClass('invalid');
	$(this).parents('.reg_form').removeClass('valid');
	} else {
	$(this).parents('.reg_form').removeClass('invalid');
	$(this).parents('.reg_form').addClass('valid');
	}
}); 
	
});

j_form_id = document.getElementById('join-now-frm-step1');

j_form_id.addEventListener('submit', function(event) {
	
	event.preventDefault(); // Prevent the default form submission
	// Perform any additional actions before submitting if needed
	// Then submit the form
	//alert('1111');
	join_now_form_submit('join-now-frm-step1','1');
});
