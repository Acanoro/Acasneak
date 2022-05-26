$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

});

var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});