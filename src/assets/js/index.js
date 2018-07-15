document.addEventListener("DOMContentLoaded", function(event) {

    /* ---------------------------------------------- /*
         * Nav
    /* ---------------------------------------------- */
    const $nav = $('.nav');
    const $navButton = $('.nav__button');
    const $navLinks = $('.nav__links');
    const navOffset = $nav.offset();

    $navButton.click(function () {
        $navLinks.slideToggle();
    });

    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop();
        if (scrollTop >= navOffset.top) {
            $nav.addClass('nav_fixed');
        } else {
            $nav.removeClass('nav_fixed');
        }
    });


    /* ---------------------------------------------- /*
         * Phone mask
    /* ---------------------------------------------- */
    $('input[name="phone"]').inputmask({"mask": "+7(999) 999-9999"});

    /* ---------------------------------------------- /*
         * PopUp
    /* ---------------------------------------------- */
    $('[data-popUp="callMe"]').magnificPopup({
        items: {
            src: $('#requestPopUp'),
            type: 'inline',
        },
        autoFocusLast: true,
        fixedContentPos: false,
        fixedBgPos: false,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
    });

    /* ---------------------------------------------- /*
         * callRequest
    /* ---------------------------------------------- */
    const callRequest = document.getElementById('callRequest');
    const callRequestClose = document.getElementById('callRequestClose');

    function callRequestShow() {
        callRequest.style.opacity = "1";
    }

    callRequestClose.onclick = function (e) {
        e.preventDefault();
        callRequest.style.opacity = "0";
    };

    setTimeout(callRequestShow, 5000);



    /* ---------------------------------------------- /*
         * Form submit
    /* ---------------------------------------------- */

    $('form').on('submit', function () {

        const form = $(this);
        const submitBtn = form.find('button[type="submit"]');

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: form.serialize()
        }).done(function() {
            $.magnificPopup.open({
                items: {
                    src: $('#thankyouPopUp'),
                    type: 'inline',
                },
                preloader: false,
                showCloseBtn: false,

            });
            setTimeout(function() {
                // Done Functions
                form.trigger("reset");
                $.magnificPopup.close();
            }, 4000);
        });
        return false;
    });

});