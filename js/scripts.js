var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
};

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item){
    $('<li>').text('====================').appendTo(countriesList);
    $('<li>').text('Name: ' + item.name).appendTo(countriesList);
    $('<li>').text('Native name: ' + item.nativeName).appendTo(countriesList);
    $('<li>').text('Langueges: ' + item.languages).appendTo(countriesList);
    $('<li>').text('Alpha Code: ' + item.alpha2Code).appendTo(countriesList);
    $('<li>').text('Population: ' + item.population).appendTo(countriesList);
    $('<li>').text('Region: ' + item.region).appendTo(countriesList);
    $('<li>').text('Subregion: ' + item.subregion).appendTo(countriesList);
    $('<li>').text('Time zone: ' + item.timezones).appendTo(countriesList);
  });
};