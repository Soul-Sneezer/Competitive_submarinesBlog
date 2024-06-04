function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function moveSub(sub, link)
{
  var move = false;

  sub.addEventListener('click', function(event) {
    window.location.href = "blog" + link + ".html";
  }, true);

  sub.addEventListener('mousedown', function(event) {
			if(event.which == 2)
			{
        setTimeout(function() {

        event.stopPropagation();
        event.preventDefault();
                    move = true;
        }, 1000);
			}
}, true);

    sub.addEventListener('mousemove', function(event) {
      event.stopPropagation();
      if(move == true)
      {
        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        sub.style.top = event.pageY + "px";
        sub.style.left = event.pageX + "px";
      }
  }, true);

  sub.addEventListener('mouseup', function(event) {
    if(event.which == 2)
    {
      event.stopPropagation();
      event.preventDefault();
      move = false;  
    }
  }, true);

}

window.onload  = function() {

	var submarines = document.querySelectorAll(".submarine__body");
  var propellers = document.querySelectorAll(".submarine__propeller");
  var bubbles = document.querySelectorAll(".bubbles__container");
  var submarine_links = document.querySelectorAll(".submarine__container a")

  for(var i = 0; i < submarines.length; i++)
  {
    var rand1 = getRandomInt(30);
    var rand2 = getRandomInt(30);
    submarines[i].style.width = 200 + rand1 + "px";
    submarines[i].style.height = 60 + rand2 + "px";
    propellers[i].style.left = 300 + rand1 / 2 + "px";
    bubbles[i].style.left = 250 + rand1 / 2 + "px";
  }

  for(var i = 0; i < submarines.length; i++)
  {
    submarine_links[i].replaceWith(...submarine_links[i].childNodes); 
    moveSub(submarines[i], i);	
  }
}
