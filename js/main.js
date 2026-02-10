// accordian
$(function () {

    $(".faq-answer").hide();
    $(".slideUp").hide();
    $(".slideDown").on("click", function () {
        $(".faq-answer").slideDown();
        $(".slideUp").show();
        $(".slideDown").hide();
    });

    $(".slideUp").on("click", function () {
        $(".faq-answer").slideUp();
        $(".slideUp").hide();
        $(".slideDown").show();
    });




    $(".faq-answer1").hide();
    $(".slideUp1").hide();
    $(".slideDown1").on("click", function () {
        $(".faq-answer1").slideDown();
        $(".slideUp1").show();
        $(".slideDown1").hide();
    });

    $(".slideUp1").on("click", function () {
        $(".faq-answer1").slideUp();
        $(".slideUp1").hide();
        $(".slideDown1").show();
    });






    $(".faq-answer2").hide();
    $(".slideUp2").hide();
    $(".slideDown2").on("click", function () {
        $(".faq-answer2").slideDown();
        $(".slideUp2").show();
        $(".slideDown2").hide();
    });

    $(".slideUp2").on("click", function () {
        $(".faq-answer2").slideUp();
        $(".slideUp2").hide();
        $(".slideDown2").show();
    });




    $(".faq-answer3").hide();
    $(".slideUp3").hide();
    $(".slideDown3").on("click", function () {
        $(".faq-answer3").slideDown();
        $(".slideUp3").show();
        $(".slideDown3").hide();
    });

    $(".slideUp3").on("click", function () {
        $(".faq-answer3").slideUp();
        $(".slideUp3").hide();
        $(".slideDown3").show();
    });
})
// GALLERY SWIPER 
var gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});


// INSTAGRAM SWIPER 
var instagramSwiper = new Swiper(".instagramSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});
// Sticky Navbar
$(document).ready(function () {
    var header = $("#mainHeader");
    var headerOffset = header.offset().top;

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > headerOffset) {
            header
                .removeClass("absolute top-10")
                .addClass("fixed top-0 bg-black shadow-lg");
        } else {
            header
                .removeClass("fixed top-0 bg-black shadow-lg")
                .addClass("absolute top-10");
        }
    });
    $("#menuBtn").click(function () {
        $("#mobileMenu").slideToggle();
    });
    $("#mobileService").click(function () {
        $("#mobileDropdown").slideToggle();
    });

});

// TESTIMONIAL
new Swiper(".testimonialSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    speed: 5000,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});
// wide section
new Swiper(".hoverExpandSwiper", {
    slidesPerView: 5,
    spaceBetween: 16,
    speed: 600,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
// leftToRight
new Swiper(".leftToRightServiceSwiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    speed: 6000, 
    autoplay: {
      delay: 0,
      reverseDirection: true, 
      disableOnInteraction: false,
    },
    allowTouchMove: false, 
  });
//  aos 
AOS.init();
// form validation
$(function () {

    const regname = /^[A-Za-z ]{2,}$/
    const regemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const regservices = /^[A-Za-z ]+$/
    const regdate = /^\d{4}-\d{2}-\d{2}$/
    const regmessage = /^[A-Za-z0-9\s.,!?'"()-]{10,300}$/



    $("#firstCheck").hide();
    $("#emailCheck").hide();
    $("#servicesCheck").hide();
    $("#dateCheck").hide();
    $("#messageCheck").hide();

    let first_no_err = true;
    let email_no_err = true;
    let services_no_err = true;
    let date_no_err = true;
    let message_no_err = true;

    // first name
    $("#f_name").on('keyup', NameChecker)

    function NameChecker() {
        let data = $('#f_name').val();
        console.log("f_name", data);
        if (data.length < 1) {
            $("#firstCheck").show();
            $("#firstCheck").html("* required field");
            first_no_err = false;
        }
        else if (!regname.test(data)) {
            $("#firstCheck").show();
            $("#firstCheck").html("* please enter atleast 4 letter");
            first_no_err = false;
        }
        else {
            $("#firstCheck").hide();
            first_no_err = true;
        }
    }

    // email
    $("#email").on('keyup', emailChecker)

    function emailChecker() {
        let data2 = $('#email').val();
        console.log("email", data2);
        if (data2.length < 1) {
            $("#emailCheck").show();
            $("#emailCheck").html("* required field");
            email_no_err = false;
        }
        else if (!regemail.test(data2)) {
            $("#emailCheck").show();
            $("#emailCheck").html("* not valid");
            email_no_err = false;
        }
        else {
            $("#emailCheck").hide();
            email_no_err = true;
        }
    }

    // services
    $("#services").on('keyup', servicesChecker)

    function servicesChecker() {
        let data3 = $('#services').val();
        console.log("services", data3);
        if (data3.length < 1) {
            $("#servicesCheck").show();
            $("#servicesCheck").html("* required field");
            services_no_err = false;
        }
        else if (!regservices.test(data3)) {
            $("#servicesCheck").show();
            $("#servicesCheck").html("* not valid");
            services_no_err = false;
        }
        else {
            $("#servicesCheck").hide();
            services_no_err = true;
        }
    }

    // date
    $("#date").on('keyup', dateChecker)

    function dateChecker() {
        let data5 = $('#date').val();
        console.log("date", data5);
        if (data5.length < 1) {
            $("#dateCheck").show();
            $("#dateCheck").html("* enter 10 digit");
            date_no_err = false;
        }
        else if (!regdate.test(data5)) {
            $("#dateCheck").show();
            $("#dateCheck").html("* enter  10 digit");
            date_no_err = false;
        }
        else {
            $("#dateCheck").hide();
            date_no_err = true;
        }
    }
    // message
    $("#message").on('keyup', messageChecker)

    function messageChecker() {
        let data4 = $('#message').val();
        console.log("message", data4);
        if (data4.length < 1) {
            $("#messageCheck").show();
            $("#messageCheck").html("* required field");
            message_no_err = false;
        }
        else if (!regmessage.test(data4)) {
            $("#messageCheck").show();
            $("#messageCheck").html("* not valid");
            message_no_err = false;
        }
        else {
            $("#messageCheck").hide();
            message_no_err = true;
        }
    }

    $("#rForm").submit(function () {
        NameChecker();
        emailChecker();
        servicesChecker();
        dateChecker();
        messageChecker();
        if (first_no_err == true && email_no_err == true && services_no_err == true && date_no_err == true && message_no_err == true) {
            return true;
        }
        else {
            return false;
        }
    })
});




