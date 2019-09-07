
function searchMovie {
    var xhr = new XMLHttpRequest();
	
	xhr.open("GET", `https://api-content.ingresso.com/v0/sessions/63040598/partnership/home`);
	
	xhr.addEventListener("load", function(){
		var response = xhr.responseText;
		var contentMovie = JSON.parse(response);
    });
}