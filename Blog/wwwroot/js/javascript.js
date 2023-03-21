function drawCode() {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}

function navToggle() { 
    if (document.body.clientWidth > 640) {
        return;
    } 

    let wd = $(".sidebar").position().left; 
    if (wd == 0) {
        $(".sidebar").animate({"left":"-500"}, "slow");

        $('.close').addClass('menu');
        $('.close').removeClass('close');
        $('body').css('overflow-y', 'auto');
        document.getElementsByTagName("main")[0].removeEventListener('touchmove', mo, { passive: false });
    } else {
        $(".sidebar").animate({ "left": "0" }, "slow");

        $('.menu').addClass('close');
        $('.menu').removeClass('menu');
        $('body').css('overflow-y', 'hidden');
        document.getElementsByTagName("main")[0].addEventListener('touchmove', mo, { passive: false });
    }

}

function removeTouchMove() {
    if (document.body.clientWidth > 640) {
        return;
    } 

    document.getElementsByTagName("main")[0].addEventListener('touchmove', mo, { passive: false });
}

function mo(e) {
    e.preventDefault();
}

