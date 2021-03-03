
$(function(){

	/* fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let introH
    let scrollPos = $(window).scrollTop();
 
    $(window).on("scroll load resize", function(){
    	introH = intro.innerHeight();
    	scrollPos = $(this).scrollTop();

    	if (scrollPos>introH){
    		header.addClass("fixed");
    	}
    	else {
    		header.removeClass("fixed");
    	}

    	console.log(scrollPos);
    });
    
    header.addClass("fixed");


    /* smoth scroll*/

    $("[data-scroll]").on("click", function(event){
    	event.preventDefault();
    	let elementId = $(this).data("scroll");
    	let elementH = $(elementId).offset().top;
    	console.log(elementId);
    	nav.removeClass("show");
    	$("html, body").animate({
    		scrollTop: elementH - 58
    	}, 700);
    });


    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event){
    	event.preventDefault();

    	nav.toggleClass('show');
    });

   	


   	let slider = $("#rewslider");

   	slider.slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		fade: true,
  		arrows: false
   	})
});