function sendFormularData()
{
	var formular = document.querySelectorAll("#search input")[0];
	console.log(formular.value);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://competitivesubmarines.com/");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
		{
		}
	}	

	xhr.send(formular.value);

}

window.onload = function ()
{
	document.addEventListener('keypress', function(event) {
		if(event.keyCode == 13 || event.which == 13)
			sendFormularData();
	}, true);
}
