$(document).ready(function () {
	$('.main-bot-items').masonry({
		// указываем элемент-контейнер в котором расположены блоки для динамической верстки
		itemSelector: '.main-bot-items-item',
		// указываем класс элемента являющегося блоком в нашей сетке
		singleMode: true,
		// true - если у вас все блоки одинаковой ширины
	});
});

$(document).on('click', '.main-mobile-container-btn', function () {
	let destination = $('.main-mobile-container-form').offset().top;
	$('html, body').animate({ scrollTop: destination }, 1100);	
});

$(document).on('click', '.main-mobile-container-form-row__submit', function (e) {
		e.preventDefault();
		console.log($(document).find('.main-mobile-container-form-row input').val());
		if($(document).find('.main-mobile-container-form-row input').val()) {
			$(document).find('.main-mobile-container-form-row__alert').slideDown('slow');
		}		
});

$(document).on('click', '.main-center-left, .main-center-left-btn', function (event) {	
	if( (screen.width > 767 /*&& !(event.target.classList.contains("main-center-left-btn"))*/) || (screen.width <= 767 && (event.target.classList.contains("main-center-left-btn"))) ) {
		if ($(document).find('.main-right').hasClass('active')) {
			$(document).find('.main-center__label').removeClass('right');
			$(document).find('.main-center__box').removeClass('right');
			$(document).find('.main-center__label').addClass('left');
			$(document).find('.main-center__box').addClass('left');
			$(document).find('.main-center-bot').addClass('left');
			$(document).find('.main-center__box2').addClass('left');
			$(document).find('.main-center-right-mob').addClass('left');
			$(document).find('.main-center-right-mob').removeClass('right');
			$(document).find('.main-center__box2').removeClass('right');
			$(document).find('.main-left').addClass('active');
			$(document).find('.main').addClass('left');
			$(document).find('.main').removeClass('right');
			$(document).find('.main-bot').removeClass('right');
			$(document).find('.main-bot').addClass('left');
			setTimeout(function () {
				$(document).find('.main-right').removeClass('active');
			}, 100);
			if($(this).hasClass('main-center-left-btn')) {

			} else {
				$(this).fadeOut('fast');
			}			
			$(document).find('.main-center-right').fadeIn('fast');
			$(document).find('.main-center-right-wrap').hide();
		} else {
			if($(this).hasClass('main-center-left-btn')) {

			} else {
				$(this).fadeOut('fast');
			}	
			$(document).find('.main-center-right-wrap').fadeOut('fast');
			$(document).find('.main-center__label').addClass('left');
			$(document).find('.main-center__box').addClass('left');
			$(document).find('.main-center-bot').addClass('left');
			$(document).find('.main-center__box2').addClass('left');
			$(document).find('.main-center-right-mob').addClass('left');
			$(document).find('.main-center-right-mob').removeClass('right');
			$(document).find('.main-left').addClass('active');
			$(document).find('.main').addClass('left');
			$(document).find('.main').removeClass('right');
			$(document).find('.main-bot').removeClass('right');
			$(document).find('.main-bot').addClass('left');
		}
	}
});

$(document).on('click', '.main-center-right, .main-center-right-btn, .header-right__item', function (event) {	
	if( (event.target.classList.contains("header-right__item")) || (screen.width > 767 /*&& !(event.target.classList.contains("main-center-right-btn"))*/) || (screen.width <= 767 && (event.target.classList.contains("main-center-right-btn"))) ) {
		if ($(document).find('.main-left').hasClass('active')) {
			$(document).find('.main-center__label').removeClass('left');
			$(document).find('.main-center__box').removeClass('left');
			$(document).find('.main-center-right-mob').removeClass('left');
			$(document).find('.main-center-right-mob').addClass('right');
			$(document).find('.main-center__box2').removeClass('left');
			$(document).find('.main-center__label').addClass('right');
			$(document).find('.main-center__box').addClass('right');
			$(document).find('.main-right').addClass('active');
			$(document).find('.main-center-bot').removeClass('left');
			$(document).find('.main').removeClass('left');
			$(document).find('.main').addClass('right');
			$(document).find('.main-bot').removeClass('left');
			$(document).find('.main-bot').addClass('right');
			setTimeout(function () {
				$(document).find('.main-left').removeClass('active');
			}, 100);
			setTimeout(function () {
				$(document).find('.main-center__box2').addClass('right');
			}, 150);
			if($(this).hasClass('main-center-right-btn') || $(this).hasClass('header-right__item')) {
				if($(this).hasClass('header-right__item')) {
					$(document).find('.main-center-right').fadeOut('fast');
				}
			} else {
				$(this).fadeOut('fast');
			}	
			$(document).find('.main-center-left').fadeIn('fast');
			$(document).find('.main-center-left-wrap').hide();
		} else {
			if($(this).hasClass('main-center-right-btn')|| $(this).hasClass('header-right__item')) {
				if($(this).hasClass('header-right__item')) {
					$(document).find('.main-center-right').fadeOut('fast');
				}
			} else {
				$(this).fadeOut('fast');
			}	
			$(document).find('.main-center-left-wrap').fadeOut('fast');
			$(document).find('.main-center__label').addClass('right');
			$(document).find('.main-center__box').addClass('right');
			$(document).find('.main-center-right-mob').addClass('right');
			$(document).find('.main-center__box2').addClass('right');
			$(document).find('.main-right').addClass('active');
			$(document).find('.main').addClass('right');
			$(document).find('.main-bot').addClass('right');
		}
	} 
});

$(document).on('click', '.main-center-bot', function () {
	$(document).find('.main-center').addClass('scroll');
	$(document).find('.main-left').addClass('scroll');
	$(document).find('.main-right').addClass('scroll');
	$(document).find('.main-bot').addClass('scroll');
});

$(document).on('click', '.main-bot__btn', function () {
	$(document).find('.main-center').removeClass('scroll');
	$(document).find('.main-left').removeClass('scroll');
	$(document).find('.main-right').removeClass('scroll');
	$(document).find('.main-bot').removeClass('scroll');
});