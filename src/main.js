import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { convertAUD, convertEUR, convertGBP, convertJPY, convertCHF, notCurrency, statusError } from './js/international';



$('document').ready(function() {
  $('#submitUSD').click(function() {
    event.preventDefault();
    const usDollar = parseInt($('#usdInput').val());
    $('#usdInput').val("");
    const currency = $('#currencyConvert').val();
    $('#currencyConvert').val("");



});