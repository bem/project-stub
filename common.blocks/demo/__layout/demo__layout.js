$(document).ready(function(){
	var layout_gallery = $('.demo__layout_animation_gallery'),
		gallery_example = layout_gallery.find('.example').hide();

	var layout_choose = $('.demo__layout_animation_choose'),
		choose_example = layout_choose.find('.demo__layout-example');


	showGallery($(gallery_example[0]));
	showChoose($(choose_example[0]));

	function showGallery(item) {
		$(item).show();

		setTimeout(function(){
			if($(item).next().is(':hidden')) {
				showGallery($(item).next());
				$(item).hide();
			} else {
				setTimeout(function(){
					showGallery($(gallery_example[0]).next());
					$(item).hide();
				}, 1200);
			}
		}, 400);
	};

	function showChoose(item) {
		$(item).attr('style', 'opacity: 1;');

		setTimeout(function(){
			if($(item).next().is(':visible')) {
				showChoose($(item).next());
				$(item).attr('style', 'opacity: .5;');
			} else {
				choose_example.attr('style', 'opacity: .5;');
				layout_choose.find('.choosen').attr('style', 'opacity: 1;');
				setTimeout(function(){
					layout_choose.find('.choosen').attr('style', 'opacity: .5;');
					showChoose($(choose_example[0]));
				}, 2000);
			}
		}, 400);
	};
});