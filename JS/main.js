$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    mouseDrag: true,
    autoplay: true,
    animateOut: "slideOutUp",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// navbar js change color and logo when scroll
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 4);
  });
});
var scrollsrc = "IMGS/logo_example_2-removebg1.png";
var initialscr = "IMGS/logo example 2.svg";
$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value > 10) $(".logo").attr("src", scrollsrc);
  else $(".logo").attr("src", initialscr);
});

// vedio
var $iframe = $("iframe"),
  $videoLink = $(".video-link"),
  playerTemplate =
    '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

$videoLink.on("click", function (e) {
  var localTemplate = "",
    videoWidth = parseInt($(this).data("width")),
    videoHeight = parseInt($(this).data("height")),
    videoAspect = (videoHeight / videoWidth) * 100,
    // elements
    $player = null,
    $video = null,
    $close = null,
    $iframe = null;

  e.preventDefault();

  localTemplate = playerTemplate.replace(
    "{{iframevideo}}",
    $(this).prop("href")
  );

  $player = $(localTemplate);

  $player.find(".video-filler").css("padding-top", videoAspect + "%");

  $close = $player.find(".video-close").on("click", function () {
    $(this).off().closest(".player").hide().remove();
  });

  $player.appendTo("body").addClass("js--show-video");
});

// button back to top
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
