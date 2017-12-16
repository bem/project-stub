var offerSection = document.querySelectorAll('.promo-cards__offer-section')[0],
	offerTab1 = document.querySelectorAll('.promo-cards__offer-tab-1')[0],
	offerTab2 = document.querySelectorAll('.promo-cards__offer-tab-2')[0],
	offerTab3 = document.querySelectorAll('.promo-cards__offer-tab-3')[0];

offerTab1.addEventListener('click', function() {
	offerSection.classList.add('promo-cards_slide_first')
	offerSection.classList.remove('promo-cards_slide_second')
	offerSection.classList.remove('promo-cards_slide_third')

	offerSection.classList.add('promo-cards__offer_type_goods')
	offerSection.classList.remove('promo-cards__offer_type_brand')
	offerSection.classList.remove('promo-cards__offer_type_service')
});
offerTab2.addEventListener('click', function() {
	offerSection.classList.remove('promo-cards_slide_first')
	offerSection.classList.add('promo-cards_slide_second')
	offerSection.classList.remove('promo-cards_slide_third')

	offerSection.classList.remove('promo-cards__offer_type_goods')
	offerSection.classList.add('promo-cards__offer_type_brand')
	offerSection.classList.remove('promo-cards__offer_type_service')
});
offerTab3.addEventListener('click', function() {
	offerSection.classList.remove('promo-cards_slide_first')
	offerSection.classList.remove('promo-cards_slide_second')
	offerSection.classList.add('promo-cards_slide_third')

	offerSection.classList.remove('promo-cards__offer_type_goods')
	offerSection.classList.remove('promo-cards__offer_type_brand')
	offerSection.classList.add('promo-cards__offer_type_service')
});
