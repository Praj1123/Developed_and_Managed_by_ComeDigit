! function (e) {
    "use strict";
    var t = e(window);

    function a() {
        var a, o;
        a = e(".full-screen"), o = t.height(), a.css("min-height", o), a = e("header").height(), o = e(".screen-height"), a = t.height() - a, o.css("height", a)
    }
    e("#preloader").fadeOut("normall", function () {
        e(this).remove()
    }), t.on("scroll", function () {
        var a = t.scrollTop(),
            o = e(".navbar-brand img"),
            i = e(".navbar-brand.logodefault img");
        a <= 250 ? (e("header").removeClass("scrollHeader").addClass("fixedHeader").fadeIn(400), o.attr("src", "img/logos/logo-b.png")) : (e("header").removeClass("fixedHeader").addClass("scrollHeader").fadeIn(400), o.attr("src", "img/logos/logo-b.png")), i.attr("src", "img/logos/logo-b.png")
    }), t.on("scroll", function () {
        500 < e(this).scrollTop() ? e(".scroll-to-top").fadeIn(400) : e(".scroll-to-top").fadeOut(400)
    }), e(".scroll-to-top").on("click", function (t) {
        t.preventDefault(), e("html, body").animate({
            scrollTop: 0
        }, 600)
    }), e(".parallax,.bg-img").each(function (t) {
        e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")")
    }), e(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), e(".popup-social-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), e(".source-modal").magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160
    }), 0 !== e(".copy-clipboard").length && (new ClipboardJS(".copy-clipboard"), e(".copy-clipboard").on("click", function () {
        var t = e(this);
        t.text(), t.text("Copied"), setTimeout(function () {
            t.text("Copy")
        }, 2e3)
    })), t.resize(function (e) {
        setTimeout(function () {
            a()
        }, 500), e.preventDefault()
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(), e(".text-animation").waypoint(function () {
        e(".text-animation.animated").textillate()
    }, {
        offset: "100%"
    }), e(".page-title-section .text-animation").textillate(), a(), e(document).ready(function () {
        e(".portfolio-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            autoplayHoverPause: !0,
            dots: !1,
            margin: 30,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        }), e(".portfolio2-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            dots: !0,
            margin: 30,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        }), e(".clientele-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            autoplayHoverPause: !0,
            dots: !1,
            margin: 20,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 6
                },
                1400: {
                    items: 6
                }
            }
        }), e(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: 1,
            margin: 0,
            autoplay: !0,
            smartSpeed: 500
        }), e(".current-year").text((new Date).getFullYear()), e(".countup").counterUp({
            delay: 25,
            time: 2e3
        }), e(".countdown").countdown({
            date: "01 Dec 2024 00:01:00",
            format: "on"
        })
    })
}(jQuery);