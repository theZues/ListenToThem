//=============Quote API syntax===============

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  const data = JSON.parse(response);
  //  console.log(data);
  //===========filtering out authors with null as the name===================
  let filteredData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].author !== null) {
      filteredData.push(data[i]);
    }
  }
  //console.log(filteredData);

  //========Using this to get a random quote by the array's object index=============
  const randNum1 = Math.floor(Math.random() * filteredData.length);
  const randNum2 = Math.floor(Math.random() * filteredData.length);


  const moreQuotes = () => {

    let quote1 = filteredData[randNum1].text;
    let author1 = filteredData[randNum1].author;
    // console.log(quote1);  
    // console.log(author1);

    let quote2 = data[randNum2].text;
    let author2 = data[randNum2].author;


    //============putting quotes in respective divs================
    $('.quote1').append($('<p>').html(quote1));
    $('.author1').append($('<p>').html('\"' + author1 + '\"'));
    $('.quote2').append($('<p>').html(quote2));
    $('.author2').append($('<p>').html('\"' + author2 + '\"'));
  }
  moreQuotes();

  $('.moreQuotesButton').on('click', () => {
    //need to find another way than just refreshing whole page
    window.location.reload();
  })

});

// ============Google API syntax===========================

$('form').on('submit', (event) => {

  event.preventDefault();

  const userInput = $('input[type="text"]').val();


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.googleapis.com/books/v1/volumes?q=" + userInput,
    "method": "GET"
    // "headers": {
    // 	"x-rapidapi-host": "google-books.p.rapidapi.com",
    // 	"x-rapidapi-key": "caf3f85292mshdfc3fc4f2f67c0ep164e7cjsne8dc8b14bd20"
    //}
  }
  /*this is what i had before i took out rapidAPI stuff
  "url": "https://google-books.p.rapidapi.com/volumes?q=" + userInput,
  */
  //=========looping through results from GoogleAPI=========================
  $.ajax(settings).done(function (response) {
    console.log(response);

    for (let i = 0; i < response.items.length; i++) {
      /*first attempt at wrapping an img tag in a tag
      $('#title').append($('<p>').html(response.items[i].volumeInfo.title));
      $('#author').append($('<p>').html(response.items[i].volumeInfo.authors));
      ////////original////////////
      $('#bookImg').append($('<img>').attr('src', url)).wrap('<a href=' + response.items[i].volumeInfo.infoLink + '></a>').css('margin','5px');*/
      let url = response.items[i].volumeInfo.imageLinks.smallThumbnail;
      let img = $('<a href=' + response.items[i].volumeInfo.infoLink + '><img src=' + url + '/></a>');
      $('#bookImg').append(img);
    } //end of for loop

    $(event.currentTarget).trigger('reset');
    // event.stopPropagation();
  });// end of googleAPI response

  //refreshing the div for the next call
  $('#bookImg').empty();
  // i'll incorporate these when I update the site
  // $('#title').empty();
  // $('#author').empty();
  // $('#webAddress').empty();
//===========Modal section=====================================
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

});
