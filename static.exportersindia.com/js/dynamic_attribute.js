function get_attribute(t){$(".class_dynamic_attr").remove(),$("#loader_attribute").show(),$username_val=$("#baseurl").val(),action_url=$("#mem_baseurl").val(),action_url=action_url+"/attribute_post_requirement.php?catg_id="+t,$.ajax({type:"POST",url:action_url,dataType:"html",cache:!1,success:function(t){""!=t&&$(t).insertAfter("#order_quantity"),$("#loader_attribute").hide()},xhrFields:{withCredentials:!0}})}$(document).ready(function(){action_url=$("#baseurl").val(),$("#subject_post_req").autocomplete({source:action_url+"/catg_search.php?action=get_main_serch_kword",minLength:3,select:function(t,e){return $("#subject_post_req").val(e.item.value),get_attribute(e.item.value),!1}})});