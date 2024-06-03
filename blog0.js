var article = document.getElementsByTagName("article")[0];
var fs = require("fs");
var content = fs.readFileSync("./content0.tex", "utf-8");
var par = document.createElement("p")
par.innerHTML = content;
article.appendChild(par);
