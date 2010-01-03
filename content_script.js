chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    try {
        eval(request.code);
    } catch (exc) {
        alert(exc.message);
    }
    sendResponse({});
});
