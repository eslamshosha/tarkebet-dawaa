let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
    $(".menu-bars").toggleClass("open-bars");
  });
  $(".close-menu").click(function (e) {
    e.preventDefault();
    $(".navgition").removeClass("reset-left");
    $("body").removeClass("overflow");
    $(".menu-bars").removeClass("open-bars");
  });
  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  // var $stickyheader = $("header");
  // lastScroll = 0;
  // $(window).on("scroll load", function () {
  //   var scroll = $(window).scrollTop();
  //   if (lastScroll - scroll > 0) {
  //     $stickyheader.addClass("fixed-header", { duration: 1000 });
  //   } else {
  //     $stickyheader.removeClass("fixed-header", { duration: 500 });
  //   }
  //   lastScroll = scroll;
  //   if (scroll == 0) {
  //     $stickyheader.removeClass("fixed-header", { duration: 500 });
  //   }
  // });
  $(document).on("scroll", onScroll);
  $('.big-menu a[data-href^="#"]').on("click", function (e) {
    $(".navgition").removeClass("reset-left");
    $(".menu-bars").removeClass("open-bars");

    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = $(this).attr("data-href");
    menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 30,
        },
        500,
        "swing",
        function () {
          $(document).on("scroll", onScroll);
        }
      );
  });
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.header a[data-href^="#"]').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("data-href"));
      var refoffset = $(currLink.attr("data-href")).position().top - 80;
      if (
        refoffset <= scrollPos &&
        refoffset + refElement.height() + 240 > scrollPos
      ) {
        $(".header .nav-item>a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  //scroll down button to tabs section
  $(".to-customer-reaquest").click(function () {
    $(".navgition").removeClass("reset-left");
    $("html, body").animate(
      {
        scrollTop: $("#requset-section").offset().top,
      },
      1000
    );
    $("#customer-tab").trigger("click");
  });

  $(".to-doctor-reaquest").click(function () {
    $(".navgition").removeClass("reset-left");
    $("html, body").animate(
      {
        scrollTop: $("#requset-section").offset().top,
      },
      1000
    );
    $("#doctor-tab").trigger("click");
  });
  //file input
  $(".custom-file-upload .upload-change").change(function () {
    let file_val;
    if ($(this).val() == "") {
      file_val = $(".file-txt").data("title");
    } else {
      file_val = $(this).prop("files")[0].name;
    }
    $(".file-txt").html(file_val);
  });
});
