function supplier_classified_post_req_form_v2(frm, formID) {
	//console.log('a'); 
	var buyer_login = $('#'+formID).find("input[name=lgn_member_status]").val();
	
	//alert($("[name='lgn_member_status']", formID).val());
	var validate = '1';
	
	if(typeof buyer_login  ===  "undefined") {
		validate = '1';
	}
	else if(buyer_login==1) {
		validate = '';
	}
	/*
	$('.pop-error-prd-serv').remove('');
		$( "<span style='color:red;' class='pop-error-prd-serv'>Please Enter Minimum 3 characters for Products / Services.</span>" ).insertAfter( "#"+formID+" input[name=subject]" );
	$('.pop-error-prd-serv').remove('');
		$( "<span style='color:red;' class='pop-error-prd-serv'>Please Enter Minimum 3 characters for Products / Services.</span>" ).insertAfter( "#"+formID+" input[name=subject]" );
	*/
		if(formID == 'auto_popup_postrequirment_send_inquiry'){

			frm.subject.classList.remove("darkbdrerror");
			frm.estimate_quantity.classList.remove("darkbdrerror");
			frm.estimate_quantity.classList.remove("darkbdrerror");
			frm.quantity_unit.classList.remove("darkbdrerror");
			frm.quantity_unit_txt_fld.classList.remove("darkbdrerror");
			frm.your_name.classList.remove("darkbdrerror");
			frm.mobile_phone.classList.remove("darkbdrerror");
			frm.user_name.classList.remove("darkbdrerror");
	
		}

	if(frm.subject.value.length==0) {
		
		if(formID == 'auto_popup_postrequirment_send_inquiry'){
			frm.subject.className += " darkbdrerror";
		}
		else {
			alert("Please Enter Products/Services.");
		}
        frm.subject.focus();
       	return false;
	}
	
	if(frm.subject.value.length<3) {
		
		alert("Please Enter Minimum 3 characters for Products/Services.");
		if(formID == 'auto_popup_postrequirment_send_inquiry'){
			frm.subject.className += " darkbdrerror";
		}
		frm.subject.focus();
       	return false;
	}
	
	
	//console.log("frm.bydefault_catg_type.value.length = " + frm.bydefault_catg_type.value.length);
	//console.log("frm.bydefault_catg_type.value = " + frm.bydefault_catg_type.value);
	
	//console.log(" ### 59 formID = " + formID);
	
	if(frm.bydefault_catg_type.value.length && frm.bydefault_catg_type.value == 1){
		
	}
	else {
		
		//console.log("#frm.estimate_quantity.value = " + frm.estimate_quantity.value);
		
		if(frm.estimate_quantity.value=='') {

			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.estimate_quantity.className += " darkbdrerror";
			}
			else {
				alert("Please Enter Quantity.");
			}
			frm.estimate_quantity.focus();
			return false;
		}
		else {
			var estimate_quantity_tst = new RegExp(/^\d+(?:\.\d{1,2})?$/);
			
			if((estimate_quantity_tst.test(frm.estimate_quantity.value)==false)) {
			
				alert("Please Enter Valid Quantity.");
				if(formID == 'auto_popup_postrequirment_send_inquiry'){
					frm.estimate_quantity.className += " darkbdrerror";
				}
				frm.estimate_quantity.focus();
				return false;
			}
		}
		
		if(frm.quantity_unit.value=='') {
			
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.quantity_unit.className += " darkbdrerror";
			}
			else {
				alert("Please Select Quantity Unit.");
			}
	        frm.quantity_unit.focus();
	       	return false;
		}
		
		if(frm.quantity_unit.value=='Other') {
			
			if(frm.quantity_unit_txt_fld.value=='') {
				
				
				if(formID == 'auto_popup_postrequirment_send_inquiry'){
					frm.quantity_unit_txt_fld.className += " darkbdrerror";
				} 
				else {
					alert("Please Enter Quantity Unit.");
				}
		        frm.quantity_unit_txt_fld.focus();
		       	return false;
	       	}else{
				
				var validate_unit =/^([a-zA-Z. ])+$/;
		
				if($.isNumeric(frm.quantity_unit_txt_fld.value)){
							
					alert("Please Enter Valid Quantity Unit.");
					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						frm.quantity_unit_txt_fld.className += " darkbdrerror";
					}
					frm.quantity_unit_txt_fld.focus();
					return false;
				}
			}
		}
	}
	
	if(frm.bydefault_catg_type.value.length && frm.bydefault_catg_type.value == 1){
		
		if(frm.detail_req.value=='') {
			
			alert("Please Enter Description");
			frm.detail_req.focus();
			return false;
		}
		
		if(frm.detail_req.value.length<10) {
		
			alert("Requirement should be Minimum 10 characters");
			frm.detail_req.focus();
			return false;
		}
	}
	
	if(validate=='1') {
	
		var allCountries = [ [ "Afghanistan", "af", "93" ],
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
		
		var cont_id = $('#'+formID).find('.selected-contID').val();
		
		var mem_isd_code = cont_id.replace("+", "");
		var mem_country_code = "";
			
		for (var i = 0; i < allCountries.length; i++) {
	        var c = allCountries[i];
	      	if(c[2]==mem_isd_code) {
		      	mem_country_code = c[1].toUpperCase();
		      	break;
	      	}
	    }
	    
	    if(mem_country_code=='IN') {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','10');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','10');
		}
		else {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','3');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','15');
		}
	    
	    var selected_country_code = mem_country_code+'^'+mem_isd_code;
	    
	    frm.country_code.value=selected_country_code;
	
		//alert($('.selected-contID').val());
		
		//alert(formID);
		
		//$('#abc .selected-contID').val()  
	
		//alert($('#'+formID+' .selected-contID').val()); 
		
		//var cont_id = $('#'+formID).attr('data-country-code').toUpperCase();
		//var isd_code = $(this).attr('data-dial-code');
		
		//var country_code = cont_id+'^'+isd_code;
		
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
	   	
	    var validate_name =/^([a-zA-Z. ])+$/;
		/*
		if(frm.req_detail.value.length==0) {
			
			alert("Describe Your Buying Requirement");
	        frm.req_detail.focus();
	       	return false;
		}
		
		if(frm.req_detail.value.length<50) {
			
			alert("Describe Your Buying Requirement should be Minimum 50 characters");
	        frm.req_detail.focus();
	       	return false;
		}
		*/
		/* if(frm.your_name.value.length==0) {
			
			show_user_detail(formID);
		
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.your_name.className += " darkbdrerror";
			}
			else {
				alert("Please Enter Your Name ");
			}
	        frm.your_name.focus();
	       	return false;
		} */
		
		if(frm.country_code.value.length==0) {
			
			show_user_detail(formID);
			alert("Please Select Your Country Code.");
	        frm.country_code.focus();
	       	return false;
		}
		
		//console.log("frm.mobile_phone.value = " + frm.mobile_phone.value);
		
		if(frm.mobile_phone.value.length==0) {
			
			show_user_detail(formID);
			
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.mobile_phone.className += " darkbdrerror";
			}
			else {
				alert("Please Enter Your Mobile No.");
			}
	        frm.mobile_phone.focus();
	       	return false;
		}
		
		if(frm.country_code.value=='IN^91' && (frm.mobile_phone.value.length<10 || frm.mobile_phone.value.length>10)) {
			
			show_user_detail(formID);
			alert("Mobile No. should be 10 Digits.");
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.mobile_phone.className += " darkbdrerror";
			}
	        frm.mobile_phone.focus();
	       	return false;
		}
		if(frm.country_code.value!='IN^91' && (frm.mobile_phone.value.length<3 || frm.mobile_phone.value.length>15)) {
			
			show_user_detail(formID);
			alert("Mobile No. should be 3 to 15 Digits.");
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.mobile_phone.className += " darkbdrerror";
			}
	        frm.mobile_phone.focus();
	       	return false;
		}
		/*
		if(frm.other_city.value.length==0) {
			
			show_user_detail(formID);
			alert("Please Enter City");
	        frm.other_city.focus();
	       	return false;
		}
		*/
		
		//console.log(" ### 522 - frm.mobile_phone.value = " + frm.mobile_phone.value);
		
		if(frm.user_name.value.length==0 && frm.country_code.value!='IN^91' ) {
			
			show_user_detail(formID);
			
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.user_name.className += " darkbdrerror";
			}
			else {
				alert("Please Enter Your Email ID "); 
			}
	        frm.user_name.focus();
	       	return false;
		}
		if(reg.test(frm.user_name.value) == false && frm.country_code.value!='IN^91' ) {
		
			show_user_detail(formID);
			alert('Invalid Email ID');
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.user_name.className += " darkbdrerror";
			}
			frm.user_name.focus();
			return false;
		}
	}
	
	
	
	//console.log(" line 44 - supplier_classified_post_req_form_2022_v2 = " + formID );
	
	//supplier_classified_post_req_form_2022_v2(frm, formID);
	
	// line 536 - formID = cl_post_req_frm_5
	
	if(formID=='product_detail_inq_form_step_1') {
		supplier_prod_inq_form_submit (formID);
		//console.log('ab'); 
		//console.log(" line 553 - supplier_form_submit_v3(formID) = " + formID );
	}
	else {
		 
		//console.log(" line 557 - supplier_form_submit_v3(formID) = " + formID );
		
		//supplier_form_submit_v3(formID);
		//console.log('abc'); 
		supplier_classified_post_req_form_2022_v2(frm, formID);
	}
	
	//console.log(" line 561 ");
	
	return false;
} 

function supplier_classified_post_req_form_2022_v2(frm, formID) {
	
	//console.log('abcdefgggggg'); 
	
	//console.log(formID); 
	 
	var buyer_login = $('#'+formID).find("input[name=lgn_member_status]").val();
	
	//console.log(buyer_login); 
	
	//console.log(" buyer_login =  " + buyer_login);
	
	//alert($("[name='lgn_member_status']", formID).val());
	var validate = '1';
	
	if(typeof buyer_login  ===  "undefined") {
		validate = '1';
	}
	else if(buyer_login==1) {
		validate = '';
	}
	
	if(formID == 'auto_popup_postrequirment_send_inquiry'){

		frm.subject.classList.remove("darkbdrerror");
		frm.estimate_quantity.classList.remove("darkbdrerror");
		frm.estimate_quantity.classList.remove("darkbdrerror");
		frm.quantity_unit.classList.remove("darkbdrerror");
		frm.quantity_unit_txt_fld.classList.remove("darkbdrerror");
		frm.your_name.classList.remove("darkbdrerror");
		frm.mobile_phone.classList.remove("darkbdrerror");
		frm.user_name.classList.remove("darkbdrerror");

	}
	 
		
    $(".err_mobile_phone").html("");
	$( ".error_text" ).show();
    
	var subject_field=trimx(frm.subject.value);
	
	if(subject_field.length==0) {
		
		if(formID == 'auto_popup_postrequirment_send_inquiry'){
			frm.subject.className += " darkbdrerror";
		}
		else {
			//alert("Please Enter Products/Services.");
			 $(".err_subject").html("Please Enter Products/Services.");
			
		}
        frm.subject.focus();
       	return false;
	}
	
	if(subject_field.length<3) {
		
		//alert("Please Enter Minimum 3 characters for Products/Services.");
		$(".err_subject").html("Please Enter Minimum 3 characters for Products/Services.");
		if(formID == 'auto_popup_postrequirment_send_inquiry'){
			frm.subject.className += " darkbdrerror";
		}
		frm.subject.focus();
       	return false;
	}
	else {
			var validate_unit =/^([a-zA-Z. ])+$/;
	
			if($.isNumeric(subject_field)){				
				
				$(".err_subject").html("Please Enter Valid Products/Services.");
				if(formID == 'auto_popup_postrequirment_send_inquiry'){
					frm.subject.className += " darkbdrerror";
				}
				frm.subject.focus();
				return false;
			}
	}
	
	//var product_type= $("input[name=product_type]").val();
	
	var product_type = frm.product_type.value
	
	//console.log(" ## 650 - product_type = " + product_type );
    if(product_type==2 || product_type==3)	{
	
		if(frm.estimate_quantity.value=='' || frm.estimate_quantity.value <= 0) {
		
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.estimate_quantity.className += " darkbdrerror";
			}
			else {
				$(".err_estimate_quantity").html("Please Enter Quantity.");
				//alert("Please Enter Quantity.");
			}
			frm.estimate_quantity.focus();
			return false;
		}
		else {
			var estimate_quantity_tst = new RegExp(/^\d+(?:\.\d{1,2})?$/);
			
			if((estimate_quantity_tst.test(frm.estimate_quantity.value)==false)) {
			
				$(".err_estimate_quantity").html("Please Enter Valid Quantity.");
				//alert("Please Enter Valid Quantity.");
				if(formID == 'auto_popup_postrequirment_send_inquiry'){
					frm.estimate_quantity.className += " darkbdrerror";
				}
				frm.estimate_quantity.focus();
				return false;
			}
		}
		
		if(frm.quantity_unit.value=='') {
			
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.quantity_unit.className += " darkbdrerror";
			}
			else {
				
				$(".err_quantity_unit").html("Please Select Quantity Unit.");
				//alert("Please Select Quantity Unit.");
			}
			frm.quantity_unit.focus();
			return false;
		}
		
		if(frm.quantity_unit.value=='Other') {
			
			var quantity_unit_txt_fld_field=trimx(frm.quantity_unit_txt_fld.value);
			
			if(quantity_unit_txt_fld_field=='') {
				
				
				if(formID == 'auto_popup_postrequirment_send_inquiry'){
					frm.quantity_unit_txt_fld.className += " darkbdrerror";
				} 
				else {
					$(".err_quantity_unit").html("Please Enter Quantity Unit.");
					//alert("Please Enter Quantity Unit.");
				}
				frm.quantity_unit_txt_fld.focus();
				return false;
			}else{
				
				var validate_unit =/^([a-zA-Z. ])+$/;
		
				if($.isNumeric(quantity_unit_txt_fld_field)){
							
					//alert("Please Enter Valid Quantity Unit.");
					$(".err_quantity_unit").html("Please Enter Valid Quantity Unit.");
					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						frm.quantity_unit_txt_fld.className += " darkbdrerror";
					}
					frm.quantity_unit_txt_fld.focus();
					return false;
				}
			}
		}
	}
	else {
		if(frm.detail_req.value=='') {
		
			$(".err_desc_requirement").html("Please Enter Your Requirement.");
			frm.detail_req.focus();
			return false;
		}
		
		if(frm.detail_req.value.length<10) {
		
			$(".err_desc_requirement").html("Requirement should be Minimum 10 characters");
			frm.detail_req.focus();
			return false;
		}
	}
	
	var preference=$('input[name=preference]:checked').val();
	if(preference=='') {		
		$(".err_preference").html("Please choose preference.");
        $("#prs1").focus();
       	return false;
	}
	else if(preference=='Specific States') {
		$(".err_preference_state").html('');
         if($('.token-item-selected-list').children().first().hasClass('token-item-drpdown-search')){
            $(".err_preference_state").html("Please select state.");
			$("#multiple_preference_state").focus();
			return false;
         }		
		
	}
	//console.log('abcd1222221'); 
	//console.log(" ## 758 - validate = " + validate );
	
	if(validate=='1') {
	
		var allCountries = [ [ "Afghanistan", "af", "93" ],
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
		
		var cont_id = $('#'+formID).find('.selected-contID').val();
		
		var mem_isd_code = cont_id.replace("+", "");
		var mem_country_code = "";
			
		for (var i = 0; i < allCountries.length; i++) {
	        var c = allCountries[i];
	      	if(c[2]==mem_isd_code) {
		      	mem_country_code = c[1].toUpperCase();
		      	break;
	      	}
	    }
	    
	    if(mem_country_code=='IN') {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','10');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','10');
		}
		else {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','3');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','15');
		}
	    
	    var selected_country_code = mem_country_code+'^'+mem_isd_code;
	    
	    frm.country_code.value=selected_country_code;
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
	   	
	    var validate_name =/^([a-zA-Z. ])+$/;
		/*
		if(frm.req_detail.value.length==0) {
			
			alert("Describe Your Buying Requirement");
	        frm.req_detail.focus();
	       	return false;
		}
		
		if(frm.req_detail.value.length<50) {
			
			alert("Describe Your Buying Requirement should be Minimum 50 characters");
	        frm.req_detail.focus();
	       	return false;
		}
		*/
		//var your_name_field=trimx(frm.your_name.value);
		
		if(frm.country_code.value.length==0) {
			
			show_user_detail(formID);
			//alert("Please Select Your Country Code.");
			$(".err_mobile_phone").html("Please Select Your Country Code.");
	        frm.country_code.focus();
	       	return false;
		}
		//var mob_val=trimx(document.getElementById("mobile_phone").value);	
		var mob_val=trimx(frm.mobile_phone.value);	
		if(mob_val=='' || mob_val=='0') {
		
			show_user_detail(formID);		
			
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.mobile_phone.className += " darkbdrerror";
			}
			else {
				//alert("Please Enter Your Mobile No.");
				$(".err_mobile_phone").html("Please Enter Your Mobile No.");
			}
			frm.mobile_phone.focus();
			return false;
		}		
		if(frm.country_code.value=='IN^91' && (frm.mobile_phone.value.length<10 || frm.mobile_phone.value.length>10)) {
			
					
			show_user_detail(formID);
			$(".err_mobile_phone").html("Mobile No. should be 10 Digits.");
			//alert("Mobile No. should be 10 Digits.");
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.mobile_phone.className += " darkbdrerror";
			}
			frm.mobile_phone.focus();
			return false;
		}
		else{
			
			var phn=frm.mobile_phone.value;
			letter = phn.charAt(0);
			if(frm.country_code.value=='IN^91' && letter < 6 ){
				//show_user_detail(formID);
				//$(".err_mobile_phone").html("Enter valid mobile no.");	
				alert("Enter valid mobile no.");
				frm.mobile_phone.focus();
				return false;
			}
		}
		if(frm.country_code.value!='IN^91' && (frm.mobile_phone.value.length<3 || frm.mobile_phone.value.length>15)) {
			
			show_user_detail(formID);
			$(".err_mobile_phone").html("Mobile No. should be 3 to 15 Digits.");
			//alert("Mobile No. should be 3 to 15 Digits.");
			if(formID == 'auto_popup_postrequirment_send_inquiry'){
				frm.mobile_phone.className += " darkbdrerror";
			}
			frm.mobile_phone.focus();
			return false;
		}
		
		if(frm.country_code.value!='IN^91') {		
			
		    //var user_name_field=trimx(document.getElementById("user_name").value);	  	
		    var user_name_field=trimx(frm.user_name.value);	
			if(user_name_field=='') {					
				show_user_detail(formID);				
				if(formID == 'auto_popup_postrequirment_send_inquiry'){
					frm.user_name.className += " darkbdrerror";
				}
				else {
					$(".err_user_name").html("Please Enter Your Email ID.");
					//alert("Please Enter Your Email ID ");
				}				
				document.getElementById("user_name").focus();
				return false;
			}			
			else{
			
				if(reg.test(user_name_field) == false) {
				
					show_user_detail(formID);
					$(".err_user_name").html("'Invalid Email ID'");
					//alert('Invalid Email ID');
					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						frm.user_name.className += " darkbdrerror";
					}
					document.getElementById("user_name").focus();
					return false;
				} 
			}
			
		}	
		
		//var other_city_field=trimx(frm.other_city.value);		
	}	
	//console.log('abcd111111111111'); 
	
	//console.log(" line 1135 - formID = " + formID );
	// line 1125 - supplier_form_submit_v3(formID) = cl_post_req_frm_9
	if(formID=='product_detail_inq_form_step_1') {
		supplier_prod_inq_form_submit (formID);
	}
	else {
		$(".submit_post_class_div").show();
		//supplier_form_submit(formID);
		//console.log('abcd'); 
		supplier_form_submit_v4(formID);
	}
	
	//console.log("##3 line 1147 - formID = " + formID );
	
	return false;
}


function supplier_form_submit_v4(formID){
	//console.log('abcde'); 
	//console.log("##3 line 1155 - supplier_form_submit_v4 - formID = " + formID );
	
	//console.log(" line 1142 - supplier_form_submit_v4(formID) = " + formID );
	
	if(formID == 'auto_popup_postrequirment_send_inquiry'){
		$('.mobile_phone_err').text('');
	    $("#mobile_phone").removeClass('darkbdrerror');
	}
	var mode='';
	if(document.domain=='192.168.1.104') {
		var ajax_url = '//192.168.1.104';
		mode='local';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		var ajax_url = '//www.betaei.in';
		mode='beta';
	}	
	else {
		var ajax_url = '//www.exportersindia.com';
		mode='live';
	}
	var action_url = ajax_url+"/ei_inquiry_form.php";
		
	$.ajax({
	
		type: 'POST',
		url: action_url,
		dataType: "html",
		cache : false,
		data : $("#"+formID).serialize(), //Encode a set of form elements as a string for submission
						
		success: function(msg) {
			
			//alert(msg);
			
			var split_msg = msg.split("~~");
			var buyer_id = split_msg[1].replace(/\s/g,"");
			var inq_msg = split_msg[2];
			//alert(inq_msg);
			
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			
			if(sucess_status=='Y' && insert_member_status=='Y') {
				
				//console.log('abcdef'); 
				
				if(document.forms[formID].elements["req_detail"]) {
					document.forms[formID].elements["req_detail"].value = "";
				}
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
				if(mode=='live'){
					/* google adword tracking code */
					gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
					
					/* fb tracking code */
					//fbq('track', 'Lead'); 
					
					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						/* l3 page 60 sec Detail Form Submit: */
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit3']);
					}
					else {
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit']);
					}
				}

			}
			else if(sucess_status=='Y' && insert_member_status=='N') {
				
				//console.log('abcdefg'); 
				
				if(document.forms[formID].elements["req_detail"]) {
					document.forms[formID].elements["req_detail"].value = "";
				}
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
				if(mode=='live'){
					/* google adword tracking code */
					gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
					
					/* fb tracking code */
					fbq('track', 'Lead'); 

					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						/* l3 page 60 sec Detail Form Submit: */
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit3']);
					}
					else {
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit']);
					}
				}

			}
			else if(sucess_status=='Y' && insert_member_status=='V') {
				
				//console.log('abcdefgh'); 
				
				if(document.forms[formID].elements["req_detail"]) {
					document.forms[formID].elements["req_detail"].value = "";
				}
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
				if(mode=='live'){
					/* google adword tracking code */
					gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
					
					/* fb tracking code */
					fbq('track', 'Lead');  

					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						/* l3 page 60 sec Detail Form Submit: */
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit3']);
					}
					else {
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit']);
					}
				}
				
			}
			else {
				
				//console.log('abcdefghi'); 
				
				if(inq_msg.length>0) {
					
					var error_msg = inq_msg.replace(/(<br>)|(<br \/>)|(<br\/>)|(<li>)|(<\/li>)/g, "\n");
					
					/*
					error_msg = error_msg.replace(/~~/g, "~");
					var error_split_res = error_msg.split('~');
					alert(error_split_res);
					if(error_split_res[1]) {
						alert(error_split_res[1]);
					} 
					*/
					
					if(formID == 'auto_popup_postrequirment_send_inquiry' && error_msg == 'Invalid Mobile Number.'){
						$(".mobile_phone_err").text(error_msg);
						$('#mobile_phone').addClass('darkbdrerror');
					}
					else{
						
						alert(error_msg);
					}
				}
			}
			$(".submit_post_class_div").hide();
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
}


function supplier_classified_post_req_save_time_form(frm, formID) {
	
	if(formID == 'auto_popup_postrequirment_send_inquiry'){
		
		var buyer_login = $('#'+formID).find("input[name=lgn_member_status]").val();
		var validate = '1';
		
		if(typeof buyer_login  ===  "undefined") {
			validate = '1';
		}
		else if(buyer_login==1) {
			validate = '';
		}
		
		var err_cls = document.getElementsByClassName("error_span");
	    for (i = 0; i < err_cls.length; i++) { 
	        if (err_cls[i].innerHTML.trim().length> 0){ 
	            err_cls[i].innerHTML = "";    
	        }
	    }
	    
		frm.subject.classList.remove("darkbdrerror");
		frm.estimate_quantity.classList.remove("darkbdrerror");
		frm.quantity_unit.classList.remove("darkbdrerror");
		frm.quantity_unit_txt_fld.classList.remove("darkbdrerror");
		frm.your_name.classList.remove("darkbdrerror");
		frm.mobile_phone.classList.remove("darkbdrerror");
		frm.user_name.classList.remove("darkbdrerror");
		
		if(frm.subject.value.length==0) {
			
			frm.subject.className += " darkbdrerror";
	        frm.subject.focus();
	       	return false;
		}
		
		if(frm.subject.value.length<3) {
			
			document.querySelector('.inq_search_kword_err').innerHTML = 'Please Enter Minimum 3 characters for Products/Services.';
			frm.subject.className += " darkbdrerror";
			frm.subject.focus();
	       	return false;
		}
	
		if(frm.estimate_quantity.value=='') {
		
			frm.estimate_quantity.className += " darkbdrerror";
			frm.estimate_quantity.focus();
			return false;
		}
		else {
			var estimate_quantity_tst = new RegExp(/^\d+(?:\.\d{1,2})?$/);
			
			if((estimate_quantity_tst.test(frm.estimate_quantity.value)==false)) {
			
				document.querySelector('.estimate_quantity_err').innerHTML = 'Please Enter Valid Quantity..';
				frm.estimate_quantity.className += " darkbdrerror";
				frm.estimate_quantity.focus();
				return false;
			}
		}
	
		if(frm.quantity_unit.value=='') {
			
			frm.quantity_unit.className += " darkbdrerror";
		    frm.quantity_unit.focus();
		   	return false;	
		}
		
		if(frm.quantity_unit.value=='Other') {
			
			if(frm.quantity_unit_txt_fld.value=='') {
				
				frm.quantity_unit_txt_fld.className += " darkbdrerror";
		        frm.quantity_unit_txt_fld.focus();
		       	return false;
		       	
	       	}else{
				
				var validate_unit =/^([a-zA-Z. ])+$/;
		
				if($.isNumeric(frm.quantity_unit_txt_fld.value)){
							
					document.querySelector('.quantity_unit_txt_fld_err').innerHTML = 'Please Enter Valid Quantity Unit';
					frm.quantity_unit_txt_fld.className += " darkbdrerror";
					frm.quantity_unit_txt_fld.focus();
					return false;
				}
			}
		}
	
		if(validate=='1') {
		
			var allCountries = [ [ "Afghanistan", "af", "93" ],
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
			
			var cont_id = $('#'+formID).find('.selected-contID').val();
			
			var mem_isd_code = cont_id.replace("+", "");
			var mem_country_code = "";
				
			for (var i = 0; i < allCountries.length; i++) {
		        var c = allCountries[i];
		      	if(c[2]==mem_isd_code) {
			      	mem_country_code = c[1].toUpperCase();
			      	break;
		      	}
		    }
		    
		    if(mem_country_code=='IN') {
				$('#'+formID).find("input[name=mobile_phone]").attr('minlength','10');
				$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','10');
			}
			else {
				$('#'+formID).find("input[name=mobile_phone]").attr('minlength','3');
				$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','15');
			}
		    
		    var selected_country_code = mem_country_code+'^'+mem_isd_code;
		    
		    frm.country_code.value=selected_country_code;
		
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
		   	
		    var validate_name =/^([a-zA-Z. ])+$/;
		
			if(frm.your_name.value.length==0) {
				
				show_user_detail(formID);
				frm.your_name.className += " darkbdrerror";
		        frm.your_name.focus();
		       	return false;
			}
			
			if(frm.country_code.value.length==0) {
				
				show_user_detail(formID);
				alert("Please Select Your Country Code.");
		        frm.country_code.focus();
		       	return false;
			}
			if(frm.mobile_phone.value.length==0) {
				
				show_user_detail(formID);
				frm.mobile_phone.className += " darkbdrerror";
		        frm.mobile_phone.focus();
		       	return false;
			}
			
			if(frm.country_code.value=='IN^91' && (frm.mobile_phone.value.length<10 || frm.mobile_phone.value.length>10)) {
				
				show_user_detail(formID);
				document.querySelector('.mobile_phone_err').innerHTML = 'Mobile No. should be 10 Digits.';
				frm.mobile_phone.className += " darkbdrerror";
		        frm.mobile_phone.focus();
		       	return false;
			}
			if(frm.country_code.value!='IN^91' && (frm.mobile_phone.value.length<3 || frm.mobile_phone.value.length>15)) {
				
				show_user_detail(formID);
				document.querySelector('.mobile_phone_err').innerHTML = 'Mobile No. should be 3 to 15 Digits.';
				frm.mobile_phone.className += " darkbdrerror";
		        frm.mobile_phone.focus();
		       	return false;
			}
		
			if(frm.user_name.value.length==0) {
				
				show_user_detail(formID);
				frm.user_name.className += " darkbdrerror";
		        frm.user_name.focus();
		       	return false;
			}
			if(reg.test(frm.user_name.value) == false) {
			
				show_user_detail(formID);
				document.querySelector('.user_name_err').innerHTML = 'Invalid Email ID';
				frm.user_name.className += " darkbdrerror";
				frm.user_name.focus();
				return false;
			}
		}
		supplier_form_submit_v3(formID);
	}
	return false;
}
 
function supplier_classified_post_req_form_mobil(frm, formID) {
	
	var buyer_login = $('#'+formID).find("input[name=lgn_member_status]").val();
	
	//alert($("[name='lgn_member_status']", formID).val());
	var validate = '1';
	
	if(typeof buyer_login  ===  "undefined") {
		validate = '1';
	}
	else if(buyer_login==1) {
		validate = '';
	}
	
	if(frm.subject.value.length==0) {
		
		$(".subject_error").text('Please Enter Products/Services.');
        frm.subject.focus();
       	return false;
	}	
	if(frm.subject.value.length<3) {
		
		$(".subject_error").text('Please Enter Minimum 3 characters for Products/Services.');
		frm.subject.focus();
       	return false;
	}
	else{
		   
			var validate_unit =/^([a-zA-Z. ])+$/;	
			if($.isNumeric(frm.subject.value)){					
				$(".subject_error").text('Please Enter Valid Products/Services.');
				frm.subject.focus();
				return false;
			}else{
				$(".subject_error").text('');
			}		
	}
	
	if(frm.bydefault_catg_type.value=='1') {
		
		if(frm.detail_req.value=='') {
		
			$(".detail_req_error").text('Please Enter Service Desc.');
			frm.detail_req.focus();
			return false;
		}
		
		if(frm.detail_req.value.length<10) {
		
			$(".detail_req_error").text("Requirement should be Minimum 10 characters");
			frm.detail_req.focus();
			return false;
		}
		else{
			$(".detail_req_error").text('');
		}		
	}
	else {
		
		if(frm.estimate_quantity.value=='') {
		
			$(".estimate_quantity_error").text('Please Enter Quantity.');
			frm.estimate_quantity.focus();
			return false;
		}
		else {
			var estimate_quantity_tst = new RegExp(/^\d+(?:\.\d{1,2})?$/);
			
			if((estimate_quantity_tst.test(frm.estimate_quantity.value)==false)) {
				
				$(".estimate_quantity_error").text('Please Enter Valid Quantity.');
				frm.estimate_quantity.focus();
				return false;
			}
			else{
				$(".estimate_quantity_error").text('');
			}
		}
		
		if(frm.quantity_unit.value=='') {
			
			$(".quantity_unit_error").text('Please Select Quantity Unit.');
	        frm.quantity_unit.focus();
	       	return false;
		}
		else{
			$(".quantity_unit_error").text('');
		}
		
		if(frm.quantity_unit.value=='Other') {
			
			if(frm.quantity_unit_txt_fld.value=='') {
				
				$(".quantity_unit_error").text('Please Enter Quantity Unit.');
		        frm.quantity_unit_txt_fld.focus();
		       	return false;
	       	}else{
				
				var validate_unit =/^([a-zA-Z. ])+$/;
		
				if($.isNumeric(frm.quantity_unit_txt_fld.value)){
				
					$(".quantity_unit_error").text('Please Enter Valid Quantity Unit.');
					frm.quantity_unit_txt_fld.focus();
					return false;
				}
				else{
					$(".quantity_unit_error").text('');
				}
			}
		}
		
	}
	
	if(validate=='1') {
	
		var allCountries = [ [ "Afghanistan", "af", "93" ],
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
		
		var cont_id = $('#'+formID).find('.selected-contID').val();
		
		var mem_isd_code = cont_id.replace("+", "");
		var mem_country_code = "";
			
		for (var i = 0; i < allCountries.length; i++) {
	        var c = allCountries[i];
	      	if(c[2]==mem_isd_code) {
		      	mem_country_code = c[1].toUpperCase();
		      	break;
	      	}
	    }
	    
	    if(mem_country_code=='IN') {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','10');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','10');
		}
		else {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','3');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','15');
		}
	    
	    var selected_country_code = mem_country_code+'^'+mem_isd_code;
	    
	    frm.country_code.value=selected_country_code;
		
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
	   	
	    var validate_name =/^([a-zA-Z. ])+$/;
		
		/*
		if(frm.your_name.value.length==0) {
			
			//show_user_detail(formID);
			$(".your_name_error").text('Please Enter Your Name');
	        frm.your_name.focus();
	       	return false;
		}
		else
		if(frm.your_name.value.length<3) {
			
			$(".your_name_error").text('Please Enter Minimum 3 characters for Name.');
			frm.your_name.focus();
	       	return false;
		}
		else{
			var letters = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
			if(frm.your_name.value.match(letters))
			{			  
				$(".your_name_error").text('');
			}
			else
			{			 
				$(".your_name_error").text('Please Enter Valid Name.');
				frm.your_name.focus();
				return false;
			}	  
		}
		*/
		
		
		if(frm.user_name.value.length==0) {
			
			//show_user_detail(formID);
			$(".user_name_error").text('Please Enter Your Email ID');
	        frm.user_name.focus();
	       	return false;
		}
		if(reg.test(frm.user_name.value) == false) {
		
			//show_user_detail(formID);
			$(".user_name_error").text('Invalid Email Id');
			frm.user_name.focus();
			return false;
		}
		else{
			$(".user_name_error").text('');
		}
		
		if(frm.country_code.value.length==0) {
			
			//show_user_detail(formID);
			alert("Please Select Your Country Code.");
	        frm.country_code.focus();
	       	return false;
		}
		
		if(frm.mobile_phone.value.length==0) {
			
			//show_user_detail(formID);
			$(".mobile_phone_error").text('Please Enter Your Mobile No.');
	        frm.mobile_phone.focus();
	       	return false;
		}
		
		if(frm.country_code.value=='IN^91' && (frm.mobile_phone.value.length<10 || frm.mobile_phone.value.length>10)) {
			
			//show_user_detail(formID);
			$(".mobile_phone_error").text('Mobile No. should be 10 Digits.');
	        frm.mobile_phone.focus();
	       	return false;
		}
		else{
			$(".mobile_phone_error").text('');
		}
		if(frm.country_code.value!='IN^91' && (frm.mobile_phone.value.length<3 || frm.mobile_phone.value.length>15)) {
			
			//show_user_detail(formID);
			$(".mobile_phone_error").text('Mobile No. should be 3 to 15 Digits.');
	        frm.mobile_phone.focus();
	       	return false;
		}
		else{
			$(".mobile_phone_error").text('');
		}
	}
	
	if(formID=='product_detail_inq_form_step_1') {
		supplier_prod_inq_form_submit (formID);
	}
	else {
		supplier_form_submit_v3(formID);
	}
	
	return false;
}

function show_user_detail(formID){
	
	if($('#'+formID).find('.user-detail-edit').length) {
		$('#'+formID).find('.user-detail-edit').trigger('click');
	}
	if($('#'+formID).find('.user-detail-edit-L2L3').length) {
		$('#'+formID).find('.user-detail-edit-L2L3').trigger('click');
	}		
}
function supplier_prod_inq_form_submit (formID) {
	
	if(document.domain=='192.168.1.104') {
		var ajax_url = '//192.168.1.104';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		var ajax_url = '//www.betaei.in';
	}	
	else {
		var ajax_url = '//www.exportersindia.com';
	}
	var action_url = ajax_url+"/ei_inquiry_form.php";
	 
	//$("#prod_detail_inq_submit_step_1").attr("disabled", "disabled");
		
	$.ajax({
	
		type: 'POST',
		url: action_url,
		dataType: "html",
		cache : false,
		data : $("#"+formID).serialize(), //Encode a set of form elements as a string for submission
						
		success: function(msg) {
			
			//alert(msg);
			
			var split_msg = msg.split("~~");
			var inq_id = split_msg[1].replace(/\s/g,"");
			var inq_msg = split_msg[2];
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			
			if(sucess_status=='Y') {
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
							
				window.pagesense = window.pagesense || [];
				window.pagesense.push(['trackEvent', 'Submit']);
				
				/* google adword tracking code */
				gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
			}
			else if(sucess_status=='V') {
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
							
				window.pagesense = window.pagesense || [];
				window.pagesense.push(['trackEvent', 'Submit']);
				
				/* google adword tracking code */
				gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
			}
			else {
				alert(inq_msg);
				$("#prod_detail_inq_submit_step_1").removeAttr("disabled", "disabled");
				return false;
			}
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
}

function supplier_form_submit_v3(formID) {
	
	if(formID == 'auto_popup_postrequirment_send_inquiry'){
		$('.mobile_phone_err').text('');
	    $("#mobile_phone").removeClass('darkbdrerror');
	}
	var mode='';
	if(document.domain=='192.168.1.104') {
		var ajax_url = '//192.168.1.104';
		mode='local';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		var ajax_url = '//www.betaei.in';
		mode='beta';
	}	
	else {
		var ajax_url = '//www.exportersindia.com';
		mode='live';
	}
	var action_url = ajax_url+"/ei_inquiry_form.php";
	 
	//console.log("line 1568 -  action_url = " + action_url); 
	//console.log("line 1569 -  serialize = " + $("#"+formID).serialize()); 
	 
	$.ajax({
	
		type: 'POST',
		url: action_url,
		dataType: "html",
		cache : false,
		data : $("#"+formID).serialize(), //Encode a set of form elements as a string for submission
						
		success: function(msg) {
			
			//alert(msg);
			//console.log("line 2333 -  msg = " + msg);
			
			var split_msg = msg.split("~~");
			var buyer_id = split_msg[1].replace(/\s/g,"");
			var inq_msg = split_msg[2];
			//alert(inq_msg);
			
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			
			if(sucess_status=='Y' && insert_member_status=='Y') {
				
				if(document.forms[formID].elements["req_detail"]) {
					document.forms[formID].elements["req_detail"].value = "";
				}
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
				if(mode=='live'){
					/* google adword tracking code */
					gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
					
					/* fb tracking code */
					//fbq('track', 'Lead'); 
					
					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						/* l3 page 60 sec Detail Form Submit: */
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit3']);
					}
					else {
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit']);
					}
				}

			}
			else if(sucess_status=='Y' && insert_member_status=='N') {
				
				if(document.forms[formID].elements["req_detail"]) {
					document.forms[formID].elements["req_detail"].value = "";
				}
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
				if(mode=='live'){
					/* google adword tracking code */
					gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
					
					/* fb tracking code */
					fbq('track', 'Lead'); 

					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						/* l3 page 60 sec Detail Form Submit: */
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit3']);
					}
					else {
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit']);
					}
				}

			}
			else if(sucess_status=='Y' && insert_member_status=='V') {
				
				if(document.forms[formID].elements["req_detail"]) {
					document.forms[formID].elements["req_detail"].value = "";
				}
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
				if(mode=='live'){
					/* google adword tracking code */
					gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
					
					/* fb tracking code */
					fbq('track', 'Lead');  

					if(formID == 'auto_popup_postrequirment_send_inquiry'){
						/* l3 page 60 sec Detail Form Submit: */
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit3']);
					}
					else {
						window.pagesense = window.pagesense || [];
						window.pagesense.push(['trackEvent', 'Submit']);
					}
				}
				
			}
			else {
				
				if(inq_msg.length>0) {
					
					var error_msg = inq_msg.replace(/(<br>)|(<br \/>)|(<br\/>)|(<li>)|(<\/li>)/g, "\n");
					
					/*
					error_msg = error_msg.replace(/~~/g, "~");
					var error_split_res = error_msg.split('~');
					alert(error_split_res);
					if(error_split_res[1]) {
						alert(error_split_res[1]);
					} 
					*/
					
					if(formID == 'auto_popup_postrequirment_send_inquiry' && error_msg == 'Invalid Mobile Number.'){
						$(".mobile_phone_err").text(error_msg);
						$('#mobile_phone').addClass('darkbdrerror');
					}
					else{
						
						alert(error_msg);
					}
				}
			}
			$(".submit_post_class_div").hide();
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
}

function checkExistingUserSupplier(url, email, form_name, element_name) {
		
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,14})+$/;
   		
	if(reg.test(email) == false) {

		return false;
	}
	
	if(document.domain=='192.168.1.104') {
		
		var imgae_url = "//"+document.domain+"/static/";
	}
	else {
		var imgae_url ="//static.exportersindia.com/";
	}
	
	document.getElementById(element_name).innerHTML = '<img src="'+imgae_url+'images/loading.gif" />';
	
	action_url = url;
	
	url=url+"&email="+email;
	
	url = url+"&sid="+Math.random();
	
	$.ajax({
		
		url: url,
		method : "POST",
		success:function(result) {
			
			//alert(result);
			
			var arr_result = result.split("|");
			
			if(arr_result[0].replace(/^\s+|\s+$/g, '') == 'exist'){
				
				//alert(arr_result[3]);
				
				document.forms[form_name].elements["your_name"].value = arr_result[3].replace(/^\s+|\s+$/g, '');
				
				document.forms[form_name].elements["comp_name"].value = arr_result[4].replace(/^\s+|\s+$/g, '');
				
				document.forms[form_name].elements["country_code"].value = arr_result[5].replace(/^\s+|\s+$/g, '');
				
				var cont_id_arr = arr_result[5].split("^");				
				var cont_id = cont_id_arr['0'].replace(/^\s+|\s+$/g, '').toLowerCase();
				var isd_code = cont_id_arr['1'].replace(/^\s+|\s+$/g, '');

				$('form[name='+form_name+']').find(".selected-flag div").first().removeAttr("class").addClass("iti-flag "+cont_id);
				
				var cont_title = arr_result[12]+": +"+isd_code;
				$('form[name='+form_name+']').find(".selected-flag").removeAttr("title").attr("title",cont_title);
				
				$('form[name='+form_name+']').find(".selected-contID").val("+"+isd_code);
									
				if(arr_result[5].replace(/^\s+|\s+$/g, '') == 'IN^91') {

					if(arr_result[11].replace(/^\s+|\s+$/g, '').length > 0) {
						
						document.forms[form_name].elements["other_city"].value = arr_result[11].replace(/^\s+|\s+$/g, '');		
					}
					
					//document.forms[form_name].elements["mobile_phone"].setAttribute('minlength','10');
					//document.forms[form_name].elements["mobile_phone"].setAttribute('maxlength','10');
					
				}else{
					
					document.forms[form_name].elements["other_city"].value = arr_result[11].replace(/^\s+|\s+$/g, '');
					
					//document.forms[form_name].elements["mobile_phone"].setAttribute('minlength','3');
					//document.forms[form_name].elements["mobile_phone"].setAttribute('maxlength','15');
				}	
				
				var mobile = arr_result[9].replace(/^\s+|\s+$/g, '');
				var mobile_arr = mobile.split("/");
								
				document.forms[form_name].elements["mobile_phone"].value = mobile_arr[0];
								
				document.forms[form_name].elements["your_name"].focus();
				
				document.forms[form_name].elements["comp_name"].focus();
				
				document.forms[form_name].elements["other_city"].focus();
				
				document.forms[form_name].elements["mobile_phone"].focus();
			}
			else {
				
				document.forms[form_name].elements["your_name"].value='';
				
				document.forms[form_name].elements["comp_name"].value='';

				document.forms[form_name].elements["mobile_phone"].value='';
				
				var cont_id = $('#default_cont_id').val();
				var isd_code = $('#default_cont_isd_code').val();
				
				$('form[name='+form_name+']').find(".selected-flag div").first().removeAttr("class").addClass("iti-flag "+(cont_id.toLowerCase()));
				
				$('form[name='+form_name+']').find(".selected-contID").val("+"+isd_code);
				
				document.forms[form_name].elements["country_code"].value=cont_id+'^'+isd_code;
				
				document.forms[form_name].elements["other_city"].value='';
				
				//document.forms[form_name].elements["mobile_phone"].setAttribute('minlength','10');
				//document.forms[form_name].elements["mobile_phone"].setAttribute('maxlength','10');				
			}
			
			document.getElementById(element_name).innerHTML = '';
			
			//$('#loader_post_req_bottom').html('');			
		}
    });   
}

	 
function getCityName_supplier (formName) {
	
	if(document.domain=='192.168.1.104') {
		
		var mem_url = "//"+document.domain+"/";
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		
		var mem_url = '//www.betaei.in/';
	}	
	else {
		var mem_url ="//www.exportersindia.com/";
	}	
	   
	$(document).on("keypress",function(){
		
		var country = document.forms[formName].elements["country_code"].value;
		  
		document.forms[formName].elements["temp_state_id"].value = '';
		
		$(".city_id_suggestion_class").autocomplete({
		
			source: mem_url+"feedback.htm?action=get_city&country="+country,				
			minLength: 1,				
			appendTo: "#city_suggesion_lst",
			
			select: function (event, ui) {
				 
				var city_state_split = ui.item.value.split('(');
				 
				$(this).val($.trim(city_state_split[0]));
														
				document.forms[formName].elements["other_city"].value = $.trim(city_state_split[0]);
				 
				if(document.forms[formName].elements["temp_state_id"]) {
					document.forms[formName].elements["temp_state_id"].value = $.trim(ui.item.key);					 
				}
				
				//$("#"+element).val($.trim(city_state_split[0]));					 
				//return false;
			} 
		});	
		 
	});
		 
	return false;
}

/*
function getCityName_supplier (formName) {
	
	if(document.domain=='192.168.1.104') {
		
		var mem_url = "//"+document.domain+"/";
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		
		var mem_url = '//www.betaei.in/';
	}	
	else {
		var mem_url ="//www.exportersindia.com/";
	}
	
	$(document).ready(function() {
		
		$(".city_id_suggestion_class").keypress(function(){
			
			var country = document.forms[formName].elements["country_code"].value;
			
			$(".city_id_suggestion_class").autocomplete({
			
				source: mem_url+"feedback.htm?action=get_city&country="+country,
				
				minLength: 1,
				
				appendTo: "#city_suggesion_lst",
				
				select: function (event, ui) {
					
					var city_state_split = ui.item.value.split('(');
															
					document.forms[formName].elements["other_city"].value = $.trim(city_state_split[0]);
					
					if(document.forms[formName].elements["temp_state_id"]) {
						document.forms[formName].elements["temp_state_id"].value = $.trim(ui.item.key);
					}
					
					//$("#"+element).val($.trim(city_state_split[0]));
							
					return false;
				}
			});	
		});
	});
}
*/

function ab_test_get_inquiry_form_submit_step2(form_id, step) {
	
	if(document.domain=='192.168.1.104') {
		var url = '//192.168.1.104';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		var url = '//www.betaei.in';
	}
	else {
		var url = '//www.exportersindia.com';
	}
	var action_url = url+"/ei_inquiry_form.php";
	 
	var img_src = "//static.exportersindia.com/myfolder-images/ajax-loader.gif";
	
	var img_tag = "<img src='"+img_src+"' height='18'>";
	
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
   	
    var validate_name =/^([a-zA-Z. ])+$/;
    
    frm = document.getElementById(form_id);
    
    $(".error_field").removeClass("error_border");
	
	if(frm.other_city.value.length==0) {
		//alert("Please Enter City");
		$(".other_city_cls").addClass("error_border");
        frm.other_city.focus();
       	return false;
	}
	$("#submit_step_2_button").attr("disabled", "disabled");
	
	$('#frm_ajax_ldr_id_2').html(img_tag); // sets the html to post_req_popup_ei
	$('#show_inq_error_msg').html(""); // 
	
	$.ajax({
		type: 'POST',
		url: action_url,
		dataType: "html",
		cache : false,
		data : $("#"+form_id).serialize(),
		success: function(msg) {
			$('#frm_ajax_ldr_id_2').html("");
			//alert(msg);
			if(msg.length>0) {
				var split_msg = msg.split("~~");
				var inq_id = split_msg[1].replace(/\s/g,"");
				var inq_msg = split_msg[2];
				var insert_member_status = split_msg[3].replace(/\s/g,"");
				var sucess_status = split_msg[4].replace(/\s/g,"");
				
				if(sucess_status=='Y') {
				
					$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei	
					
					window.pagesense = window.pagesense || [];
					window.pagesense.push(['trackEvent', '2ndSubmit']);
				}
				else {
					// alert(inq_msg);
					$('#err_sendto_msg').html('inq_msg');
					$("#submit_step_2_button").removeAttr("disabled", "disabled");
					return false;
				}
			}
			
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
	return true;
}
function trimx(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}
function get_path(){
	if(document.domain=='192.168.1.104') {
		var ajax_url = '//192.168.1.104';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		var ajax_url = '//www.betaei.in';
	}	
	else {
		var ajax_url = '//www.exportersindia.com';
	}
	return ajax_url;
}
function send_mob_no(){
		
	var allCountries = [ [ "Afghanistan", "af", "93" ],
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
	
	var cont_id = $('#auto_popup_first_mobile_number_frm').find('.selected-contID').val();
	
	var mem_isd_code = cont_id.replace("+", "");
	var mem_country_code = "";
		
	for (var i = 0; i < allCountries.length; i++) {
        var c = allCountries[i];
      	if(c[2]==mem_isd_code) {
	      	mem_country_code = c[1].toUpperCase();
	      	break;
      	}
    }
    
    if(mem_country_code=='IN') {
		$('#auto_popup_first_mobile_number_frm').find("input[name=first_mobile_phone]").attr('minlength','10');
		$('#auto_popup_first_mobile_number_frm').find("input[name=first_mobile_phone]").attr('maxlength','10');
	}
	else {
		$('#auto_popup_first_mobile_number_frm').find("input[name=first_mobile_phone]").attr('minlength','3');
		$('#auto_popup_first_mobile_number_frm').find("input[name=first_mobile_phone]").attr('maxlength','15');
	}
    
    var selected_country_code = mem_country_code+'^'+mem_isd_code;
    $('#first_country_code').val(selected_country_code);
    
	
	$(".error_span").html("");
	$(".error_field").removeClass("error_border");		
	var mobile_phone = trimx($("#first_mobile_phone").val());
	var country_code = $('#first_country_code').val();	
	
	if(mobile_phone.trim() == '') {					
		$(".mobile_phone_cls").addClass("error_border");	
		return false;
	}
	else if(country_code == 'IN^91' && mobile_phone.trim().length < 10 || mobile_phone.trim().length > 10) {
		
		$('.mobile_phone_span').html('Mobile No should be 10 digit.');
		$(".mobile_phone_cls").addClass("error_border");		
		return false;
	}
	else if(country_code != 'IN^91' && mobile_phone.trim().length < 3 || mobile_phone.trim().length > 15) {		
		$('.mobile_phone_span').html('Mobile No should be 3 to 15 digit.');
		$(".mobile_phone_cls").addClass("error_border");		
		return false;
	}else if(country_code == 'IN^91' && String(mobile_phone).charAt(0) <5 && mobile_phone.trim().length == 10){
							
			$('.mobile_phone_span').html('Invalid Mobile Number.');
			$(".mobile_phone_cls").addClass("error_border");		
			return false;
	}	
	else{
		
		var post_pop_page_url = $("#pop_inquiry_from_page_url").val();
		
		if(country_code != 'IN^91') {
			
			$('.step_01').hide();
			$('.step_02').show();
			$('#auto_popup_postrequirment_send_inquiry').find(".country_code").val(mem_country_code);
			$('#auto_popup_postrequirment_send_inquiry').find(".selected-flag div").first().removeAttr("class").addClass("iti-flag "+mem_country_code.toLowerCase());
	        var cont_title = mem_country_code+": +"+mem_isd_code;
	        $('#auto_popup_postrequirment_send_inquiry').find(".selected-flag").removeAttr("title").attr("title",cont_title);
	        $('#auto_popup_postrequirment_send_inquiry').find(".selected-contID").val("+"+mem_isd_code);
	        $('#auto_popup_postrequirment_send_inquiry').find(".country_code_data").val(country_code);
	        $('#auto_popup_postrequirment_send_inquiry').find(".mobile_phone_data").val(mobile_phone);
	        
	        $.ajax({
				type: 'POST',
				url:  get_path()+'/Functions/pop_up_mobile_post_req_varify.php',
				dataType: "html",
				cache : false,
				data: {id:"update_mob_cache", mobile_phone:mobile_phone, country_code:country_code, post_page_url:post_pop_page_url},
				success: function(msg) {	
				}
			});

		}
		else {
			
			//$('#mobile_phone').val(mobile_phone);
			$('#auto_popup_postrequirment_send_inquiry').find(".mobile_phone_data").val(mobile_phone);
	
			var product_name = $('#looking_for_text_data').val();
			$.ajax({
				type: 'POST',
				url:  get_path()+'/Functions/pop_up_mobile_post_req_varify.php',
				dataType: "html",
				cache : false,
				data: {id:"send_mobile_no", mobile_no:mobile_phone, country_code:country_code, prod_name:product_name, post_page_url:post_pop_page_url},
				success: function(msg) {				
					msg = msg.trim();
					 
					if(msg=='Y'){
						$('.step_01').hide();
						$('.step_02').show();
						//$('#mobile_phone').val(mobile_phone);
						$('#auto_popup_postrequirment_send_inquiry').find(".mobile_phone_data").val(mobile_phone);
						$('#mob_verify_status').val('Y');
						$('#auto_popup_postrequirment_send_inquiry').find(".country_code_data").next('div').attr('readonly', 'readonly');
						//$('#country_code').next('div').prop('readonly', true);
						//$('#mobile_phone').prop('readonly', true);
						$('#auto_popup_postrequirment_send_inquiry').find(".mobile_phone_data").attr('readonly', 'readonly');
					}
					if(msg=='N'){
						$('.mobile_phone_span').html('OTP limit is over for this number !!!');
					}
					else if(msg=='O'){
						$('.mobile_phone_span').html('Enter Valid mobile number !!!');
					}else{
						var str_split=[];
						str_split = msg.split('~~');
						if(str_split[1] && str_split[0]){
							$('.looking_for_popup').hide();			
							$('.otp_verify_popup').show();
							$('#spn_mob_no').html(str_split[0]);
							
							if(str_split[2] && str_split[2] == 'Y'){
								$('#second_skip_pp').hide();
							}
							
							window.pagesense = window.pagesense || [];
							window.pagesense.push(['trackEvent', 'Continue']);
							
						}
					}
				},
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true
				
			});	
		
		}
		
	}
}

function verify_otp() {

	$('#otp_error_msg').html('');
	var inputs = document.getElementsByClassName( 'v_code' ),
	v_code  = [].map.call(inputs, function( input ) {
		return input.value;
	}).join('');
	
	if(v_code.trim().toString().length < 4) {
					
		$('#otp_error_msg').addClass('red');
		$('#otp_error_msg').html('Please Enter Verification Code !!!');
		return false;
	}
	else {
	
		var mobile_phone = trimx($("#first_mobile_phone").val());
		var country_code = $('#first_country_code').val();	
		$.ajax({
			type: 'POST',
			url: get_path()+'/Functions/pop_up_mobile_post_req_varify.php',
			dataType: "html",
			cache : false,
			data: {id:"verify_otp", otp: v_code,  mobile_phone:mobile_phone, country_code:country_code},
			success: function(msg) {
				//alert(msg);
				msg = msg.trim();
				if(msg=='N'){
					$('#otp_error_msg').html('Please Enter valid otp !!!');
					$('.v_code').val('');
				}else{
					$('.otp_product_div').html(msg);					
					$('.otp_verify_popup').hide();	
					$("#mobile_phone").val($("#first_mobile_phone").val());
					$('.step_01').hide();								
					$('.step_02').show();
					$('#mob_verify_status').val('Y');
					$('#country_code').next('div').prop('readonly', true);
					$('#mobile_phone').prop('readonly', true);
					
					window.pagesense = window.pagesense || [];
					window.pagesense.push(['trackEvent', 'Submit']);
				}
			},
			xhrFields: {
				
				withCredentials: true
			},
			crossDomain: true
		});
		return false;
		e.preventDefault();
		//If this method is called, the default action of the event will not be triggered.
	}
}

function resend_otp(){		
	$('#otp_error_msg').html('');
	$('.v_code').val('');
	var mobile_phone = trimx($("#first_mobile_phone").val());
	var country_code = $('#first_country_code').val();	
	$.ajax({
		type: 'POST',
		url: get_path()+'/Functions/pop_up_mobile_post_req_varify.php',
		dataType: "html",
		cache : false,
		data: {id:"resend_otp",  mobile_phone:mobile_phone, country_code:country_code},
		success: function(msg) {
			msg = msg.trim();
			if(msg=='N'){
				$('#otp_error_msg').html('OTP limit is over for this number !!!');
				$('#resend_spn').hide();
			}
			else{
				$('#resend_spn').prev('a').hide();
				$('#resend_spn').show();
			}
		},
		xhrFields: {
			
			withCredentials: true
		},
		crossDomain: true
	});
	return false;
	e.preventDefault();
	//If this method is called, the default action of the event will not be triggered.
}
function company_classified_post_req_form_v2(frm, formID) { 
	
	var buyer_login = $('#'+formID).find("input[name=lgn_member_status]").val();
	
	var validate = '1';
	
	if(typeof buyer_login  ===  "undefined") {
		validate = '1';
	}
	else if(buyer_login==1) {
		validate = '';
	}
	
	if(frm.subject.value.length==0) {
		alert("Please Enter Products/Services.");
        frm.subject.focus();
       	return false;
	}
	
	if(frm.subject.value.length<3) {
		
		alert("Please Enter Minimum 3 characters for Products/Services.");
		frm.subject.focus();
       	return false;
	}
			
	
	if(validate=='1') {
	
		var allCountries = [ [ "Afghanistan", "af", "93" ],
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
		
		var cont_id = $('#'+formID).find('.selected-contID').val();
		
		var mem_isd_code = cont_id.replace("+", "");
		var mem_country_code = "";
			
		for (var i = 0; i < allCountries.length; i++) {
	        var c = allCountries[i];
	      	if(c[2]==mem_isd_code) {
		      	mem_country_code = c[1].toUpperCase();
		      	break;
	      	}
	    }
	    
	    if(mem_country_code=='IN') {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','10');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','10');
		}
		else {
			$('#'+formID).find("input[name=mobile_phone]").attr('minlength','3');
			$('#'+formID).find("input[name=mobile_phone]").attr('maxlength','15');
		}
	    
	    var selected_country_code = mem_country_code+'^'+mem_isd_code;
	    
	    frm.country_code.value=selected_country_code;
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;
	   	
	    var validate_name =/^([a-zA-Z. ])+$/;
		/*
		if(frm.your_name.value.length==0) {
			
			show_user_detail(formID);
			alert("Please Enter Your Name ");
	        frm.your_name.focus();
	       	return false;
		} */
		if(frm.country_code.value.length==0) {
			
			show_user_detail(formID);
			alert("Please Select Your Country Code.");
	        frm.country_code.focus();
	       	return false;
		}
		if(frm.mobile_phone.value.length==0) {
			
			show_user_detail(formID);
			alert("Please Enter Your Mobile No.");
	        frm.mobile_phone.focus();
	       	return false;
		}
		if(frm.country_code.value=='IN^91' && (frm.mobile_phone.value.length<10 || frm.mobile_phone.value.length>10)) {
			
			show_user_detail(formID);
			alert("Mobile No. should be 10 Digits.");
	        frm.mobile_phone.focus();
	       	return false;
		}
		if(frm.country_code.value!='IN^91' && (frm.mobile_phone.value.length<3 || frm.mobile_phone.value.length>15)) {
			
			show_user_detail(formID);
			alert("Mobile No. should be 3 to 15 Digits.");
	        frm.mobile_phone.focus();
	       	return false;
		}
		if(frm.user_name.value.length==0 && frm.country_code.value!='IN^91') {
			
			show_user_detail(formID);
			alert("Please Enter Your Email ID ");
	        frm.user_name.focus();
	       	return false;
		}
		if(reg.test(frm.user_name.value) == false && frm.country_code.value!='IN^91') {
		
			show_user_detail(formID);
			alert('Invalid Email ID');
			frm.user_name.focus();
			return false;
		}
	}
	
	if(frm.detail_req.value.length==0) {
		
		alert("Describe Your Requirement");
		frm.detail_req.focus();
		return false;
	}
	
	if(frm.detail_req.value.length<10) {
		
		alert("Describe Your Requirement should be Minimum 10 characters");
		frm.detail_req.focus();
		return false;
	}
	
	if(formID=='product_detail_inq_form_step_1') {
		supplier_prod_inq_form_submit_v4 (formID);
	}
	else {
		//supplier_form_submit(formID);
	}
	
	return false;
}

function supplier_prod_inq_form_submit_v4 (formID) {
	
	if(document.domain=='192.168.1.104') {
		var ajax_url = '//192.168.1.104';
	}
	else if(document.domain.indexOf('betaei.in')>0) {
		var ajax_url = '//www.betaei.in';
	}	
	else {
		var ajax_url = '//www.exportersindia.com';
	}
	var action_url = ajax_url+"/ei_inquiry_form_v4.php";
		
	$.ajax({
	
		type: 'POST',
		url: action_url,
		dataType: "html",
		cache : false,
		data : $("#"+formID).serialize(), //Encode a set of form elements as a string for submission
						
		success: function(msg) {
			
			var split_msg = msg.split("~~");
			var inq_id = split_msg[1].replace(/\s/g,"");
			var inq_msg = split_msg[2];
			var insert_member_status = split_msg[3].replace(/\s/g,"");
			var sucess_status = split_msg[4].replace(/\s/g,"");
			
			if(sucess_status=='Y') {
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
							
				window.pagesense = window.pagesense || [];
				window.pagesense.push(['trackEvent', 'Submit']);
				
				/* google adword tracking code */
				gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
			}
			else if(sucess_status=='V') {
				
				$('#post_req_popup_ei').html(inq_msg); // sets the html to post_req_popup_ei
							
				window.pagesense = window.pagesense || [];
				window.pagesense.push(['trackEvent', 'Submit']);
				
				/* google adword tracking code */
				gtag('event', 'conversion', {'send_to': 'AW-980117963/61SACLWyrQcQy9Ot0wM'});
			}
			else {
				alert(inq_msg);
				$("#prod_detail_inq_submit_step_1").removeAttr("disabled", "disabled");
				return false;
			}
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
}

 
