//https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
//https://www.emailjs.com/docs/tutorial/creating-contact-form/  
(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_CKhTbWXzAHfDHASX78h5a');
})();

function modifyPage() {
    const page = document.getElementById("form_page")
    page.style["textAlign"] = "center"
    page.style["justifyContent"] = "center"
    page.innerHTML = "<h1> Thank you for filling out this form. Please allow Noah 3 to 5 days to respond </h1> <img src='https://lh3.googleusercontent.com/proxy/b0TonRsz7AROZnCGPbecxi69sIR2ZJz8bC8eVMrX83FMqhplUGvRfr9X5SG8_YcLnwGiZVYEgtC6bzmxemoTPnJGkgJKRSg' style='width: 500; length: 500'>"
}

function formCall() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0; 
        // these IDs from the previous steps
        emailjs.sendForm('service_x9ge2o7', 'template_s1kgxyo', this)
            .then(function () {
                console.log('SUCCESS!');
                modifyPage();
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

function homePageLoad() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("flex").innerHTML = `
            <div id="mobilechild">
                <br>
                <br>
                <!--Noah Hodgson, CISC 474 (010), Personal Web Page 3, noahmh@udel.edu-->
                <img src="img/me.jpg" alt="a picture of me at the park" width="40%">
                <h2>"Colorless green ideas sleep furiously."</h2>
                <p>-Noam Chomsky</p>
            </div>
            <div id="mobilechild">
                <br>
                <h3 style="color:white; text-align: center;">I am a current Computer Science Senior with a passion for
                    programming. Student of many languages ranging from Java and C++ to Python and JavaScript.
                    Aggregating information and formulating the best algorithmic solution accordingly. Coding for good!
                </h3>
                <br>
                <img src="img/gore.jpg" max width="50%">
                <h3 style="color:white; text-align: center;">Full-Time Position with WL Gore and Associates Starting 2022!</h3>
            </div>
       `
    }
}