import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Country from './js/api';
import { convertAUD, convertEUR, convertGBP, convertJPY, convertCHF, statusError, notCurrency } from './js/international';

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
      const body = JSON.parse(response);
      if (currency === "AUD") {
        convertAUD(body, usDollar);
      } else if (currency === "EUR") {
        convertEUR(body, usDollar);
      } else if (currency === "GBP") {
        convertGBP(body, usDollar);
      } else if (currency === "JPY") {
        convertJPY(body, usDollar);
      } else if (currency === "CHF") {
        convertCHF(body, usDollar);
      } else {
        notCurrency(currency);
      }
    });
  });
});