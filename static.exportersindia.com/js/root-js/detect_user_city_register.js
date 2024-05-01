function gl_detect_city_register() {
	
	//console.log("document.domain = " + document.domain);
	//document.domain = 192.168.1.104 
	
	var img_src = "//static.exportersindia.com/ajax-loader.gif";
	
	var img_tag = "<img src='"+img_src+"' height='18'>";
	
	//$('#near_me_id').html(img_tag);
	
	if(document.domain.indexOf('exportersindia.com')>0 ) { 
		 
		if (navigator.geolocation) {
			 
			navigator.geolocation.getCurrentPosition(function(position) {
		
				var latitude = position.coords.latitude; 			
				var longitude = position.coords.longitude; 
				  
				call_ajax(latitude, longitude);
				
			});
		}
		else {
			alert("Geolocation is not supported by this browser.");
		}
	}
	else {
		 
		// Kirti Nagar, Delhi
		var latitude = '28.6504091';
		var longitude = '77.1444268';
		
		//phaphamau-allahabad, UP
		//var latitude = '25.5376867';
		//var longitude = '81.8716058';
		
		//Mumbai
		//var latitude = '19.076090';
		//var longitude = '72.877426';
		
		call_ajax(latitude, longitude);		  	 
	}
}

function call_ajax(latitude, longitude){
	
	var mem_url = $('#mem_baseurl').val();
	 
	var ajax_url = mem_url+"/gl_detect_city_register.php?g_latitude="+latitude+"&g_longitude="+longitude;
	   
	$.ajax({
		type: 'POST',
		url:ajax_url,
		dataType: "html",
		//data: {g_latitude: latitude, g_longitude: longitude},
		cache : false,
		success:function(result){
			 
			//msg = result.replace(/\s/g,"");
			msg = result.trim();
			
			//console.log("msg = "+msg);
			
			$('#near_me_id').html("");
			$('#location').val("");
			$('#location_tree').val("");
			$("#li_location").removeClass("valid");
			
			if(msg=='NORESULT') {
				 
			}
			else{
				var result=msg.split('~~');
				$('#location').val(result[0]);
				$('#location_tree').val(result[1]);	

				$("#li_location").addClass("valid");
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
}
 

