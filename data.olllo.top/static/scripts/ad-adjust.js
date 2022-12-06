
$(document).ready(function () {
    //alert("jquery====》document ready");
    adjust()
});

$(window).resize(function () {
    adjust()
});

function adjust() {
    var div = document.getElementById('adlink');
    var wd = div.style.width || div.clientWidth || div.offsetWidth || div.scrollWidth;

    var iframe = document.getElementsByTagName('iframe')[0];
    if (iframe != undefined) {
        iframe.width = wd;
    }
    
}