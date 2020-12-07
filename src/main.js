import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Country from './js/api';
import { convertAUD, convertEUR, convertGBP, convertJPY, convertCHF, notCurrency, statusError } from './js/international';

function clearFields() {
  $('#usdInput').val("");
  $('#currencyConvert').val("");
}


$('document').ready(function() {
  $('#submitUSD').click(function() {
    event.preventDefault();
    let usDollar = parseInt($('#usdInput').val());
    let currency = $('#currencyConvert').val();
    let USD = "USD";
    clearFields();
    let promise = Country.currencyConversion(USD);

    promise.then(function(response) {
      let body = JSON.parse(response);
    });

    if (currency === "AUD") {
      convertAUD(response, usDollar);
    } else if (currency === "EUR") {
      convertEUR(response, usDollar);
    } else if (currency === "GBP") {
      convertGBP(response, usDollar);
    } else if (currency === "JPY") {
      convertJPY(response, usDollar);
    } else if (currency === "CHF") {
      convertCHF(response, usDollar);
    } else if ((currency !== "EUR" || "GBP" || "JPY" || "CHF")) {
      notCurrency(currency);
    }
    if (this.status !== 200) {
      let error = this.status;
      statusError(error);
    };
  });
});
// $('.showAUD').text("Your $" + usDollar + " is equal to " + (body.conversion_rates.AUD * usDollar) + " " + currency);
