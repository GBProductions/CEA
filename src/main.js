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


$('document').ready(function() {
  $('#submitUSD').click(function() {
    event.preventDefault();
    const usDollar = parseInt($('#usdInput').val());
    const currency = $('#currencyConvert').val();
    clearFields();
    
    Country.currency();

    console.log(Country.currency());

  });
});