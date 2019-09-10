searchMovie();

function searchMovie() {
    var xhr = new XMLHttpRequest();
	
	xhr.open("GET", `https://api-content.ingresso.com/v0/sessions/63040598/partnership/home`);
	
	xhr.addEventListener("load", function(){
		var response = xhr.responseText;
		var contentMovie = JSON.parse(response);
		
		console.log(contentMovie);
		
		createContent(contentMovie);
		createInfoMovie(contentMovie);
		createTrailer(contentMovie);
		createAddress(contentMovie);

		
	});
	
	xhr.send();
	

}

function createContent (contentMovie){

	let movieTop = contentMovie.event.images[1].url; 
	let moviePoster = contentMovie.event.images[0].url;
	const content = document.getElementById('destaque');
	const contentPoster = document.getElementById('img-cartaz');
	
	content.innerHTML = `<img src="${movieTop}">`;
	contentPoster.innerHTML = `<img src="${moviePoster}" class="image">`;
}

function createInfoMovie(contentMovie){
	let title = contentMovie.event.title;
	let originalTitle = contentMovie.event.originalTitle;
	let synopsis = contentMovie.event.synopsis;
	const contentInfoMovie = document.getElementById('info-movie');

	contentInfoMovie.innerHTML = `<h2>${title}</h2> 
	<h3>${originalTitle}</h3> <span><p>${synopsis}</p></span>`
}

function createTrailer (contentMovie){
	let trailer = contentMovie.event.trailers[0].embeddedUrl;
	const contentTrailer = document.getElementById('trailer');

	contentTrailer.innerHTML = `<iframe  src="${trailer}"></iframe>`
}

function createAddress(contentMovie){

	let logoCinema = contentMovie.theater.images[0].url;
	let address = contentMovie.theater.address;
	let addressComplement = contentMovie.theater.addressComplement;
	let state = contentMovie.theater.state;
	let neighborhood = contentMovie.theater.neighborhood;
	let number = contentMovie.theater.number;
	let name = contentMovie.theater.name;

	document.getElementById('logo-cinema').innerHTML=`
	<img  src="${logoCinema}" class="image-cinema"> `;
	
	document.getElementById('address').innerHTML=`
	<h3>${name}</h3> <p class="address">${address},${number} ${addressComplement},${neighborhood},${state}`;

}

function createSession (ContentMovie){
	let room = contentMovie.room;
	let hour = contentMovie.realDate;

}