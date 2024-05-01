$('document').ready(function(){	
	
	$( "#global_search_kword" ).autocomplete({
		
		source: BASE_URL+"/catg_search.php?action=get_main_serch_kword", // data should be in json format
		
		minLength: 3,		
		appendTo: "#index_global_search",
		
		select: function(event, ui) {
			
			$( "#global_search_kword" ).val(ui.item.value);
			
			 $( "#search-form" ).submit();
    	},
		open: function(){
		    $('.ui-autocomplete').css('width', '407px');
		}
	});
	
	$( "#subject" ).autocomplete({
		
		source: BASE_URL+"/catg_search.php?action=get_main_serch_kword", // data should be in json format
		
		minLength: 3,
	});	
	
	if(MEM_LOGIN_STATUS=='Y') {
		
		$.ajax({
		
			dataType:"json",
			type: 'POST',
			data: { action_type: "getUserDetailsEditable",page_type:'index_page'},
			url: MEM_BASE_URL+"/contact-us.htm", 
			success:function(result) {
	
				if(result.username != 'F') {
						
					$('#user-detail-div').css('display', 'none');		
					$('#user-contact-div').css('display', 'none').after(result.user_details_text);				
					$('#user_name').val(result.username);
					$('#user_name').trigger('onblur');		  		
				}				
			},
			xhrFields: {
				
		    	withCredentials: true
		  	}
		});
	}
	
	$('.user-detail-edit').live('click', function(){

		$('#user-detail-static-div').hide();		
		$('#user-detail-div').show();
		$('#user-contact-div').show();
	});
	
	$("input[type=tel]").intlTelInput({
		
		initialCountry: IP_COUNTRY_CODE
	});		
	
});

document.addEventListener("DOMContentLoaded", function(){
	
	$('document').ready(function(){
	 
		  $("#phone,.selected-contID").change( function(){
		      
			  var isd = parseInt($(".selected-contID").val(),10); // +91
			   
		      return validate_mobile_first_digit("phone", isd);
		     
		  });
	});  
}); 