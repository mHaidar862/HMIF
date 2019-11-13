$(document).ready(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 300) {
      		$(".navbar").css("background-color", "white");
                  $(".navbar a li").css("color", "black");
                  $(".navbar").css("box-shadow", "1px 1px 10px 1px #bfbfbf");
                  $(".navbar").css("transition", ".3s");
                  $(".logo-nav").css("width", "50px");
                  $(".logo-nav").css("height", "50px");
		} else {
      		$(".navbar").css("background-color", "transparent");
                  $(".navbar a li").css("color", "white");
                  $(".navbar").css("box-shadow", "none");
                  $(".navbar").css("transition", ".3s");
                  $(".logo-nav").css("width", "70px");
                  $(".logo-nav").css("height", "70px");
		}
	});

      $(".to-down").click(function() {
            $('html, body').animate({
                  scrollTop: $(".header-ct-2").offset().top - 200
            }, 1000);
      });

      $(".nav-open").click(function() {
            $(".nav-res").css("margin-top", "0");
      });

      $(".nav-close").click(function() {
            $(".nav-res").css("margin-top", "-5000px");
      });
});