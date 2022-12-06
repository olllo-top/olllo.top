//var iframe = document.getElementById('myFrame');
var iframe = document.getElementsByTagName('iframe')[0];

if (iframe.attachEvent) {
    iframe.attachEvent("onload", function () {
        console.log(iframe.contentWindow.document.body.innerHTML);
    });
}
else {
    iframe.onload = function () {
        iframe.click();
        //console.log(iframe.contentWindow.document.body.innerHTML);

    };
}