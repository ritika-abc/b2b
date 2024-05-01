$(document).ready(function () {
 
  $("#btn_submit_complaint").on("click", function () {
     
    var regex_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,14})$/;	   	
    var regex_name =/^([a-zA-Z. ])+$/;
 
    var selectedOption = $("#complaintID").val();
 
    //error_complaintID
    $("#error_complaintID").hide();
    $("#error_complaintID").html("");

    if(selectedOption <1){
      $("#error_complaintID").show();
      $("#error_complaintID").html("Please select complaint type");
      $("#complaintID").focus();
      return false;
    }
    else {

      $("#error_complaintID").hide();
      $("#error_complaintID").html("");
 
    }
    
    if(selectedOption == 1 || selectedOption == 2 || selectedOption == 3 || selectedOption == 7){
      $("#complaint").show();
      $("#complaint4,#complaint5,#complaint6").hide();
      $("#complaint").focus();

      if($("#complaint").val().length==0){
        $("#error_complaint").show();
        $("#error_complaint").html("Please enter complaint");
        $("#complaint").focus();
        return false;
      }       
      else if($("#complaint").val().length <30 || $("#complaint").val().length >3000){
        $("#error_complaint").show();
        $("#error_complaint").html("Please enter Min:30 Characters, Max:3000 Characters");
        $("#complaint").focus();
        return false;
      }
      else {
        $("#error_complaint").hide();
        $("#error_complaint").html("");
      }
    } 
    else if(selectedOption == 4 ){ // IPR Complaints

      $("#complaint1,#complaint5,#complaint6").hide();
      $("#complaint4").show();

      iprComplaintOption = $("#iprComplaint").val();
 
      if(iprComplaintOption.length==0){
        $("#error_iprComplaint").show();
        $("#error_iprComplaint").html("Select IPR complaints for");
        $("#iprComplaint").focus();
        return false;
      }
      else {
        $("#error_iprComplaint").hide();
        $("#error_iprComplaint").html("");
      }

      //brandName
      /*
      
      if (iprComplaintOption === "Trademark Infringement") {
        $("#crImgURL").hide();
        $("#brandName").show();
      } 
      else if (iprComplaintOption === "Copyright Violation") {
        $("#crImgURL").show();
        $("#brandName").show();
      } 
      else if (iprComplaintOption === "Patent Infringement") {
        $("#crImgURL").hide();
        $("#brandName").show();
      } 
      else if (iprComplaintOption === "Design concern") {
        $("#crImgURL,#brandName").hide();
      } 
      else {
        $("#crImgURL").hide();
      }
      */

      if (iprComplaintOption === "Trademark Infringement" || iprComplaintOption === "Copyright Violation" || iprComplaintOption === "Patent Infringement" || iprComplaintOption === "Design concern" || iprComplaintOption === "Trade Secret Theft"){ 

        // brandName
        $("#brand_name").show();

        if($("#brand_name").val().length==0){

          $("#error_brand_name").show();
          $("#error_brand_name").html("Please enter brand name");
          $("#brand_name").focus();
          return false;
        }
        else {
          $("#error_brand_name").hide();
          $("#error_brand_name").html("");
        }

        //related_attachment
        $("#related_attachment").show();

        if($("#related_attachment").val().length==0){
            
            $("#error_related_attachment").show();
            $("#error_related_attachment").html("Attachment related to complaint is required");  
            $("#related_attachment").focus();  
            return false;
          }
          else {
            $("#error_related_attachment").hide();
            $("#error_related_attachment").html("");
          }
      }
      //court_order

      court_order = $("#court_order").val();

      if(court_order == 'Yes'){

        $("#court_order_attach").show();

        if($("#court_order_attach").val().length==0){
            
          $("#error_court_order_attach").show();
          $("#error_court_order_attach").html("Court order is required");
          $("#court_order_attach").focus();
          return false;
        }
        else {
          $("#error_court_order_attach").hide();
          $("#error_court_order_attach").html("");
        }
      }
      else {
        $("#court_order_attach").hide();
      }

      //infringing

      if($("#infringing").val().length==0){
            
        $("#error_infringing").show();
        $("#error_infringing").html("Add Infringing content URL");
        $("#infringing").focus();
        return false;
      }
      else {
        $("#error_infringing").hide();
        $("#error_infringing").html("");
      }

      //you_are

      if($("#you_are").val().length==0){
            
        $("#error_you_are").show();
        $("#error_you_are").html("Please select you are");
        $("#you_are").focus();
        return false;
      }
      else {
        $("#error_you_are").hide();
        $("#error_you_are").html("");
      }
      
      var you_are = $("#you_are").val();
 
      if(you_are == 'Agent'){
        //authorization_certificate
        $("#authorization_certificate").show();

        if($("#authorization_certificate").val().length==0){
            
          $("#error_authorization_certificate").show();
          $("#error_authorization_certificate").html("Authorization certificate is required");
          $("#authorization_certificate").focus();
          return false;
        }
        else {
          $("#error_authorization_certificate").hide();
          $("#error_authorization_certificate").html("");
        }            
      }
      else if(you_are == 'Licensee'){
        //license_certificate
        $("#license_certificate").show();

        if($("#license_certificate").val().length==0){            
          $("#error_license_certificate").show();
          $("#error_license_certificate").html("License certificate is required");
          $("#license_certificate").focus();
          return false;
        }
        else {
          $("#error_license_certificate").hide();
          $("#error_license_certificate").html("");
        }
      }
  
      var agree = $('input[name="agree"]:checked');
 
      if(agree.length==0){

        $("#error_agree").show();
        $("#error_agree").html("Please select agree");
        $("#agree").focus();
        return false;
      }
      else {
        $("#error_agree").hide();
        $("#error_agree").html("");
      }       
    }
    else if(selectedOption == 5 ){
 
      var buyer_name = $("#buyer_name").val();

      if(buyer_name.length==0){
        $("#error_buyer_name").show();
        $("#error_buyer_name").html("Please enter buyer name");
        $("#buyer_name").focus();
        return false;
      }
      else {
        $("#error_buyer_name").hide();
        $("#error_buyer_name").html("");
      }

      if(regex_name.test(buyer_name) == false) {
        $("#buyer_name").focus();
        $("#error_buyer_name").show();
        $("#error_buyer_name").html("Please enter valid buyer name");
        return false;
      }
      else {
        $("#error_buyer_name").hide();
        $("#error_buyer_name").html("");
      }

      //buyer_mobile

      var buyer_mobile = $("#buyer_mobile").val();

      if(buyer_mobile.length==0){
        $("#error_buyer_mobile").show();
        $("#error_buyer_mobile").html("Please enter buyer mobile");
        $("#buyer_mobile").focus();
        return false;
      }
      else {
        $("#error_buyer_mobile").hide();
        $("#error_buyer_mobile").html("");
      }

      if(buyer_mobile.length < 10 || buyer_mobile.length > 10){
        $("#buyer_mobile").focus();
        $("#error_buyer_mobile").show();
        $("#error_buyer_mobile").html("Please enter valid buyer mobile");
        return false;
      }
      else {
        $("#error_buyer_mobile").hide();
        $("#error_buyer_mobile").html("");
      }

      //buyer_product_name

      var buyer_product_name = $("#buyer_product_name").val();

      if(buyer_product_name.length==0){
        $("#error_buyer_product_name").show();
        $("#error_buyer_product_name").html("Please enter buyer product name");
        $("#buyer_product_name").focus();
        return false;
      }
      else {
        $("#error_buyer_product_name").hide();
        $("#error_buyer_product_name").html("");
      }
      
      //buyer_complaint_desc
      $("#complaint1,#complaint4,#complaint6").hide();
      $("#complaint5").show();

      $("#buyer_complaint_desc").show();

      if($("#buyer_complaint_desc").val().length==0){
        $("#error_buyer_complaint_desc").show();
        $("#error_buyer_complaint_desc").html("Please enter complaint");
        $("#buyer_complaint_desc").focus();
        return false;
      }
      else if($("#buyer_complaint_desc").val().length <30 || $("#buyer_complaint_desc").val().length >3000){
        $("#error_buyer_complaint_desc").show();
        $("#error_buyer_complaint_desc").html("Please enter Min:30 Characters, Max:3000 Characters");
        $("#buyer_complaint_desc").focus();
        return false;
      }
      else {
        $("#error_buyer_complaint_desc").hide();
        $("#error_buyer_complaint_desc").html("");
      }
  
      $("#buyer_name").show();

      if($("#buyer_name").val().length==0){
        $("#error_buyer_name").show();
        $("#error_buyer_name").html("Please enter complaint");
        $("#buyer_name").focus();
        return false;
      }
      else {
        $("#error_buyer_name").hide();
        $("#error_buyer_namec").html("");
      }  
    
      $("#buyer_mobile").show();

      if($("#buyer_mobile").val().length==0){
        $("#error_buyer_mobile").show();
        $("#error_buyer_mobile").html("Please enter complaint");
        $("#buyer_mobile").focus();
        return false;
      }
      else {
        $("#error_buyer_mobile").hide();
        $("#error_buyer_mobile").html("");
      }  
       
      $("#buyer_product_name").show();

      if($("#buyer_product_name").val().length==0){
        $("#error_buyer_product_name").show();
        $("#error_buyer_product_name").html("Please enter complaint");
        $("#buyer_product_name").focus();
        return false;
      }
      else {
        $("#error_buyer_product_name").hide();
        $("#error_buyer_product_name").html("");
      }  
       
    }
    else if(selectedOption == 6 ){

      //seller_name
      var seller_name = $("#seller_name").val();

      if(seller_name.length==0){
        $("#error_seller_name").show();
        $("#error_seller_name").html("Please enter seller name");
        $("#seller_name").focus();
        return false;
      }
      else {
        $("#error_seller_name").hide();
        $("#error_seller_name").html("");
      }

      //seller_mobile

      var seller_mobile = $("#seller_mobile").val();

      if(seller_mobile.length==0){
        $("#error_seller_mobile").show();
        $("#error_seller_mobile").html("Please enter seller mobile");
        $("#seller_mobile").focus();
        return false;
      }
      else {
        $("#error_seller_mobile").hide();
        $("#error_seller_mobile").html("");
      }

      if(seller_mobile.length < 10 || seller_mobile.length > 10){
        $("#seller_mobile").focus();
        $("#error_seller_mobile").show();
        $("#error_seller_mobile").html("Please enter valid seller mobile");
        return false;
      }
      else {
        $("#error_seller_mobile").hide();
        $("#error_seller_mobile").html("");
      }

      //seller_product_name

      var seller_product_name = $("#seller_product_name").val();

      if(seller_product_name.length==0){
        $("#error_seller_product_name").show();
        $("#error_seller_product_name").html("Please enter seller product name");
        $("#seller_product_name").focus();
        return false;
      }
      else {
        $("#error_seller_product_name").hide();
        $("#error_seller_product_name").html("");
      } 

      //seller_complaint_desc

      var seller_complaint_desc = $("#seller_complaint_desc").val();

      if(seller_complaint_desc.length==0){
        $("#error_seller_complaint_desc").show();
        $("#error_seller_complaint_desc").html("Please enter seller complaint description ");
        $("#seller_complaint_desc").focus();
        return false;
      }
      else if(seller_complaint_desc.length <30 || seller_complaint_desc.length >3000){
        $("#error_seller_complaint_desc").show();
        $("#error_seller_complaint_desc").html("Please enter Min:30 Characters, Max:3000 Characters");
        $("#seller_complaint_desc").focus();
        return false;
      }
      else {
        $("#error_seller_complaint_desc").hide();
        $("#error_seller_complaint_desc").html("");
      }
    }

    //attachment validation
    
    // list all files by class name attachment
    var files_arr = $('.attachment');

    for (var i = 0; i < files_arr.length; i++) {
 
      if (files_arr[i].value.length >0) {
 
        var file_size = files_arr[i].files[0].size;
        var file_type = files_arr[i].files[0].type;
        var file_name = files_arr[i].files[0].name;
        var file_tmp_name = files_arr[i].files[0].tmp_name;
        var file_error = files_arr[i].files[0].error;
         
        //attach_buyer_complaint[]

        var input_name = files_arr[i].name;

        // remove [] from input_name
        input_name = input_name.replace("[]", "");

        var error_handle = 'error_' + input_name;

        if(file_error > 0){

            $("#"+error_handle).show();
            $("#"+error_handle).html("File Error ");
            return false;
        }
        else {

            var file_ext = file_name.split('.').pop().toLowerCase();

            var allowed_ext = ["jpg", "jpeg", "png", "pdf"]; // , "gif"
            // Attach a File Note: Max file size 1 MB. Upload only .jpeg, .jpg, .gif, .png and pdf files 
 
            if($.inArray(file_ext, allowed_ext) == -1){
              $("#"+error_handle).show();
              // $("#"+error_handle).html("File Type Not Allowed ");
              $("#"+error_handle).html("only PDF, PNG, JPG & JPEG are allowed");
                return false;
            }
            else if(file_size > 1048576){
              $("#"+error_handle).show();
              $("#"+error_handle).html("File Size Exceeds 1 MB ");
                return false;
            }
            else {
              $("#"+error_handle).hide();
              $("#"+error_handle).html("");
            }
        }
           
      }        
    }
    // end of attachment validation
    

    var member_id = $("#member_id").val();
 
    if(member_id < 1){
             
      var email = $.trim($("#contact_email").val());
       
      if(email.length==0){
        $("#contact_email").focus();
        $("#error_contact_email").show();
        $("#error_contact_email").html("Please enter email");       
        return false;
      }
      else {
        $("#error_contact_email").hide();
        $("#error_contact_email").html("");
      }
      
      if(regex_email.test(email) == false) {
        $("#contact_email").focus();
        $("#error_contact_email").show();
        $("#error_contact_email").html("Please enter valid email");       
        return false;
      }
      else {
        $("#error_contact_email").hide();
        $("#error_contact_email").html("");
      }
 
      var contact_full_name = $.trim($("#contact_full_name").val());
      if(contact_full_name.length==0){
        $("#contact_full_name").focus();
        $("#error_contact_full_name").show();
        $("#error_contact_full_name").html("Please enter full name");       
        return false;
      }
      else {
        $("#error_contact_full_name").hide();
        $("#error_contact_full_name").html("");
      }
 
      if(regex_name.test(contact_full_name) == false) {
        $("#contact_full_name").focus();
        $("#error_contact_full_name").show();
        $("#error_contact_full_name").html("Please enter valid full name");       
        return false;
      }
      else {
        $("#error_contact_full_name").hide();
        $("#error_contact_full_name").html("");
      }

      var country = $.trim($("#country").val());

      if(country.length==0){
        $("#country").focus();
        $("#error_country").show();
        $("#error_country").html("Please select country");
        return false;
      }
      else {
        $("#error_country").hide();
        $("#error_country").html("");
      }
  
      var contact_mobile = $.trim($("#mobile_phone").val());

      if(contact_mobile.length==0){
        $("#mobile_phone").focus();
        $("#error_mobile_phone").show();
        $("#error_mobile_phone").html("Please enter mobile");       
        return false;
      }
      else {
        $("#error_mobile_phone").hide();
        $("#error_mobile_phone").html("");
      }

      var country_code = $("#country").val();

      if(country_code == 'IN^91'){

          if(contact_mobile.length < 10 || contact_mobile.length > 10){
            $("#mobile_phone").focus();
            $("#error_mobile_phone").show();
            $("#error_mobile_phone").html("Please enter 10 digit valid mobile");       
            return false;
          }
          else {
            $("#error_mobile_phone").hide();
            $("#error_mobile_phone").html("");
          }
      }
      else {

          if(contact_mobile.length < 8 || contact_mobile.length > 15){
            $("#mobile_phone").focus();
            $("#error_mobile_phone").show();
            $("#error_mobile_phone").html("Please enter valid mobile");       
            return false;
          }
          else {
            $("#error_mobile_phone").hide();
            $("#error_mobile_phone").html("");
          }
      }
  
      //contact_city
      var contact_city = $.trim($("#city").val());
      if(contact_city.length==0){
        $("#city").focus();
        $("#error_city").show();
        $("#error_city").html("Please enter city");       
        return false;
      }
      else {
        $("#error_city").hide();
        $("#error_city").html("");
      }

      if(regex_name.test(contact_city) == false) {
        $("#city").focus();
        $("#error_city").show();
        $("#error_city").html("Please enter valid city");       
        return false;
      }
      else {
        $("#error_city").hide();
        $("#error_city").html("");
      }     
    }    
 
    formData = new FormData();  
    
    var files = $('.attachment');

    for (var i = 0; i < files.length; i++) {

        if (files[i].value == "" || files[i].value == null) {
        
        }
        else {
            formData.append(files[i].name, files[i].files[0]);
        }
    }

    var formSerializeArray = $("#frm_complaint").serializeArray();
 
    for (var i = 0; i < formSerializeArray.length; i++) {

        formData.append(formSerializeArray[i].name, formSerializeArray[i].value) 
    }
     
    var action_url = $("#main_server_baseurl").val() +'/complaint_submit.php';

    //console.log(" action_url = " + action_url);

    //$("#btn_feedback_suggession").hide();
    $("#frm_complaint").hide();    
    $("#ajax_response").hide();
    $("#ajax_response").html('');
    $("#loader").show();

    $.ajax({

        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        cache: false,
        url: action_url,
        //xhrFields: { withCredentials: true },
        success: function (response) {
          
          $("#loader").hide(); 
          $("#select_right_option").hide();

          $("#frm_complaint").show();
          //ajax_response
          $("#ajax_response").show();
          $("#ajax_response").html(response);

         // console.log(response);

          //{"feedback_slno":1068,"error":"N","message":"Thanks","member_id":"785566299","attach_file":"dynamic \/ feedback_form_attach\/1068_1705663619_500x500.png"}

          var resp_obj = JSON.parse(response);
 
          // response = {"member_id":"785573973","feedback_slno":1228,"error_message":[]} 
 
          if(resp_obj.error_message.length == 0 && resp_obj.feedback_slno>0 && resp_obj.member_id){ // no error

            $("#ajax_response").hide();
            $("#ajax_response").html('');
            $("#loader").hide();

            $("#frm_complaint").hide();
            $("#frm_complaint")[0].reset();

            //$("#btn_feedback_suggession").show();
            $("#thanks").show();
 
          }         
          else {
            $("#ajax_response").show();
            $("#ajax_response").html('<ul class="red">' + resp_obj.error_message + '</ul>');
            $("#loader").hide();
            $("#frm_complaint").show();
            $("#thanks").hide();
          }
        }
      });
    //
     
   
  });

  $("#complaintID").on("change", function () {
    // Get the selected option value
    var selectedOption = $(this).val();
    // Use a series of if-else statements or an object lookup
 
    if(selectedOption >0){ 
      $("#error_complaintID").hide();
      $("#error_complaintID").html(""); 
    }
 
    switch (selectedOption) {
      case "1":
      case "2":
      case "3":
      case "7":
        $("#complaint1").show();
        $("#complaint4,#complaint5,#complaint6").hide();
        break;      
      case "4":
        $("#complaint4").show();
        $("#complaint1,#complaint5,#complaint6").hide();
        break;
      case "5":
        $("#complaint5").show();
        $("#complaint1,#complaint4,#complaint6").hide();
        break;
      case "6":
        $("#complaint6").show();
        $("#complaint1,#complaint4,#complaint5").hide();
        break;       
      default:$("#complaint1,#complaint4,#complaint5,#complaint6").hide();
    }
  
  });

  $("#iprComplaint").on("change", function () {

    var iprComplaintOption = $(this).val();
 
    if (iprComplaintOption === "Trademark Infringement") {
      $("#crImgURL").hide();
      $("#brandName").show();
    } 
    else if (iprComplaintOption === "Copyright Violation") {
      $("#crImgURL").show();
      $("#brandName").show();
    } 
    else if (iprComplaintOption === "Patent Infringement") {
      $("#crImgURL").hide();
      $("#brandName").show();
    } 
    else if (iprComplaintOption === "Design concern") {
     // $("#brandName").hide();
      $("#crImgURL").hide();
    } 
    else {
      $("#crImgURL").hide();
    }
  });
  $("#casMoreAttachment").on("click", function () {
    $("#casAttachment").append('<li><input type="file" name="attach_seller_complaint[]" class="attachment"  ></li>');
  });
  $("#cabMoreAttachment").on("click", function () {
    $("#cabAttachment").append('<li><input type="file" class="attachment" name="attach_buyer_complaint[]" ></li>');
  });
});
