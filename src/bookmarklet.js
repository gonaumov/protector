javascript:(() => {
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.appendChild(document.createTextNode(
        `* {
        -webkit-touch-callout: default !important;
        -webkit-user-select: auto !important;
        -khtml-user-select: auto !important;
        -moz-user-select: auto !important;
        -ms-user-select: auto !important;
        user-select: auto !important;
        cursor: auto !important;
        -webkit-tap-highlight-color: black !important;
        }`
    ));
    if (typeof document.body.style.MozUserSelect != "undefined") {
        document.body.style.MozUserSelect = "auto";
    }
    document.body.style.cursor = "default";
    [
        "selectstart",
        "mousedown",
        "contextmenu"
    ].forEach((eventType) => {
        window.addEventListener(eventType, (event) =>
            event.stopPropagation(), true);
    })
})()
