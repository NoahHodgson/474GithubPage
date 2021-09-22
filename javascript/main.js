//https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
//https://www.emailjs.com/docs/tutorial/creating-contact-form/  
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_CKhTbWXzAHfDHASX78h5a');
})();

function modifyPage(){
    const page = document.getElementById("form_page")
    page.style["textAlign"] = "center"
    page.style["justifyContent"] = "center"
    page.innerHTML = "<h1> Thank you for filling out this form. Please allow Noah 3 to 5 days to respond </h1> <img src='https://lh3.googleusercontent.com/proxy/b0TonRsz7AROZnCGPbecxi69sIR2ZJz8bC8eVMrX83FMqhplUGvRfr9X5SG8_YcLnwGiZVYEgtC6bzmxemoTPnJGkgJKRSg' style='width: 500; length: 500'>"
}

function formCall() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0; 
        // these IDs from the previous steps
        emailjs.sendForm('service_x9ge2o7', 'template_s1kgxyo', this)
            .then(function() {
                console.log('SUCCESS!');
                modifyPage();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}