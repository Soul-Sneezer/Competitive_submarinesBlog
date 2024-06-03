window.onload = function() {
	var a = document.querySelectorAll("article p")[0];
	console.log(a)

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://competitivesubmarines.com/posts_contents/content0.txt");
	xhr.onreadystatechange = function() {
		console.log(xhr.responseText);
		a.innerHTML = xhr.responseText;
	}
	xhr.send();
}
