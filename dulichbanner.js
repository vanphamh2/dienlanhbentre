	jQuery(document).ready(function($) {
		if(!device.mobile() && !device.tablet()){
			liteModeSwitcher = false;
		}else{
			liteModeSwitcher = true;
		}
		if($.browser.msie && parseInt($.browser.version) < 9){
	         liteModeSwitcher = true;
	    }

			jQuery('#parallax-slider-5936c6d1ad530').parallaxSlider({
				parallaxEffect: "parallax_effect_normal"
			,	parallaxInvert: false			,	animateLayout: "simple-fade-eff"
			,	duration: 1500			,	autoSwitcher: true			,	autoSwitcherDelay: 10000			,	scrolling_description: false			,	slider_navs: false			,	slider_pagination: "buttons_pagination"
			,	liteMode :liteModeSwitcher
			});

	});