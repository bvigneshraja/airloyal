jQuery(document).ready(function(){
var offset=200;
var duration=500;
jQuery(window).scroll(function(){
if(jQuery(this).scrollTop()>offset){
jQuery('.back-to-top').fadeIn(duration);
}
else{
jQuery('.back-to-top').fadeOut(duration);	
}
});
jQuery('.back-to-top').click(function(e){
e.preventDefault();
jQuery('html,body').animate({
	scrollTop:0
},duration)
});
jQuery('.toggle-menu').jPushMenu();
});
