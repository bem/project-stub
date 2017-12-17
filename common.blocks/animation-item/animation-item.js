// FADE IN / FADE OUT --->
document.querySelectorAll('.js-paranja .animation-item__paranja')[0].addEventListener('click', function() {
	this.classList.toggle('animation_fade_in');
	this.classList.toggle('animation_fade_out');
});
// <--- FADE IN / FADE OUT



// FROM TO --->
function fromTo(wrap, from, to){
	document.querySelectorAll('.' + wrap)[0].addEventListener('click', function() {
		let modal = document.querySelectorAll('.'+ wrap +' .animation-item__modal')[0]
		if(window.getComputedStyle(modal).display === 'none') {
			modal.style.display = 'block';
			modal.classList.toggle('animation_from_' + from);
			modal.classList.toggle('animation_to_' + to);
		} else {
			modal.classList.toggle('animation_from_' + from);
			modal.classList.toggle('animation_to_' + to);
			setTimeout(function(){
				modal.style.display = 'none';
			}, 300);
		}
	});
};

fromTo('js-modal-top', 'top', 'bottom');
fromTo('js-modal-bottom', 'bottom', 'top');
fromTo('js-modal-right', 'right', 'left');
fromTo('js-modal-left', 'left', 'right');
// <--- FROM TO



// SHAKE HORIZONTAL --->
document.querySelectorAll('.js-shake-horizontal')[0].addEventListener('click', function() {
	let _this = this;
	_this.classList.toggle('animation_shake_horizontal');
	setTimeout(function(){
		_this.classList.toggle('animation_shake_horizontal');
	}, 500);
});
// <--- SHAKE HORIZONTAL



// SHAKE RADIAL --->
document.querySelectorAll('.js-shake-radial')[0].addEventListener('click', function() {
	let _this = this;
	_this.classList.toggle('animation_shake_radial');
	setTimeout(function(){
		_this.classList.toggle('animation_shake_radial');
	}, 500);
});
// <--- SHAKE RADIAL