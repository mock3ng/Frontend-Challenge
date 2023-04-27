## Currency Converter App

![exchanger](https://github.com/mock3ng/Frontend-Challenge/blob/Currency-Converter/exchange.png)


It begins by declaring a constant api_key and url, which are used to access the exchange rate API.

The code then selects elements from the HTML document using querySelector, including two currency selectors, two lists of supported currencies, an amount input, a calculate button, and a result display area.

Next, there is a function called getExchane that takes three parameters: main (the currency being converted from), tochange (the currency being converted to), and amount (the amount of the currency being converted). This function sends a fetch request to the API with the appropriate endpoint, using the provided main currency as the base currency. It then extracts the conversion rate for the tochange currency from the API response, calculates the converted amount, and generates an HTML tag to display the result. Finally, the function updates the result element with the generated tag.

After that, there is a fetch request to get a list of supported currency codes from the API. The response is converted to JSON format and the list of supported codes is extracted. The code then iterates through this list and generates HTML options for each currency code. The resulting HTML options are inserted into the two currency lists on the page.

Finally, an event listener is added to the calculate button that triggers the getExchane function when clicked. It gets the values from the currencyOne, currencyTwo, and amount inputs and passes them to the getExchane function to perform the conversion and display the result.
