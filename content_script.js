chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var exception = null;
    try {
        eval(request.code);
    } catch (exc) {
      // there was a circular reference in jQueries exceptions that
      // sendResponse didn't like
      exception = {name: exc.name, message: exc.message};
    }
    sendResponse(exception);
});
