function VanityPageLoadBanners(){
	
	var count_banner;
	count_banner = VanityBannersVars1.Types.length;
	
	//alert(count_banner);

	if (count_banner>0) {
		
		var rand_num = (count_banner-1);
				
		var i = getRandomArbitrary(0,rand_num);
		
		WriteHTMLVanityBanner('vanity_banner_div_id',VanityBannersVars1.FilesBasePath,VanityBannersVars1.HrefsBasePath,VanityBannersVars1.Types[i],VanityBannersVars1.Names[i],VanityBannersVars1.Dimentions[i],VanityBannersVars1.Hrefs[i], VanityBannersVars1.bannerType[i]);	
	}
}

function getRandomArbitrary(min_val, max_val) {
	
    return Math.round(Math.random() * (max_val - min_val) + min_val);
}

function WriteHTMLVanityBanner(id, fbp, hbp, t, n, d, h, x) {	
	
	if(d[0]=='') {
		
		d[0] = 468;
	}
	if(d[1]=='') {
		
		d[1] = 60;
	}
	
	var i_width = d[0];
	var i_height = d[1];
	
	if(t=='iframe') html=n;
	
	else if(t=='gif' || t=='jpg' || t=='jpeg' || t=='png') html='<a href="'+hbp+h+'" target="_blank"><img src="'+fbp+n+'" width="'+i_width+'" height="'+i_height+'"></a>'
	
	else if(t=='swf') html='\n<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" align="middle" width="'+i_width+'" height="'+i_height+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000">\n'+
	'<param name="movie" value="'+fbp+n+'?link='+hbp+h+'" />\n'+
	'<param name="quality" value="high" />\n'+
	'<param name="wmode" value="transparent" />\n'+
	'<embed src="'+fbp+n+'?link='+hbp+h+'" width="'+i_width+'" height="'+i_height+'" quality="high" align="middle" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" wmode="transparent" />\n'+
	'</object>\n';
	
	if(document.getElementById(id)) {
		
		document.getElementById(id).innerHTML=html;
	}
}

function vanity_load_header_htm(action_url) {
	
    var url = action_url+"/js_header.php?action_id=get_vanity_header&sid="+Math.random();
    
	$(document).ready(function() {
		
		$.ajax({
			type: 'POST',
			url: url,
			dataType: "html",
			data: { action_id: "get_vanity_header"},
			cache : false,
			success: function(newHTML) {
		
				$('#html_ajx_head_div_id').html(newHTML); // sets the html to popup_ei

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