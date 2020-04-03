$(document).ready(function(){


  $('.hambuergerMenu').click(function(){


    $('.openMEnu').css({


      transform:"translateX(0)"


    })


    $(this).fadeOut();


    $('.celarOpenMenu').fadeIn();



  })



  $('.celarOpenMenu').click(function(){



    $('.openMEnu').css({


      transform:"translateX(150%)"


    })



    $(this).fadeOut();

    $('.hambuergerMenu').fadeIn();



  })




})