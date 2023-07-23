# Amazon Review Helper

This is a Chrome extension that allows the user use OpenAI's GPT API's in order to summarize the reviews of a specific product, this is meant to work with the adjacent [BE project](https://github.com/RogerioSoares96/amazon_review_helper_be). The idea of a chrome extension derived from the fact that Amazon does not allow a website scrapper to get a product's reviews data, based on their Terms of Service.

### Current Capabilities:

* Identify if the user is in an amazon website and only allow the user the activate the review helper, if the user is in an amazon website

* Display concise and legible pros and cons of a specific product given its reviews

* Only gets the compiled reviews from the product reviews page, not from the original product page itself

### WIP:

* Allow the user to get the compiled reviews straight from the product page

* Use global env variables to load the BE project endpoint


## Installation Steps

1. Clone/Download this repo
2. On **background.js** add the correct BE endpoint string
3. On you Chrome go to **chrome://extensions**
4. Click on **Load Unpacked** and select this repo as the directory