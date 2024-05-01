(function($){
	$(window).scroll(function(){
		if($('#inquiryPaging').length) SendInquiryAndPaging(); ////
	})

	$(function(){ /* document.ready starts */
		var $search_form = $('#search-form')
			$search_select = $search_form.find('#search-select'),
			$search_select_li = $search_select.find('li'),
			$search_select_value = $search_select.find('#search-select-value'),
			$search_select_hidden = $search_form.find('#search-select-hidden');
		
		if($search_select_li.length){
			$search_select_li.click(function(){
				var val_id = $(this).attr('id');
				var value = $(this).data('jq-value');
				
				if(val_id=='comp') {place_holder_val='Enter company name to search'}
				else { place_holder_val='Enter product / service to search'}
				$('#global_search_kword').attr("placeholder", place_holder_val);
				
				$search_select_value.text(value);
				$search_select_hidden.val(val_id);
				$(this).parent().fadeOut(100);
			})		
		}
		
		
		if($('#search-keywords').length){
			$('#search-keywords').autocomplete({
				source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ],
				position : { my : "right top", at: "right bottom+5" }
			})
		}
		
		if($('#inquiryPaging').length) SendInquiryAndPaging();

		(function(){ /* Signin form show / hide */
			var signin_anchors = $('a[href^="#signin"]'),
				signin_form = $(signin_anchors.attr('href'));
			
			if(!signin_anchors.length) return;
			
			signin_anchors.each(function(){
				$(this).on('click',function(event){
					var $this = $(this)
						xypos = $(this).offset(),
						target_arrowclass = $(this).data('target-arrowclass'),
						form_xpos = $(this).data('target-align') ? xypos.left + parseInt($(this).data('target-align')) : xypos.left,
						form_ypos = $(this).data('target-valign') ? xypos.top + parseInt($(this).data('target-valign')) : xypos.top;
					
					if(target_arrowclass) signin_form.find('ul li:eq(0)').removeClass().addClass(target_arrowclass)
					
					signin_form
						.css({
							'left'		:	form_xpos,
							'top'		:	form_ypos,
							zIndex		:	11
						})
						.toggle()
					
					return false
				})
			})
			
			signin_form.click(function(event){return false})
			
			$(document.body).on('click', function(){
				if(signin_form.is(':visible')) signin_form.hide();
			})
		 /* Signin form show / hide */})()
		
		
	
	
		// Common plugin initialization starts
		var $applychildrenscrollerplugin = $('[data-plugin~="childrenscroller"]');
		for(i=0, j=$applychildrenscrollerplugin.length; i<j; i++){
			$($applychildrenscrollerplugin[i]).childrenscroller();
		}
		
		var $applysliderplugin = $('[data-plugin~="slider"]');
		for(i=0, j=$applysliderplugin.length; i<j; i++){
			$($applysliderplugin[i]).slider();
		}
		
		var $applyslider2plugin = $('[data-plugin~="slider2"]');
		for(i=0, j=$applyslider2plugin.length; i<j; i++){
			$($applyslider2plugin[i]).slider2();
		}
		
		var $applydropdownplugin = $('[data-plugin~="dropdown"]');
		for(var i=0, j=$applydropdownplugin.length; i<j; i++){
			$($applydropdownplugin[i]).dropdown();
		}
		
		var $applycustomfancyboxplugin = $('a[data-plugin~="fancybox"]');
		for(var i=0, j=$applycustomfancyboxplugin.length; i<j; i++){
			$($applycustomfancyboxplugin[i]).customfancybox();
		}
		
		var $applytabbingplugin = $('[data-plugin~="tabbing"]');
		for(var i=0, j=$applytabbingplugin.length; i<j; i++){
			$($applytabbingplugin[i]).tabbing();
		}
		
		var $applybannerplugin = $('[data-plugin~="banner"]');
		for(var i=0, j=$applybannerplugin.length; i<j; i++){
			$($applybannerplugin[i]).banner()
		}
		
		var $applytooltipplugin = $('[data-plugin~="tooltip"]');
		for(var i=0, j=$applytooltipplugin.length; i<j; i++){
			$($applytooltipplugin[i]).tooltip({
				tooltipClass : 'xsmall',
				position: { my: "center bottom", at: "center top" }
			})
		}
		
		var $applybacktotopplugin = $('[data-plugin~="backtotop"]');
		for(var i=0, j=$applybacktotopplugin.length; i<j; i++){
			$($applybacktotopplugin[i]).backtotop()
		}
		
		var $applyshowpasswordplugin = $('[data-plugin~="showpassword"]');
		for(var i=0, j=$applyshowpasswordplugin.length; i<j; i++){
			$($applyshowpasswordplugin[i]).showpassword()
		}
		
		var $applytextareaplugin = $('[data-plugin~="textarea"]');
		for(var i=0, j=$applytextareaplugin.length; i<j; i++){
			$($applytextareaplugin[i]).textarea()
		}

		var $applycustombtplugin = $('[data-plugin~="bt"]');
		for(var i=0, j=$applycustombtplugin.length; i<j; i++){
			$($applycustombtplugin[i]).custombt()
		}

		$('*[data-ph-hindi]').HindiPlaceholder();
		// Common plugin initialization ends
	/* document.ready ends */ })
	
	
	

	
	$.fn.dropdown=function(){ /* dropdown plugin starts */
		if(!this.length) return;
		var $this = $(this)
		
		var defaults = {
				children			:	'li',
				childrenclass		:	'hover',
				iconclass			:	'',
				iconactiveclass		:	'',
				pause				:	250,
				speed				:	250,
				mouseevent			:	'mouseenter',
				hideeffect			:	'slideUp',
				hideduration		:	0,
				showeffect			:	'slideDown',
				showduration		:	0
			},
			
			options = $.extend({}, defaults, $(this).data('dropdown-settings')),
			
			$children = $(this).children(options.children);
		
		return $children.each(function(){
			var $child			=	$(this),
				timeoutId		=	null;
			
			if(options.iconclass.length && $(this).children().not('a').length) $(this).children('a').append('<i class=" ' + options.iconclass + ' "></i>');			
			var arrow = $(this).children('a').contents(':eq(1)');
			
			
			$(this).on(options.mouseevent, function(){
				if(arrow.length && options.iconactiveclass.length) arrow.removeClass(options.iconclass).addClass(options.iconactiveclass);
				if($(this).children('ul').length){
					$(this).addClass(options.childrenclass).children('ul').stop(true,true)[options.showeffect](options.speed);
				}
				
				if(timeoutId != 'undefined'){
					clearTimeout(timeoutId);
					timeoutId = null;
				}
			})
			
			$(this).on('mouseleave', function(){
				timeoutId = setTimeout(function(){
					timeoutId = null;
					
					//if(!$child.data('fixedClass') && options.activeClass.length) $child.removeClass(options.activeClass);					
					if(arrow.length && options.iconactiveclass.length) arrow.removeClass(options.iconactiveclass).addClass(options.iconclass);					
					$child.children('ul').stop(true,true)[options.hideeffect](options.speed, function(){
						$child.removeClass(options.childrenclass)
					});
				},options.pause)
			})
		})
	/* dropdown plugin starts */ }
	
	
	
	
	$.fn.tabbing=function(){ /* tabbing plugin starts */
		if(!this.length) return;
		var $this = $(this);
		
		var defaults = {
			headings			:	'> ul:eq(0) > li',
			anchors				:	'> a:first-child',
			datas				:	'> ul:eq(1) > li',
			active				:	0,
			mouseevent			:	'click',
			hideeffect			:	'hide',
			hideduration		:	0,
			showeffect			:	'show',
			showduration		:	0
		};
		
		var options = $.extend({}, defaults, $(this).data('tabbing-settings'));
		
		var headings			=	$(options.headings, $(this)),
			anchors				=	$(options.anchors, headings),
			datas				=	$(options.datas, $(this)),
			active				=	options.active,
			hac					=	$(headings).eq(active).attr('class'), //headingsActiveClasses
			hic					=	$(headings).not(':eq(' + active + ')').attr('class') || false,
			aac					=	$(anchors).eq(active).attr('class'), //anchorsActiveClasses
			aic					=	$(anchors).not(':eq(' + active + ')').attr('class') || false;
		
		if(headings.length < 2) return;
		var headingNode = headings[0].nodeName.toLowerCase();
		
		
		this.each(function(){
			anchors.on(options.mouseevent, function(event){
				event.preventDefault();
				var index = $(this).closest(headingNode).prevAll().length;
				
				headings.removeAttr('class').addClass(hic);
				headings.eq(index).removeAttr('class').addClass(hac)
				anchors.removeAttr('class').addClass(aic);
				$(this).removeAttr('class').addClass(aac);
				
				datas.filter(':visible')[options.hideeffect](options.hideduration).end().eq(index)[options.showeffect](options.showduration)//[showeffect]();
			})
		});
	/* tabbing plugin ends */ };
	
	
	
	$.fn.childrenscroller=function(){ /* childrenscroller plugin starts */
		if(!this.length) return;
		var $this = $(this);
		var defaults = {
			delay				:	1000,
			pause				:	1000,
			speed				:	500
		};
		
		var options = $.extend({}, defaults, $(this).data('childrenscroller-settings'))
		
		var interval_id			=	null,
			pause				=	false
			height				=	$(this).height(),
			tags				=	$(this).children();
		
		return this.each(function(){
			var start = function (){
				var child_height = $this.children().eq(0).outerHeight(true);

				if ($this.height() - $this.scrollTop() >= child_height){
					interval_id = setInterval(scroll, options.pause);
				}
			};

			
			var scroll = function (){
				if (pause) {return;}
				clearInterval(interval_id);
				var child_height = $this.children().eq(0).outerHeight(true);
				
				$this.animate({scrollTop:child_height}, options.speed, function(){
					$this.append($this.children().eq(0))
					$this.scrollTop(0);
					setTimeout(start, options.pause);
				})
			};
			
			$this.on("mouseover", function (){pause = true;});
			$this.on("mouseout", function (){pause = false;});
			setTimeout(start, options.delay);
		})
	/* childrenscroller plugin ends */ };
	
	
	
	$.fn.slider = function(){ /* slider plugin starts */
		if(!this.length) return;
		var $this = $(this),
			defaults = {
				globalvars			:	false,

				animation			:	{
					auto			:	false, // true | false
					delay			:	2000, 
					effect			:	'slide', // slide | scroll
					loop			:	true, // true | false | alternate
					orientation		:	'horizontal', // horizontal | vertical
					speed			:	500
				},
				
				controllers			:	{
					prevbtn			:	'.prev',
					nextbtn			:	'.next',
					disableclasses	: 	'dul ts0 cd alpha50'
				},

				elements			:	{
					main			:	'> ul',
					children		:	'> ul > li',
					visible			: 	5
				},

				height				:	'',
				width				:	''
			}

		var	options = $.extend(true, {}, defaults, $(this).data('slider-settings'));

		var orientation				=	options.animation.orientation,
			effect					=	options.animation.effect,
			auto					=	options.animation.auto,
			loop					=	options.animation.loop,
			speed					=	options.animation.speed,
			delay					=	options.animation.delay,
			$main					=	$(options.elements.main, $(this)),
			$children				=	$(options.elements.children, $(this)),
			visiblechildren			=	options.elements.visible,
			$prevbtn				=	$(options.controllers.prevbtn, $(this)),
			$nextbtn				=	$(options.controllers.nextbtn, $(this)),
			disableclasses			=	options.controllers.disableclasses,
			childrenlength			=	$children.length;
			childrenwidth			=	$children.outerWidth(true);
			availablewidth			=	$(this).innerWidth(),
			maxheight				=	0,
			intervalid				=	'',
			timeoutid				=	'',
			pause					=	false,
			minleft					=	0,
			maxleft					=	(childrenlength - visiblechildren) * childrenwidth;



		if(options.height) maxheight = parseInt(options.height)
		else {
			$children.each(function(){
				maxheight			=	Math.max(maxheight, $(this).height())
			})
		}

		//alert(maxheight)

		return this.each(function(){
			$main.wrap($('<div class="pr"><div class="pa"></div></div>'));
			var $relative = $(this).find('> .pr');
			var $absolute = $(this).find('> .pr > .pa');

			$relative.addClass('oh').css({
				'height' : maxheight+'px'
			})

			$absolute.css({
				'left' : 0,
				'top' : 0,
				'height' : maxheight+'px',
				'width' : childrenwidth * $children.length
			})

			function animateslider(plusminus){
				var left = parseInt($absolute.css('left'))					

				if(plusminus && plusminus === '+') $absolute.animate({'left' : left += childrenwidth}, speed)
				else $absolute.animate({'left' : left -= childrenwidth}, speed)

				if(left == minleft) $prevbtn.addClass(disableclasses)
				if(left == -maxleft) $nextbtn.addClass(disableclasses)				
			}

			$prevbtn.on('click', function(event){
				event.preventDefault();
				$nextbtn.removeClass(disableclasses);
				if(parseInt($absolute.css('left')) == minleft) return;
				animateslider('+');
				
			})

			$nextbtn.on('click', function(event){
				event.preventDefault();
				$prevbtn.removeClass(disableclasses);
				if(parseInt($absolute.css('left')) == -maxleft) return;
				animateslider();
			})

			$relative.on("mouseover", function (){pause = true;});
			$relative.on("mouseout", function (){pause = false;});

		})
	/* slider plugin ends */ };
	
	$.fn.slider2 = function(){ /* slider2 plugin starts */
		if(!this.length) return;
		var $this = $(this),
			defaults = {
				globalvars			:	false,

				animation			:	{
					auto			:	false, // true | false
					delay			:	2000, 
					effect			:	'slide', // slide | scroll
					loop			:	true, // true | false | alternate
					orientation		:	'horizontal', // horizontal | vertical
					speed			:	2000
				},
				
				controllers			:	{
					prevbtn			:	'.prev',
					nextbtn			:	'.next',
					disableclasses	: 	'dul ts0 cd alpha50'
				},

				elements			:	{
					main			:	'> ul',
					children		:	'> ul > li',
					visible			: 	1
				},

				height				:	'',
				width				:	''
			}

		var	options = $.extend(true, {}, defaults, $(this).data('slider22-settings'));

		var orientation				=	options.animation.orientation,
			effect					=	options.animation.effect,
			auto					=	options.animation.auto,
			loop					=	options.animation.loop,
			speed					=	options.animation.speed,
			delay					=	options.animation.delay,
			$main					=	$(options.elements.main, $(this)),
			$children				=	$(options.elements.children, $(this)),
			visiblechildren			=	options.elements.visible,
			$prevbtn				=	$(options.controllers.prevbtn, $(this)),
			$nextbtn				=	$(options.controllers.nextbtn, $(this)),
			disableclasses			=	options.controllers.disableclasses,
			childrenlength			=	$children.length;
			childrenwidth			=	$children.outerWidth(true);
			availablewidth			=	$(this).innerWidth(),
			maxheight				=	0,
			intervalid				=	'',
			timeoutid				=	'',
			pause					=	false,
			minleft					=	0,
			maxleft					=	(childrenlength - visiblechildren) * childrenwidth;



		if(options.height) maxheight = parseInt(options.height)
		else {
			$children.each(function(){
				maxheight			=	Math.max(maxheight, $(this).height())
			})
		}

		//alert(maxheight)

		return this.each(function(){
			$main.wrap($('<div class="pr"><div class="pa"></div></div>'));
			var $relative = $(this).find('> .pr');
			var $absolute = $(this).find('> .pr > .pa');

			$relative.addClass('oh').css({
				'height' : maxheight+'px'
			})

			$absolute.css({
				'left' : 0,
				'top' : 0,
				'height' : maxheight+'px',
				'width' : childrenwidth * $children.length
			})

			function animateslider2(plusminus){
				if($absolute.is(':animated')) return;
				var left = parseInt($absolute.css('left'))					

				if(plusminus && plusminus === '+') $absolute.animate({'left' : left += childrenwidth}, speed)
				else $absolute.animate({'left' : left -= childrenwidth}, speed)

				if(left == minleft) $prevbtn.addClass(disableclasses)
				if(left == -maxleft) $nextbtn.addClass(disableclasses)				
			}

			$prevbtn.on('click', function(event){
				event.preventDefault();
				$nextbtn.removeClass(disableclasses);
				if(parseInt($absolute.css('left')) == minleft) return;
				animateslider2('+');
				
			})

			$nextbtn.on('click', function(event){
				event.preventDefault();
				$prevbtn.removeClass(disableclasses);
				if(parseInt($absolute.css('left')) == -maxleft) return;
				animateslider2();
			})

			$relative.on("mouseover", function (){pause = true;});
			$relative.on("mouseout", function (){pause = false;});

		})
	/* slider2 plugin ends */ }
	
	$.fn.customfancybox = function(){ /* custom fancybox plugin starts */ 
		if(!this.length) return;
		
		var $this					=	$(this),
			href					= 	$(this).attr('href'),
			staticRegExp			= 	/.(html?|php)/i,
			imgRegExp				=	/.(gif|ico|jpe?g|png|svgz?|webp)$/i, // images formats
			ytRegExp				=	/[^\.]\.(com)\s*/i; // youtube
			
		var defaults = {
			fitToView				:	false,
			autoSize    			:	false,
			autoResize				:	false,
			helpers					:	{
				overlay				:	{
					closeClick		:	false
				}
			}
		}
			
			
		
		return this.each(function(){
			if(staticRegExp.test(href)){
				$.extend(defaults, {
					'type'	: 'iframe',
					'fitToView' : false
				})
			}
			
			else if(ytRegExp.test(href)){
				$.extend(defaults, {
					'autoScale'		: false,
					'transitionIn'	: 'none',
					'transitionOut'	: 'none',
					'title'			: this.title,
					'width'			: 450,
					'height'		: 300,
					'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
					'type'			: 'swf',
					'swf'			: {
						'wmode'		: 'transparent',
						'allowfullscreen'	: 'true'
					}
				})
			}
			
			
			var options = $.extend(true, {}, defaults, $(this).data('fancybox-settings'));
			
			if(!staticRegExp.test(href) && ytRegExp.test(href)){
				$(this).click(function(event){
					event.preventDefault();
					$.fancybox(options)
				})
			}
			
			else $(this).fancybox(options);
		})
	/* custom fancybox plugin starts */ }
	
	
	
	$.fn.banner = function(){ /* banner plugin starts */
		if(!this.length) return;
		$this = $(this);
		
		var defaults = {
				delay			:	0,
				effect			:	'hide',
				pause			:	2000,
				speed			:	1250
			},
			
			options = $.extend({}, defaults, $(this).data('banner-settings')),
			
			interval_id = null,
			children = $(this).children(),
			len = children.length,
			cnt = 0,
			pause = false;
		
		//alert(len)
		//alert(typeof options.delay)
					
		
		return this.each(function(){
			var start = function(){ interval_id = setInterval(animate, options.pause)}
			
			var animate = function(){
				if(pause) return;
				clearInterval(interval_id)
				if(options.effect == 'show' || options.effect == 'hide') showHide();
				if(options.effect == 'scroll' || options.effect == 'slideIn' || options.effect == 'slideOut') scroll();
				setTimeout(start, options.delay);
			}
			
			setTimeout(start, options.delay);
			$this.on('mouseenter', function(){pause = true})
			$this.on('mouseleave', function(){pause = false})
			
			
			var showHide = function(){
				$(children).eq(cnt).hide();
				cnt = (cnt == len-1) ? 0 : ++cnt;
				$(children).eq(cnt).show();
			}
			
			
			var scroll = function(){
				var height = $this.height();
				$this.addClass('oyh');
				children.show();
				$this.animate({scrollTop : height}, options.speed, function(){
					$this.append($this.children().eq(0));
					$this.scrollTop(0);
				})
			}
		})
	/* banner plugin ends */ }
	
	
	
	$.fn.backtotop = function(){ /* BackToTop plugin starts */ 
		if(!this.length) return;
		
		return this.each(function(){
			$(this).click(function(event){
				event.preventDefault();
				$('html, body').animate({scrollTop:0}, 500, 'linear');
			})
		})
	/* BackToTop plugin ends */ }
	
	
	
	$.fn.showpassword = function(){ /* show password plugin starts - toggle input type to text|password */ 
		if(!this.length) return;
		$this = $(this);
		
		var defaults = {}

		var options = $.extend({}, defaults, $(this).data('showpassword-settings'));
		
		return this.each(function(){
			var target = options.target.replace('#', ''),
				id = document.getElementById(target);

			$(this).click(function(event){
				if(id.type === "password"){
					id.type = 'text';
				}
				else {
					id.type = 'password';
				}
			})
		})
	/* show password plugin ends */ }



	$.fn.textarea = function(){ /* textarea plugin starts */
		if(!this.length) return;
		$this = $(this);

		var defaults = {
			maxlength : $(this).attr('maxlength')
		}
	


		var options = $.extend({}, defaults, $(this).data('textarea-settings')),
			indicator = $(options.indicator),
			maxlength = parseInt(options.maxlength);

		return this.each(function(){
			$(this).on('keyup', function(){
				var v = $(this).val(),
					l = v.length;

				if(l > maxlength) {
					$(this).val(v.substr(0, maxlength));
					return false;
				}

				if(indicator.length){
					indicator.html(maxlength - l)
				}
			})
		})
	/* textarea plugin ends */ }
	
	
	$.fn.ProfileCollapsible = function(){ /* Collapsible plugin ends */ 
		if(!this.length) return;
		
		return this.each(function(){
			var target = $(this).parent().nextAll('[data-role="collapsible"]').eq(0);
						
			$(this).click(function(event){
				event.preventDefault();
				
				if(target.is(':visible')) {
					$(this).find('b').eq(0).html('&#x2B;')
					target.slideUp()
				}
				
				else {
					$(this).find('b').eq(0).html('&mdash;')
					target.slideDown()
				}
			});
		});
	/* Collapsible plugin starts */ }
	
	
	$.fn.custombt = function(){
		if(!this.length) return;

		var $this			=	$(this), 
			defaults		=	{
				cssClass 	:	'tac lh14em',
				positions	:	['top', 'bottom']
			},
			options			=	$.extend(true, {}, defaults, $(this).data('bt-settings'));

		return this.each(function(){
			$(this).bt(options);
		})
	}


	$.fn.HindiPlaceholder = function() {
		if (!this.length) return;

		return this.each(function(){
			var $pa = $(this).siblings('.pa');

			$(this).on('focus', function(){
				if($pa.is(':visible')) $pa.hide();
			})

			$(this).on('blur', function(){
				if(!$(this).val().length) $pa.show();
			})
		})
	}

	var inquiryPagingInitTop = $('#inquiryPaging').length ? $('#inquiryPaging').offset().top : 0; // var for SendInquiryAndPaging() funcion

	function SendInquiryAndPaging(){
		var obj=$('#inquiryPaging');
		var scrollTop=$(document).scrollTop();
		var classes='changePosition';
		
		if(scrollTop > inquiryPagingInitTop){
			obj.addClass(classes);
		}

		
		if(scrollTop < inquiryPagingInitTop){
			obj.removeClass(classes);
		}
	}
	
})(jQuery);

$(window).scroll(function(){
	if($(this).scrollTop() > 30){
   		$('header').addClass('header_fixer');
   		$('.header_hide').css('display','block');
   		$('.TopMenuBar').slideUp();
	}
	else{
		$('header').removeClass('header_fixer');
   		$('.header_hide').css('display','none');
   		$('.TopMenuBar').slideDown();
	}
});