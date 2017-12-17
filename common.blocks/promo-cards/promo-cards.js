var offerSection = document.querySelectorAll('.promo-cards__offer-section')[0],
	offerCard = document.querySelectorAll('.promo-cards__offer')[0],
	offerTab1 = document.querySelectorAll('.promo-cards__offer-tab-1')[0],
	offerTab2 = document.querySelectorAll('.promo-cards__offer-tab-2')[0],
	offerTab3 = document.querySelectorAll('.promo-cards__offer-tab-3')[0];

offerTab1.addEventListener('click', function() {
	offerTab1.classList.add('text_view_letter');
	offerTab2.classList.remove('text_view_letter');
	offerTab3.classList.remove('text_view_letter');

	offerSection.classList.add('promo-cards_slide_first');
	offerSection.classList.remove('promo-cards_slide_second');
	offerSection.classList.remove('promo-cards_slide_third');

	offerCard.classList.add('promo-cards__offer_type_goods');
	offerCard.classList.remove('promo-cards__offer_type_brand');
	offerCard.classList.remove('promo-cards__offer_type_service');
});
offerTab2.addEventListener('click', function() {
	offerTab1.classList.remove('text_view_letter');
	offerTab2.classList.add('text_view_letter');
	offerTab3.classList.remove('text_view_letter');

	offerSection.classList.remove('promo-cards_slide_first');
	offerSection.classList.add('promo-cards_slide_second');
	offerSection.classList.remove('promo-cards_slide_third');

	offerCard.classList.remove('promo-cards__offer_type_goods');
	offerCard.classList.add('promo-cards__offer_type_brand');
	offerCard.classList.remove('promo-cards__offer_type_service');
});
offerTab3.addEventListener('click', function() {
	offerTab1.classList.remove('text_view_letter');
	offerTab2.classList.remove('text_view_letter');
	offerTab3.classList.add('text_view_letter');

	offerSection.classList.remove('promo-cards_slide_first');
	offerSection.classList.remove('promo-cards_slide_second');
	offerSection.classList.add('promo-cards_slide_third');

	offerCard.classList.remove('promo-cards__offer_type_goods');
	offerCard.classList.remove('promo-cards__offer_type_brand');
	offerCard.classList.add('promo-cards__offer_type_service');
});



var mediaSection = document.querySelectorAll('.promo-cards__media-section')[0],
	mediaCard = document.querySelectorAll('.promo-cards__media')[0],
	mediaTab1 = document.querySelectorAll('.promo-cards__media-tab-1')[0],
	mediaTab2 = document.querySelectorAll('.promo-cards__media-tab-2')[0],
	mediaTab3 = document.querySelectorAll('.promo-cards__media-tab-3')[0];

mediaTab1.addEventListener('click', function() {
	mediaTab1.classList.add('text_view_letter');
	mediaTab2.classList.remove('text_view_letter');
	mediaTab3.classList.remove('text_view_letter');

	mediaSection.classList.add('promo-cards_slide_first');
	mediaSection.classList.remove('promo-cards_slide_second');
	mediaSection.classList.remove('promo-cards_slide_third');
	
	mediaCard.classList.add('promo-cards__media_type_video');
	mediaCard.classList.remove('promo-cards__media_type_text');
	mediaCard.classList.remove('promo-cards__media_type_music');
});
mediaTab2.addEventListener('click', function() {
	mediaTab1.classList.remove('text_view_letter');
	mediaTab2.classList.add('text_view_letter');
	mediaTab3.classList.remove('text_view_letter');

	mediaSection.classList.remove('promo-cards_slide_first');
	mediaSection.classList.add('promo-cards_slide_second');
	mediaSection.classList.remove('promo-cards_slide_third');
	
	mediaCard.classList.remove('promo-cards__media_type_video');
	mediaCard.classList.add('promo-cards__media_type_text');
	mediaCard.classList.remove('promo-cards__media_type_music');
});
mediaTab3.addEventListener('click', function() {
	mediaTab1.classList.remove('text_view_letter');
	mediaTab2.classList.remove('text_view_letter');
	mediaTab3.classList.add('text_view_letter');

	mediaSection.classList.remove('promo-cards_slide_first');
	mediaSection.classList.remove('promo-cards_slide_second');
	mediaSection.classList.add('promo-cards_slide_third');
	
	mediaCard.classList.remove('promo-cards__media_type_video');
	mediaCard.classList.remove('promo-cards__media_type_text');
	mediaCard.classList.add('promo-cards__media_type_music');
});



var appsSection = document.querySelectorAll('.promo-cards__apps-section')[0],
	appsCard = document.querySelectorAll('.promo-cards__apps')[0],
	appsTab1 = document.querySelectorAll('.promo-cards__apps-tab-1')[0],
	appsTab2 = document.querySelectorAll('.promo-cards__apps-tab-2')[0],
	appsTab3 = document.querySelectorAll('.promo-cards__apps-tab-3')[0];

appsTab1.addEventListener('click', function() {
	appsTab1.classList.add('text_view_letter');
	appsTab2.classList.remove('text_view_letter');
	appsTab3.classList.remove('text_view_letter');

	appsSection.classList.add('promo-cards_slide_first');
	appsSection.classList.remove('promo-cards_slide_second');
	appsSection.classList.remove('promo-cards_slide_third');
	
	appsCard.classList.add('promo-cards__apps_type_recommendation');
	appsCard.classList.remove('promo-cards__apps_type_good');
	appsCard.classList.remove('promo-cards__apps_type_music');
});
appsTab2.addEventListener('click', function() {
	appsTab1.classList.remove('text_view_letter');
	appsTab2.classList.add('text_view_letter');
	appsTab3.classList.remove('text_view_letter');

	appsSection.classList.remove('promo-cards_slide_first');
	appsSection.classList.add('promo-cards_slide_second');
	appsSection.classList.remove('promo-cards_slide_third');
	
	appsCard.classList.remove('promo-cards__apps_type_recommendation');
	appsCard.classList.add('promo-cards__apps_type_good');
	appsCard.classList.remove('promo-cards__apps_type_music');
});
appsTab3.addEventListener('click', function() {
	appsTab1.classList.remove('text_view_letter');
	appsTab2.classList.remove('text_view_letter');
	appsTab3.classList.add('text_view_letter');

	appsSection.classList.remove('promo-cards_slide_first');
	appsSection.classList.remove('promo-cards_slide_second');
	appsSection.classList.add('promo-cards_slide_third');
	
	appsCard.classList.remove('promo-cards__apps_type_recommendation');
	appsCard.classList.remove('promo-cards__apps_type_good');
	appsCard.classList.add('promo-cards__apps_type_music');
});