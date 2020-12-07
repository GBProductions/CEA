import $ from 'jquery';

export function convertAUD(body, usDollar) {
  $('.showAUD').text("Your $" + usDollar + " is equal to " + (body.conversion_rates.AUD * usDollar) + " AUD");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertEUR(body, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("Your $" + usDollar + " is equal to " + (body.conversion_rates.EUR * usDollar) + " EUR");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertGBP(body, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("Your $" + usDollar + " is equal to " + (body.conversion_rates.GBP * usDollar) + " GBP");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertJPY(body, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("Your $" + usDollar + " is equal to " + (body.conversion_rates.JPY * usDollar) + " JPY");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertCHF(body, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("Your $" + usDollar + " is equal to " + (body.conversion_rates.CHF * usDollar) + " CHF");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function notCurrency(currency) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("The currency " + currency + " doesn't exist!");
  $('.statusError').text("");
}