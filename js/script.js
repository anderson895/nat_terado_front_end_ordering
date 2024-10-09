$(document).ready(function () {
  var isNavOpen = false;
//   Side Bar
$("#btnToggleSideBar").click(function (e) {
  e.preventDefault();
  if (isNavOpen) {
    $(".side-nav").css("transform", "translateX(-100%)");
  } else {
    $(".side-nav").css("transform", "translateX(0)");
  }

  isNavOpen = !isNavOpen;
});

$(window).resize(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 800) {
    isNavOpen = true;
    $(".side-nav").css("transform", "translateX(0)");
  } else {
    isNavOpen = false;
    $(".side-nav").css("transform", "translateX(-100%)");
  }
});
//   End of Side Bar
});


