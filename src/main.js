import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Country } from './js/api.js';
//import { convertAUD, convertEUR, convertGBP, convertJPY, convertCHF, notCurrency, statusError } from './js/international';

function clearFields() {
  $('#usdInput').val("");
  $('#currencyConvert').val("");
}

function getConversion() {
  
}

$('document').ready(function() {
  $('#submitUSD').click(function() {
    event.preventDefault();
    let usDollar = parseInt($('#usdInput').val());
    let currency = $('#currencyConvert').val();
    clearFields();
    let promise = Country.currencyConversion(currency);
    console.log(promise);

    // promise.then(function(response) {
    // const body = JSON.parse(response);
    //   function convertAUD(response, usDollar) {
    //     $('.showAUD').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.AUD * usDollar) + " AUD");
    //     $('.showEUR').text("");
    //     $('.showGBP').text("");
    //     $('.showJPY').text("");
    //     $('.showCHF').text("");
    //     $('.showErrors').text("");
    //     $('.statusError').text("");
    //   }
      
    //   function convertEUR(response, usDollar) {
    //     $('.showAUD').text("");
    //     $('.showEUR').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.EUR * usDollar) + " EUR");
    //     $('.showGBP').text("");
    //     $('.showJPY').text("");
    //     $('.showCHF').text("");
    //     $('.showErrors').text("");
    //     $('.statusError').text("");
    //   }
      
    //   function convertGBP(response, usDollar) {
    //     $('.showAUD').text("");
    //     $('.showEUR').text("");
    //     $('.showGBP').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.GBP * usDollar) + " GBP");
    //     $('.showJPY').text("");
    //     $('.showCHF').text("");
    //     $('.showErrors').text("");
    //     $('.statusError').text("");
    //   }
      
    //   function convertJPY(response, usDollar) {
    //     $('.showAUD').text("");
    //     $('.showEUR').text("");
    //     $('.showGBP').text("");
    //     $('.showJPY').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.JPY * usDollar) + " JPY");
    //     $('.showCHF').text("");
    //     $('.showErrors').text("");
    //     $('.statusError').text("");
    //   }
      
    //   function convertCHF(response, usDollar) {
    //     $('.showAUD').text("");
    //     $('.showEUR').text("");
    //     $('.showGBP').text("");
    //     $('.showJPY').text("");
    //     $('.showCHF').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.CHF * usDollar) + " CHF");
    //     $('.showErrors').text("");
    //     $('.statusError').text("");
    //   }
      
    //   function notCurrency(currency) {
    //     $('.showAUD').text("");
    //     $('.showEUR').text("");
    //     $('.showGBP').text("");
    //     $('.showJPY').text("");
    //     $('.showCHF').text("");
    //     $('.showErrors').text("The currency " + currency + " doesn't exist!");
    //     $('.statusError').text("");
    //   }
      
    //   function statusError(error) {
    //     $('.showAUD').text("");
    //     $('.showEUR').text("");
    //     $('.showGBP').text("");
    //     $('.showJPY').text("");
    //     $('.showCHF').text("");
    //     $('.showErrors').text("");
    //     $('.statusError').text("You have a " + error + " status error!");
    //   }
    // });
  });
});