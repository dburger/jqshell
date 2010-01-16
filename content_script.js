var reload = function(callback) {
    window.location.href = window.location.href;
    callback(null);
};
var execute = function(code, callback) {
    var exception = null;
    try {
        eval(code);
    } catch (exc) {
      // there was a circular reference in jQueries exceptions that
      // sendResponse didn't like
      exception = {name: exc.name, message: exc.message};
    }
    callback(exception);
};

chrome.extension.onRequest.addListener(
        function(data, sender, callback) {
    if (data.reload) {
        reload(callback);
    } else if (data.code) {
        execute(data.code, callback);
    } else {
        callback({name: "InvalidArgumentException",
            message: "Argument to content script not understood."});
    }
});
