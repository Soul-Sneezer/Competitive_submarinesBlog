window.onload = function() {
	var a = document.querySelectorAll("article")[0];
	var par = document.createElement("p");
	par.style.background = "#242930";
	console.log(a)

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "./content0.tex");
	xhr.onreadystatechange = function() {
		console.log(xhr.responseText);
		par.innerHTML = xhr.responseText;
	}
	xhr.send();
	a.appendChild(par);
}
