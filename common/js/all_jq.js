$(document).ready(function () {
//Banner js start	
$('#shortlisted_insurers').bxSlider({
        slideWidth: 125,
        minSlides:2,
        maxSlides:4,
        moveSlides:1,
        slideMargin:0,
        pager: false,
        speed: 500,
        pause: 2000
    });
//Ticker js start		
	
$('#ticker_lft').bxSlider({
        minSlides:1,
        maxSlides:1,
        moveSlides:1,
        slideMargin:0,
        pager: false,
		auto: true,
        speed: 1500,
        pause: 4000,
		autoHover: true
    });
	
$('#ticker_rit').bxSlider({
        minSlides:1,
        maxSlides:1,
        moveSlides:1,
        slideMargin:0,
        pager: false,
		auto: true,
        speed: 1500,
        pause: 6000,
		autoHover: true
    });
	
//Accordion js start	
$(".details_acc h4").click(function(){
$(this).next(".acc_box").slideToggle("slow")
.siblings(".acc_box:visible").slideUp("slow");
$(this).toggleClass("active");
$(this).siblings("h4").removeClass("active");
});	


//Popup js start
$(".close").click(function(){
$(".overlay").hide();	
});

//Popup js start
$(".edit_values").click(function(){
$(".overlay_payment").hide();	
});


//IE js start
$(".ie_icon").hover(function(){
$(this).find(".ie_box").show();	
},
function(){
$(".ie_box").hide();	
});


//Modify js start
$(".modify").click(function(){
$(".remove_text").hide();
$(".modify").hide();
$(".submit").show();
$(".date_edit").show();
	
});

//Get Discount js start
$(".discount_btn a").toggle(function(){
$(".discount_btn a").toggleClass("active_arrow");
$(".get_discount").animate({"right": "0px"}, "slow");
},
function(){
$(".get_discount").animate({"right": "-860px"}, "slow");
$(".discount_btn a").toggleClass();
});

$("#wappper").click(function(){
$(".get_discount").animate({"right": "-860px"}, "slow");

});


	
$(".cstfrm").uniform();

 });


