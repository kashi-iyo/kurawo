
// モバイルメニューボタン
$(function () {
    const mbtn = $('.header__inner #mobile-trigger');
    const gcont = $('#global-container');
    const cover = $('#container .container-cover');
    mbtn.click(function () {
        gcont.toggleClass('open');
    });
    cover.click(function () {
        gcont.toggleClass('open');
    });
});

// アコーディオン
$(function () {
    const acbtn = $('#Wi #acBtn');
    acbtn.click(function () {
        // acbtn.not(this).children().slideUp();
        $(this).children().slideToggle(500);
    });
});

// 送信ボタン
$(function () {
    const inpbtn = $('input[type="submit"]');
    const inpvel = $('input[value="送信"]');
    inpbtn.click(function () {
        inpbtn.css('background-color', 'black');
        inpvel.css('color', 'white');
    });
});

// スクロールボタン
$(function () {
    $('a[href^=#]').click(function () {
        const gcont = $('#global-container');
        gcont.removeClass('open');
        const speed = 400;
        const href = $(this).attr('href');
        const target = $(href == '#' || href == '' ? 'html' : href);
        const position = target.offset().top;
        $('body, html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

// スクロールボタン消える
$(function () {
    const pagetop = $('.Scrollbtn');
    pagetop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
});