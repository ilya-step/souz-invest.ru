function addSpaces(nStr) {
	nStr += "";
	var x = nStr.split(".");
	var x1 = x[0];
	var x2 = x.length > 1 ? "." + x[1] : "";
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, "$1" + " " + "$2");
	}
	return x1 + x2;
};

//первый ползунок
jQuery(".fcalcp5_vedyshiy").slider({
	range: "min",
	value: 500000,
	min: 100000,
	max: 5000000,
	step: 10000,
	animate: true,
	slide: function (event, ui) {
		if (ui.value == 50000) { jQuery(".fcalcp5_vedyshiy_rez").html("<span>0</span>"); }
		else jQuery(".fcalcp5_vedyshiy_rez").html("<span>" + addSpaces(ui.value) + "</span>");
		crachet();
	},
	stop: function (event, ui) {
	}
});
//Второй ползунок
jQuery(".fcalcp5_decor").slider({
	range: "min",
	value: 60,
	min: 1,
	max: 240,
	step: 1,
	animate: true,
	slide: function (event, ui) {
		if (ui.value == 15000) { jQuery(".fcalcp5_decor_rez").html("<span>0</span>"); }
		else jQuery(".fcalcp5_decor_rez").html("<span>" + addSpaces(ui.value) + "</span>");
		crachet();
	},
	stop: function (event, ui) {
	}
});

function crachet() {
	let summa = parseInt(jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, ""));
	let srok = parseInt(jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, ""));
	let monthPercent = 6 / 100 / 12;
	//Возведение в степень
	let degree = Math.pow(1 + monthPercent, -srok);
	let monthCredit = summa * (monthPercent / (1 - degree));

	summa = Math.round(monthCredit);

	jQuery(".fcalcp9 ").html("<span>" + addSpaces(summa) + "</span> руб.");
}


// Аккордион с вопросами
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			panel.style.height = panel.scrollHeight + "px";
		}
	});
}

// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 50) {
		document.getElementById("navbar").classList.remove('_active');
	} else {
		document.getElementById("navbar").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}

// Попап
p = $('.popup__overlay')
$('.popup__toggle').click(function () {
	p.addClass('_active')
})
p.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p.removeClass('_active')
})

// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
let selector2 = document.querySelector('input[type="tel"]');
selector2.addEventListener('input', function () {
	const re = /^\d*(\.\d+)?$/
});

// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}