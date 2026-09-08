function submit_contact_form(id) {
    let form = document.getElementById('contact_form');
    
    // Create a data object from the form fields
    let formData = new FormData(form);
    console.log(formData)

    // fetch('https://formspree.io/f/' + id, {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //         'Accept': 'application/json'
    //     }
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         console.error('Submission failed');
    //     }
    // })
    // .catch(error => console.error('Error:', error));

    return true;
}

function show_confirmation()
{
    window.alert('Thank you for your email!');
}

function on_submit_request(id)
{
    let success = submit_contact_form(id);
    if(success)
        show_confirmation();
};