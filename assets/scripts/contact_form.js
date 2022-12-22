var message = "";

/*document.getElementById("submit_btn").onclick = function()*/
function submit_contact_form(id)
{
    // https://jsfiddle.net/228d4snb/

    let form = document.getElementById('contact_form');
    let message = $(form).serialize();

    let do_send = true;
    if(do_send)
    {
    	$.ajax({
    	    url: 'https://formspree.io/f/' + id, 
    	    method: 'POST',
    	    data: { message: message },
    	    dataType: 'json'
    	});
    }

    return true;
}

function show_confirmation()
{
    let do_alert = false;
    if(do_alert)
    {
        window.alert('Thank you for your email!');
    }

    let do_modal = true;
    if(do_modal)
    {
        let confirmation_modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmation_modal.show();
    }

    let do_inline = false;
    if(do_inline)
    {
        document.getElementById("confirm").innerHTML = 'Thank you for your email!'
    }

    let do_toast = false;
    if(do_toast)
    {
        let toastElList = [].slice.call(document.querySelectorAll('.toast'))
        let toastList = toastElList.map(function(toastEl) {
            // Creates an array of toasts (it only initializes them)
            return new bootstrap.Toast(toastEl) // No need for options; use the default options
        });
        toastList.forEach(toast => toast.show()); // This show them

        //console.log(toastList); // Testing to see if it works
    }
}

function on_submit_request(id)
{
    //TODO form_validation()
    let success = submit_contact_form(id);
    if(success)
        show_confirmation();
};