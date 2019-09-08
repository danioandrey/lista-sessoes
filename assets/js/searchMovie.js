searchMovie();

function searchMovie() {
    var xhr = new XMLHttpRequest();
	
	xhr.open("GET", `https://api-content.ingresso.com/v0/sessions/63040598/partnership/home`);
	
	xhr.addEventListener("load", function(){
		var response = xhr.responseText;
		var contentMovie = JSON.parse(response);
		let movieTop = contentMovie.event.images[1].url; 
		let moviePoster = contentMovie.event.images[0].url;
		let title = contentMovie.event.title;
		let originalTitle = contentMovie.event.originalTitle;
		let synopsis = contentMovie.event.synopsis;
		let trailer = contentMovie.event.trailers[0].embeddedUrl;
		
		console.log(trailer);
		createContent(movieTop,moviePoster);
		createInfoMovie(title, originalTitle, synopsis);
		createTrailer(trailer);


		
	});
	
	xhr.send();
	

}

function createContent (movieTop,moviePoster){
	
	const content = document.getElementById('destaque');
	const contentPoster = document.getElementById('img-cartaz');
	content.innerHTML = `<img src="${movieTop}">`;
	contentPoster.innerHTML = `<img src="${moviePoster}" class="image">`;


}

function createInfoMovie(title, originalTitle, synopsis){
	const contentInfoMovie = document.getElementById('info-movie');
	contentInfoMovie.innerHTML = `<h1>${title}</h1> 
	<h2>${originalTitle}</h2> <span><p>${synopsis}</p></span>`
}

function createTrailer (trailer){
	const contentTrailer = document.getElementById('trailer');
	contentTrailer.innerHTML = `<iframe  src="${trailer}"></iframe>`
}