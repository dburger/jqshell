chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var response = null;
    try {
        eval(request.code);
    } catch (exc) {
        response = exc.message || exc.toString();
    }
    sendResponse(response);
});
