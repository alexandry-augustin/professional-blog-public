/* https://jsfiddle.net/228d4snb/ */

var message = "";

document.getElementById("submit_btn").onclick = function()
{
	var form = document.getElementById('contact_form');
	var message = $(form).serialize();

	var do_send = false;
	if(do_send)
	{
		$.ajax({
		    url: "https://formspree.io/f/maylpzzb", 
		    method: "POST",
		    data: {message: message},
		    dataType: "json"
		});
	}
    
 	window.console.log(message)
    
   	var do_alert = false;
	if(do_alert)
	{
		window.alert('Thank you for your email!');
	}
	
	var do_inline = false;
	if(do_inline)
	{
		document.getElementById("confirm").innerHTML = 'Thank you for your email!'
	}
    
	var do_toast = false;
	if(do_toast)
	{
		var toastElList = [].slice.call(document.querySelectorAll('.toast'))
		var toastList = toastElList.map(function(toastEl) {
		// Creates an array of toasts (it only initializes them)
		  return new bootstrap.Toast(toastEl) // No need for options; use the default options
		});
		toastList.forEach(toast => toast.show()); // This show them

		//console.log(toastList); // Testing to see if it works
    }
    
    return false;
};