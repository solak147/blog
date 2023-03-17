function drawCode() {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}

function navToggle() { 
    let wd = $(".sidebar").width(); 
    if (wd > 0) {
        $(".sidebar").animate({
            width: 0
        });

        $('.close').addClass('menu');
        $('.close').removeClass('close');
        $('body').css('overflow-y', 'auto');
    } else {
        $(".sidebar").animate({
            width: '70vw'
        });

        $('.menu').addClass('close');
        $('.menu').removeClass('menu');
        $('body').css('overflow-y', 'hidden');
    }
    $('.navbar-brand').toggle();
}