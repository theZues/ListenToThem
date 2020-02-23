const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  const data = JSON.parse(response);
  console.log(data);

  const randQuote = Math.floor(Math.random() * data.length);
    let randQuote1 = data[randQuote].text;
    console.log(randQuote1);











});
