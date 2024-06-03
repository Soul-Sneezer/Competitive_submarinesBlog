function fetchJSONData() {
	fetch("https://competitivesubmarines.com/post0.json")
							.then((res) => {
									if (!res.ok) {
											throw new Error
													(`HTTP error! Status: ${res.status}`);
									}
									return res.json();
							})
							.then((data) => 
										console.log(data))
							.catch((error) => 
										 console.error("Unable to fetch data:", error));
			}

var file = fetchJSONData();
var s = JSON.parse(file);
var article = document.getElementsByTagName("article")[0];
article.innerHtml = s.content;
