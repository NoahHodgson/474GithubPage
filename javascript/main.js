//https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
//https://www.emailjs.com/docs/tutorial/creating-contact-form/  
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_CKhTbWXzAHfDHASX78h5a');
})();

function formCall() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0; 
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}