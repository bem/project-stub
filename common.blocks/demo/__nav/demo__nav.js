$(document).ready(function(){
	var nav = $('.demo__nav'),
		menu = $('.demo__menu'),
		control = nav.find('.demo__nav-control');

	nav.find('.link').click(function(){
		var section = $(this).attr('data-name');

		if(section) openMenu(section);
	});
	function openMenu(section) {
		$('.demo').attr('style', 'height: 100vh; overflow: hidden;');

		$('.demo__menu-sections-col').hide();
		$('.demo__menu-sections-col[data-name='+ section +']').show();
		
		menu.addClass('demo__menu_open');
		$('.demo__nav-icon_type_logo').toggleClass('demo__nav-icon_type_logo').toggleClass('demo__nav-icon_type_close');
	}

	control.click(function(){
		var type = control.find('.demo__nav-icon');

		if(type.hasClass('demo__nav-icon_type_close')) {
			$('.demo').attr('style', '');
			menu.removeClass('demo__menu_open');
			$('.demo__nav-icon_type_close').toggleClass('demo__nav-icon_type_logo').toggleClass('demo__nav-icon_type_close');

			return false;
		} else if(type.hasClass('demo__nav-icon_type_logo')) {

		}
	});
});