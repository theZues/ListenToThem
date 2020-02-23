

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  const data = JSON.parse(response);
    console.log(data);

  const randNum1 = Math.floor(Math.random() * data.length);
  const randNum2 = Math.floor(Math.random() * data.length);


  const moreQuotes = () => {

    let quote1 = data[randNum1].text;
    let author1 = data[randNum1].author;

      // console.log(quote1);
      // console.log(author1);

    let quote2 = data[randNum2].text;
    let author2 = data[randNum2].author;
      // console.log(quote2);
      // console.log(author2);

    $('.quote1').append(quote1);
    $('.quote2').append(quote2);
    $('.author1').append(author1);
    $('.author2').append(author2);
  }
moreQuotes();

  // $('.moreQuotesButton').on('click', () => {
  //   moreQuotes();
  // })

});
