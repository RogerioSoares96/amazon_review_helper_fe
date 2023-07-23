function getHTML() {
    return document.documentElement.outerHTML
}

function isAmazonWebsite() {
    return /^https?:\/\/(www\.)?amazon\.\w+\.[a-z]+\//.test(window.location.href);
}

if (isAmazonWebsite()) {
    chrome.runtime.sendMessage({action: 'Amazon', content: getHTML()})
} else {
    chrome.runtime.sendMessage({action: 'notAmazon'})
}
