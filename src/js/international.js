import $ from 'jquery';

export function convertAUD(response, usDollar) {
  $('.showAUD').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.AUD * usDollar) + " AUD");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertEUR(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.EUR * usDollar) + " EUR");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertGBP(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.GBP * usDollar) + " GBP");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertJPY(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.JPY * usDollar) + " JPY");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("");
}

export function convertCHF(response, usDollar) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.CHF * usDollar) + " CHF");
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

export function statusError(error) {
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
  $('.statusError').text("You have a " + error + " status error!");
}