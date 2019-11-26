/* OPEN CLOSE MoBILE MENU  */
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

/* DROPDOWNM MOBILE */



/* SLIDER */

$(document).ready (function(){

  var $frontSlider = $('.slider');

    $frontSlider.owlCarousel({
      items: 1,
      /*autoplay: true,
      autoplayTimeout: 3000,
      loop: true,*/
      autoplayHoverPause: true,
      

  });
})


/* PROJECT MENU BUTTON ACTIVE */

/* LATEST PROJECTS */

$(document).ready (function(){
  $('.all-btn').click(function(){

    $('.all-btnactive').removeClass('all-btnactive');
    $(this).addClass('all-btnactive');

  })
  $('#all').click(function(){
    $('#imgArch').show();
    $('#imgBuild').show();
    $('#imgGard').show();
    $('#imgOff').show();
  })


  $('#arch').click(function(){
    $('#imgArch').show();
    $('#imgBuild').hide();
    $('#imgGard').hide();
    $('#imgOff').hide();
  })

  $('#build').click(function(){
    $('#imgBuild').show();
    $('#imgArch').hide();
    $('#imgGard').hide();
    $('#imgOff').hide();
  })
 

 $('#gard').click(function(){
    $('#imgGard').show();
    $('#imgBuild').hide();
    $('#imgArch').hide();
    $('#imgOff').hide();
  })

 $('#off').click(function(){
    $('#imgOff').show();
    $('#imgBuild').hide();
    $('#imgArch').hide();
    $('#imgGard').hide();
  })
 
 /* EFFECT SHOW UP IMG */

$( "#all" ).click(function() {
  $( ".image" ).fadeOut(1000).fadeIn(1000);

  })

$( "#arch" ).click(function() {
  $( ".image" ).fadeOut(1000).fadeIn(1000);

  })

$( "#build" ).click(function() {
  $( ".image" ).fadeOut(1000).fadeIn(1000);

  })

$( "#gard" ).click(function() {
  $( ".image" ).fadeOut(1000).fadeIn(1000); 

  })

$( "#off" ).click(function() {
  $( ".image" ).fadeOut(1000).fadeIn(1000);

  })
})

/* QUESTIONS */

$( document ).ready( function() {
    var $questOneActive = $ ('#quest-one');
    var $addParagraph = $ ('#txt-que');


    $questOneActive.on ('click', function(){
      if ( $questOneActive.hasClass ('activeQue')) {
        $questOneActive.removeClass ('activeQue');
        document.getElementById('txt-que').style.display = "none";
        return;
      }

      $questOneActive.addClass('activeQue');

      $questTwoActive.removeClass ('activeQue');
        document.getElementById('txt-que-two').style.display = "none";

       $questThreeActive.removeClass ('activeQue');
        document.getElementById('txt-que-three').style.display = "none";

      $questFourActive.removeClass ('activeQue');
      document.getElementById('txt-que-four').style.display = "none";

      document.getElementById("txt-que").style.display = "block";
      $addParagraph.addClass('quest-txt');    
      return;
    });


    var $questTwoActive = $ ('#quest-two');
    var $addParagraph = $ ('#txt-que-two');

    $questTwoActive.on ('click', function(){
      if ( $questTwoActive.hasClass ('activeQue')) {
        $questTwoActive.removeClass ('activeQue');
        document.getElementById('txt-que-two').style.display = "none";
        return;
      }

      $questTwoActive.addClass('activeQue');

      $questOneActive.removeClass ('activeQue');
      document.getElementById('txt-que').style.display = "none";

      $questThreeActive.removeClass ('activeQue');
        document.getElementById('txt-que-three').style.display = "none";

      $questFourActive.removeClass ('activeQue');
      document.getElementById('txt-que-four').style.display = "none";

      document.getElementById("txt-que-two").style.display = "block";
      $addParagraph.addClass('quest-txt');
      return;
    });

    var $questThreeActive = $ ('#quest-three');
    var $addParagraph = $ ('#txt-que-three');

    $questThreeActive.on ('click', function(){
      if ( $questThreeActive.hasClass ('activeQue')) {
        $questThreeActive.removeClass ('activeQue');
        document.getElementById('txt-que-three').style.display = "none";
        return;
      }

      $questThreeActive.addClass('activeQue');
      $questTwoActive.removeClass ('activeQue');
      document.getElementById('txt-que-two').style.display = "none";

      $questOneActive.removeClass ('activeQue');
      document.getElementById('txt-que').style.display = "none";

      $questFourActive.removeClass ('activeQue');
      document.getElementById('txt-que-four').style.display = "none";

      document.getElementById("txt-que-three").style.display = "block";
      $addParagraph.addClass('quest-txt');
      return;
    });

    var $questFourActive = $ ('#quest-four');
    var $addParagraph = $ ('#txt-que-four');

    $questFourActive.on ('click', function(){
      if ( $questFourActive.hasClass ('activeQue')) {
        $questFourActive.removeClass ('activeQue');
        document.getElementById('txt-que-four').style.display = "none";
        return;
      }
      $questThreeActive.removeClass ('activeQue');
        document.getElementById('txt-que-three').style.display = "none";

       $questTwoActive.removeClass ('activeQue');
      document.getElementById('txt-que-two').style.display = "none";

      $questOneActive.removeClass ('activeQue');
      document.getElementById('txt-que').style.display = "none";

      $questFourActive.addClass('activeQue');
      $questThreeActive.removeClass ('activeQue');
      document.getElementById('txt-que-three').style.display = "none";

      document.getElementById("txt-que-four").style.display = "block";
      $addParagraph.addClass('quest-txt');
      return;
    });


})
 

