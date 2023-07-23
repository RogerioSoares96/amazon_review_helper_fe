document.addEventListener('DOMContentLoaded', function () {
    tabs = chrome.tabs.query({ active: true, currentWindow: true })
    .then((tabs) => {
        chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content_script.js"]})
        const enableButton = document.getElementById('enableButton');
        const textContainer = document.getElementById('textContainer');
        const spinner = document.getElementById('spinner');
        chrome.runtime.onMessage.addListener((message) => {
            if (message.action === 'notAmazon') {
                enableButton.disabled = true;
            } 
            if (message.action === 'Amazon') {
                enableButton.disabled = false;
                enableButton.addEventListener('click', function () {
                    spinner.classList.add('spinner');
                    chrome.runtime.sendMessage({ action: 'scrappingHTML', content: message.content});
                });
            }
        });
        chrome.runtime.onMessage.addListener((message) => {
            if (message.action === 'reviews') {
                console.log(message.content)
                spinner.classList.remove('spinner');
                const paragraph = document.createElement('p')
                paragraph.textContent = message.content
                textContainer.appendChild(paragraph)
            }
        });
        
    });
});

  