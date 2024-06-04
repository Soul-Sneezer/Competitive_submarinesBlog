function moveSub(sub, link)
{
  var move = false;
  link.addEventListener('click', function(event) {
    if(event.which == 2)
      event.preventDefault();
  }, true);


  link.addEventListener('mousedown', function(event) {
    if(event.which == 2)
      event.preventDefault();
  }, true);
  
  link.addEventListener('mouseup', function(event) {
    if(event.which == 2)
      event.preventDefault();
  }, true);

  sub.addEventListener('mousedown', function(event) {
			if(event.which == 2)
			{
        event.stopPropagation();
        move = true;
			}
}, true);

    sub.addEventListener('mousemove', function(event) {
      event.preventDefault();
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

	var submarines = document.querySelectorAll(".submarine__container");
  var submarine_links = document.querySelectorAll(".submarine__container a")
	var hold_time = 1000;

	var sub = submarines[0];
  var submarine_link = submarine_links[0];
 
  console.log(submarine_link);
  moveSub(sub, submarine_link);		
}
