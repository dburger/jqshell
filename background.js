var sendToSelectedTab = function(data, responseHandler) {
    chrome.tabs.getSelected(null, function(tab) {
        // could have just executed directly with something like
        // chrome.tabs.executeScript(tab.id, {code: code}, callback);
        // or
        // chrome.tabs.executeScript(tab.id, {file: file}, callback);
        // here I'm forwarding with a message to the content_script.js
        // a content script was needed anyway to inject the jQuery into
        // the page
        chrome.tabs.sendRequest(tab.id, data, responseHandler)
    });
};
var execute = function(code, callback) {
    sendToSelectedTab({code: code}, callback);
};
var reload = function() {
    sendToSelectedTab({reload: true});
};
