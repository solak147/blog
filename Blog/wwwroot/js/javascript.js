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
    } else {
        $(".sidebar").animate({
            width: '70vw'
        });
    }
}