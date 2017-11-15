$('document').ready(function(){
	//---> FOR CASE INSENCITIVE ---//
	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	    };
	});
	//--- FOR CASE INSENCITIVE <---//

	var search = $('.search .input__control'),
		button = $('.search .button2'),
		button_clear = $('.search .input__clear');

	search.on('keydown', function(){ doSearch(); });
	button.on('click', function(){ doSearch(); return false; });
	button_clear.on('click', function(){ clearSearch(); search.val(''); return false; });

	function doSearch(){
		clearSearch();

		var searchedText = search.val();

		if(searchedText.length > 0){
			var source = $(".search-source"),
				finds = $(".search-source .text:contains('"+searchedText+"')") ||
						$(".search-source .text:contains('"+searchedText+"')");

			source.addClass('search__no-result');
			finds.parent().removeClass('search__no-result').addClass('search__result');
		} else {
			clearSearch();
		}
		
	};

	function clearSearch(){
		$('.search__result').removeClass('search__result');
		$('.search__no-result').removeClass('search__no-result');
	};
});