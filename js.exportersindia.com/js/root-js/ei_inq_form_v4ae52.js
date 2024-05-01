function open_inquiry_first_step_form_v4(verify_form, kword, classified_id, product_id, supplier_id, soc_type, track_slno='0', extra_args='') {
	 
	/* 
	console.log(" verify_form = " + verify_form);
	console.log(" kword = " + kword);
	console.log(" classified_id = " + classified_id);
	console.log(" product_id = " + product_id);
	console.log(" supplier_id = " + supplier_id);
	
	console.log(" track_slno = " + track_slno); 
	*/
	
	console.log(" soc_type = " + soc_type);
	
	//console.log(" extra_args = " + extra_args);
	
	//$('body').css('overflow', 'hidden');
	 
	var action_url = get_inquiry_url();
	
	if(verify_form && verify_form == 'classified_product_inquiry_form' && track_slno==0){
		
		if(product_id){
			track_slno = track_send_inq_new(product_id);
		}
		else if(classified_id){
			track_slno = track_send_inq_new(classified_id);
		}
	}
	
    var url = action_url+"ei_inquiry_form_v4.php?verify_form="+verify_form+"&inq_kword="+kword + extra_args + "&sid="+Math.random();
     
	//console.log(" reached at  open_inquiry_first_step_form _v4 ");
	
	var buyer_id = $("#buyer_id").val();
	var old_verification_pending = $("#old_verification_pending").val();
	//var old_verification_pending = $("#old_verification_pending").val();
	
	
	//console.log("verify_form = " + verify_form);
	//console.log("kword = " + kword);
	//console.log("classified_id = " + classified_id);
	//console.log("product_id = " + product_id);
	
	//console.log("D:\EI\exportersindia.com\static\js\root-js\ei_inq_form_v4.js - line 18 "  );
	//console.log("buyer_id = " + buyer_id);
	//console.log("buyer_id2 = " + $("#frm_enq_verify_email #buyer_id").val());
	
	//var buyer_id = $("#buyer_id").val();
		
	//console.log("supplier_id = " + supplier_id);
	//console.log("soc_type = " + soc_type);
	
	$(document).ready(function() {
		
		//console.log("D:\EI\exportersindia.com\static\js\root-js\ei_inq_form_v4.js - line 18 "  );
		//console.log("url= "+ url  );
		
		$.ajax({
			type: 'POST',
			url: url,
			dataType: "html",
			data: { action_id: "ab_test_get_inquiry_form", mem_classified_slno:classified_id, prodSlno:product_id, buyer_id:buyer_id, src_type:soc_type, supplier_id:supplier_id,'old_verification_pending':old_verification_pending, track_slno:track_slno},
			cache : false,
			success: function(newHTML) {
				 
				var cont_id = $('#default_cont_id').val();
				var isd_code = $('#default_cont_isd_code').val();
				 
				$('form[name=send-inquiry]').find(".selected-flag div").first().removeAttr("class").addClass("iti-flag "+(cont_id.toLowerCase()));
				
				$('form[name=send-inquiry]').find(".selected-contID").val("+"+isd_code);
				
				//document.forms['send-inquiry'].elements["country_code"].value = cont_id+'^'+isd_code;
				$("#send-inquiry input[name=country_code]").val(cont_id+'^'+isd_code);
				
				//document.forms['send-inquiry'].elements["mobile_phone"].setAttribute('maxlength','15');
				$("#send-inquiry input[name=mobile_phone]").attr('maxlength','15');
				$('#post_req_popup_ei').html(newHTML); // sets the html to popup_ei
				
				//console.log("D:\EI\exportersindia.com\static\js\root-js\ei_inq_form_v4.js - line 41 "  );
				//console.log("cont_id = " + cont_id);
				//console.log("isd_code = " + isd_code);
				
				//getLocation();

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


function delete_tradelead(tradelead_slno){
	
	var resp = confirm('Are you sure to close ?');
	 
	if(resp === false){
		
		return false;
	}
	//var action_url = get_inquiry_url();

	//var url = "ajax_buyer.php";
	var url = get_buyer_action_url();

	$.ajax({
		type: 'POST',
		url: url,
		dataType: "html",
		data: { id: "delete_tradelead", tradelead_slno:tradelead_slno},
		cache : false,
		success: function(newHTML) {
			//alert(newHTML);	
			$('#tr_'+tradelead_slno).html('<td>'+newHTML+'</td><td> </td>');
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


function get_buyer_action_url() {
	
	//alert(document.domain);

	var url = "ajax_buyer.php";
	
	if(document.domain=='192.168.1.104') {
		
		url = '//192.168.1.104/members/buyer/ajax_buyer.php';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		
		var url = '//members.betaei.in/buyer/ajax_buyer.php';
	}		
	else {
		
		url = 'https://members.exportersindia.com/buyer/ajax_buyer.php';
	}
	
	return url;
}

function get_inquiry_url() {
	
	//alert(document.domain);
	
	var url = "";
	
	if(document.domain=='192.168.1.104') {
		
		url = '//192.168.1.104/';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		
		var url = '//www.betaei.in/';
	}		
	else {
		
		url = '//www.exportersindia.com/';
	}
	
	return url;
}

/*
function open_inquiry_first_step_form(form_type, kword, classified_id, product_id, mem_id, soc_type) {
	
	var action_url = get_inquiry_url();
	
    var url = action_url+"ei_inquiry_form.php?verify_form="+form_type+"&inq_kword="+kword+"&sid="+Math.random();
        	
	$(document).ready(function() {
		
		$.ajax({
			type: 'POST',
			url: url,
			dataType: "html",
			data: { action_id: "ab_test_get_inquiry_form", mem_classified_slno:classified_id, prodSlno:product_id, member_id:mem_id, src_type:soc_type},
			cache : false,
			success: function(newHTML) {
				//alert(newHTML);
				if(form_type=='classified_company_inquiry_form') {
					$('#post_req_popup_ei').html(newHTML); // sets the html to popup_ei
				}
				else {
					var cont_id = $('#default_cont_id').val();
					var isd_code = $('#default_cont_isd_code').val();
					 
					$('form[name=send-inquiry]').find(".selected-flag div").first().removeAttr("class").addClass("iti-flag "+(cont_id.toLowerCase()));
					
					$('form[name=send-inquiry]').find(".selected-contID").val("+"+isd_code);
					
					//document.forms['send-inquiry'].elements["country_code"].value = cont_id+'^'+isd_code;
					$("#send-inquiry input[name=country_code]").val(cont_id+'^'+isd_code);
					
					//document.forms['send-inquiry'].elements["mobile_phone"].setAttribute('maxlength','15');
					$("#send-inquiry input[name=mobile_phone]").attr('maxlength','15');
					$('#post_req_popup_ei').html(newHTML); // sets the html to popup_ei
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
*/

/*function open_popup_post_req_form(kword, country_vanity_name, final_url, quantity='', unit='', order_value='') {
*/	

function open_popup_post_req_form(kword, country_vanity_name, final_url) {
	
	var post_req_popup_ei_div_html = $('#post_req_popup_ei').val();
	
	post_req_popup_ei_div_html = post_req_popup_ei_div_html.replace(/\s/g,"");
	
	var inq_pop_source = "";
	
	if($('#comp_prof_page_div_id').length>0) {
		
		var inq_pop_source = 'profile_page';
	}
	
	if(post_req_popup_ei_div_html.length<5) {
	
		var action_url = get_inquiry_url();
		
	    var url = action_url+"ei_inquiry_form.php?verify_form=post_req_pop_up_form&inq_kword="+kword+"&sid="+Math.random();   	
	   
		$(document).ready(function() {
			
			$.ajax({
				type: 'POST',
				url: url,
				dataType: "html",
				/*data: { action_id: "get_post_req_pop_form", inq_source:inq_pop_source, country_vanity:country_vanity_name, q_final_url:final_url, quantity:quantity, unit:unit, order_value:order_value },*/
				data: { action_id: "get_post_req_pop_form", inq_source:inq_pop_source, country_vanity:country_vanity_name, q_final_url:final_url },
				cache : false,
				success: function(newHTML) {
					
					if(newHTML.trim()){
						
						$('#post_req_popup_ei').html(newHTML).ready(function(){
						
							var cont_id = $('#default_cont_id').val();
							var isd_code = $('#default_cont_isd_code').val();
							
							  
							$('form[name=send-inquiry]').find(".selected-flag div").first().removeAttr("class").addClass("iti-flag "+(cont_id.toLowerCase()));
							
							$('form[name=send-inquiry]').find(".selected-contID").val("+"+isd_code);
							
							//document.forms['send-inquiry'].elements["country_code"].value = cont_id+'^'+isd_code;
							$("#send-inquiry input[name=country_code]").val(cont_id+'^'+isd_code);
							
							//document.forms['send-inquiry'].elements["mobile_phone"].setAttribute('maxlength','15');
							$("#send-inquiry input[name=mobile_phone]").attr('maxlength','15');
							
							var isRefreshPage = $('#checkRefresh',document).attr('data-isRefresh');
		
							if(typeof isRefreshPage!="undefined" && isRefreshPage=='1')
							{
								 
								$('#submit_post_req_form').attr('type','button');
							}
							 
						}); // sets the html to popup_ei
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
}

function track_send_inq_new(pslno){
	
	var page_url = '';
	if($('#post_refer').length){
		page_url = $('#post_refer').val();
	}
	var data_slno =0;
	$.ajax({		
		url: get_inquiry_url()+'/ajax.php',	
		type: "POST",
		async: false,
		data: { action_id:'track_send_inq_log', pslno:pslno, dtitle: 'click', mode:1, send_inq_page_url:page_url},		
		success: function(data) {		
			if(data){
				data_slno = data.trim();
			}
		},
		xhrFields: {			
			withCredentials: true
		},
		crossDomain: true
	});
	return data_slno;
}

function closeMe_new() {
	 
	 console.log(" closeMe_new called " );
	 
	$('#post_req_popup_ei').html('');
	
	$('body').css('overflow', 'auto');
}
