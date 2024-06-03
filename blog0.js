var a = document.querySelectorAll("article");
var par = document.createElement("p")
console.log(a)
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8000/content0.tex");
xhr.onreadystatechange = function() {
	console.log(xhr.responseText);
	par.innerHTML = xhr.responseText;
}
xhr.send();
//par.innerHTML = content;
//a.appendChild(par);
