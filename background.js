function connection(html) {
    const endpointURL = 'http://localhost:8000/reviewer' // Add your review summarizer endpoint string here
    const postData = {
        html: html
    }
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      };
    return fetch(endpointURL, requestOptions)
    .then(response => response.json())
    .then(data => data.data)
}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'scrappingHTML') {
        connection(message.content)
        .then((data) => chrome.runtime.sendMessage({ action: 'reviews', content: data }))
    }
})