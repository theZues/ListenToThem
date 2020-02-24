

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  const data = JSON.parse(response);
    console.log(data);

  let filteredData = [];
  for (let i = 0; i < data.length; i++) {
      if (data[i].author !== null) {
        filteredData.push(data[i]);
      }
   }
   console.log(filteredData);

  const randNum1 = Math.floor(Math.random() * filteredData.length);
  const randNum2 = Math.floor(Math.random() * filteredData.length);


  const moreQuotes = () => {

    let quote1 = filteredData[randNum1].text;
    let author1 = filteredData[randNum1].author;

      // console.log(quote1);
      // console.log(author1);

    let quote2 = data[randNum2].text;
    let author2 = data[randNum2].author;
      // console.log(quote2);
      // console.log(author2);

    $('.quote1').append($('<p>').html(quote1));
    $('.author1').append($('<p>').html('\"' + author1 +'\"'));
    $('.quote2').append($('<p>').html(quote2));
    $('.author2').append($('<p>').html('\"' + author2 +'\"'));
  }
moreQuotes();

  $('.moreQuotesButton').on('click', () => {
      window.location.reload();
  })


});

const $beforeYouGoBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('.close');

const openModal = () => {
    $modal.css('display', 'block');
}

const closeModal = () => {
    $modal.css('display', 'none');
}

$beforeYouGoBtn.on('click', openModal);
$closeBtn.on('click', closeModal);



//================This was me trying to do Google Books API======================
//Kept getting a 403 forbidden error


// $('form').on('submit', (event) => {
//
//     event.preventDefault();
//
//     const userInput = $('#books').val();  //don't use same style quotes
//
//
//     $.ajax({
//           url:'http://www.googleapis.com/books/v1/volumes?q=' + userInput +'&key=AIzaSyDTZixDRWuL9DLCI9_JpjtIpgKN41p1ZC8',
//           type: 'GET'
//
//     }).then(
//       (data) => {
//           console.log(data);
//           // $('#title').html(data.Title);
//           // $('#year').html(data.Year);
//           // $('#rating').html(data.Rated);
//       },
//       (error) => {
//           console.log('bad request');
//       }
//     );
//   })
