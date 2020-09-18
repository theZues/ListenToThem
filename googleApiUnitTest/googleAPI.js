$('form').on('submit', (event) => {

		event.preventDefault();


		const userInput = $('input[type="text"]').val();


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-books.p.rapidapi.com/volumes?q=" + userInput,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-books.p.rapidapi.com",
		"x-rapidapi-key": "034bd792d0msh7699241f330da8dp16baf9jsn6b7d90e3100d"
	}
}

$.ajax(settings).done(function (response) {
			for (let i = 0; i < response.items.length; i++) {
			$('#title').append($('<p>').html(response.items[i].volumeInfo.title));
 		  $('#author').append($('<p>').html(response.items[i].volumeInfo.authors));

	 }
$(event.currentTarget).trigger('reset');



});
$('#title').empty();
$('#author').empty();
});
