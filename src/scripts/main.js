$(document).ready(function () {
	$('.main-bot-items').masonry({
		// указываем элемент-контейнер в котором расположены блоки для динамической верстки
		itemSelector: '.main-bot-items-item',
		// указываем класс элемента являющегося блоком в нашей сетке
		singleMode: true,
		// true - если у вас все блоки одинаковой ширины
	});
});

$(document).on('click', '.main-center-left', function () {
	if ($(document).find('.main-right').hasClass('active')) {
		$(document).find('.main-center__label').removeClass('right');
		$(document).find('.main-center__box').removeClass('right');
		$(document).find('.main-center__label').addClass('left');
		$(document).find('.main-center__box').addClass('left');
		$(document).find('.main-center__box2').addClass('left');
		$(document).find('.main-center__box2').removeClass('right');
		$(document).find('.main-left').addClass('active');
		setTimeout(function () {
			$(document).find('.main-right').removeClass('active');
		}, 100);
		$(this).fadeOut('fast');
		$(document).find('.main-center-right').fadeIn('fast');
		$(document).find('.main-center-right-wrap').hide();
	} else {
		$(this).fadeOut('fast');
		$(document).find('.main-center-right-wrap').fadeOut('fast');
		$(document).find('.main-center__label').addClass('left');
		$(document).find('.main-center__box').addClass('left');
		$(document).find('.main-center__box2').addClass('left');
		$(document).find('.main-left').addClass('active');
	}
});

$(document).on('click', '.main-center-right', function () {
	if ($(document).find('.main-left').hasClass('active')) {
		$(document).find('.main-center__label').removeClass('left');
		$(document).find('.main-center__box').removeClass('left');
		$(document).find('.main-center__box2').removeClass('left');
		$(document).find('.main-center__label').addClass('right');
		$(document).find('.main-center__box').addClass('right');
		$(document).find('.main-right').addClass('active');
		setTimeout(function () {
			$(document).find('.main-left').removeClass('active');
		}, 100);
		setTimeout(function () {
			$(document).find('.main-center__box2').addClass('right');
		}, 150);
		$(this).fadeOut('fast');
		$(document).find('.main-center-left').fadeIn('fast');
		$(document).find('.main-center-left-wrap').hide();
	} else {
		$(this).fadeOut('fast');
		$(document).find('.main-center-left-wrap').fadeOut('fast');
		$(document).find('.main-center__label').addClass('right');
		$(document).find('.main-center__box').addClass('right');
		$(document).find('.main-center__box2').addClass('right');
		$(document).find('.main-right').addClass('active');
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