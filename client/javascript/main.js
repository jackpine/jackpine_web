$(function() {
  $('body').panelSnap({
    panelSelector: '.full_page',
    $menu: '.nav-bar',
  });


  function resizeWindow() {
   // background image aboslutely centered and full bleed
   var $bg = $("#bg"),
       aspectRatio = $bg.width() / $bg.height();

    if ( ($(window).width() / $(window).height()) < aspectRatio ) {
      $bg.removeClass().addClass('bgheight');
      $bg.css({ marginLeft: -($bg.width()/2 - $(window).width()/2) });
    } else {
      $bg.removeClass().addClass('bgwidth');
      $bg.css({ marginLeft: 0 });
    }
  }

  function centerElement() {
    // centered class absolutely centered
    var $centered = $(".centered");
    $centered.css({
      marginLeft: -($centered.width()/2),
      marginTop:  -($centered.height()/2)
    });
    console.log('element centered');
  }

  $(window).resize(resizeWindow);

  var s = skrollr.init();
});
