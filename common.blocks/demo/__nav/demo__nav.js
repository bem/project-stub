$(document).ready(function(){
	var nav = $('.demo__nav'),
		menu = $('.demo__menu'),
		control = $('.demo__logo');

	nav.find('.link').click(function(){
		var section = $(this).attr('data-name');

		if(section) openMenu(section);
	});
	function openMenu(section) {
		$('.demo').attr('style', 'height: 100vh; overflow: hidden;');

		$('.demo__menu-sections-col').hide();
		$('.demo__menu-sections-col[data-name='+ section +']').show();
		
		menu.addClass('demo__menu_open');
		$('.demo__logo-icon').removeClass('demo__logo-icon_type_logo').addClass('demo__logo-icon_type_close');
	}

	control.on('click', function(){
		var type = control.find('.demo__logo-icon');

		if(type.hasClass('demo__logo-icon_type_close')) {
			$('.demo').attr('style', '');
			menu.removeClass('demo__menu_open');
			type.addClass('demo__logo-icon_type_logo').removeClass('demo__logo-icon_type_close');

			return false;
		}
	});
});