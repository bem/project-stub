$('document').ready(function(){
	var menuLink = $('.demo__header'),
		menuIcon = $('.demo__menu-icon'),
		menu = $('.demo__menu'),
		activeSection = $('.demo__menu-section[section=\''+ menu.attr('section') +'\']'),
		activeItem = $('.demo__menu-item[active=\''+ menu.attr('active') +'\']');

	activeItem.addClass('active');

	menuLink.on('click', function(){
		$(this).find('.demo__menu-icon').toggleClass('demo__menu-icon_state_open');
		$(this).find('.demo__menu-icon').toggleClass('demo__menu-icon_state_close');
		$('.b-page').toggleClass('b-page_overflow_hidden');
		menu.toggleClass('demo__menu_open');

	});
});
