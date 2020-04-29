  $(document).ready(function(){
       $('.sll').slick({
 
centerMode: true,
slidesToShow: 3,
prevArrow:'.next',
nextArrow:'.prev',           
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

      
      //#########################
 
$(".footer .down").click(function(){
 $(this).toggleClass("fa-angle-up fa-angle-down"),$(".footer .more-info").slideToggle();
});

$(".footer span").click(function(){
 $(".down").toggleClass("fa-angle-up fa-angle-down"),$(".footer .more-info").slideToggle();

});      
      
  
      

//################################
      
//wow plugin
      
new WOW().init();  
      
  
      
    $('#Container').mixItUp();
  $(".our-prtofilo ul li").click(function(){
   $(this).addClass('active').siblings().removeClass('active');
  
  });    
    new WOW().init(); 
      
});