$(function() {
  $('body').panelSnap({
    panelSelector: '.full_page',
    $menu: '.nav-bar',
  });


  function resizeBg() {
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


  $(window).resize(resizeBg).trigger("resize");

});
