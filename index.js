function sendMail(){
    var para = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };

    const serviceID = "service_t02ek7j";
    const templateID = "template_17el8ip";

    emailjs
        .send(serviceID,templateID,para)
        .then((res) => {
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("email").value="";
            document.getElementById("msg").value="";

            console.log(res);
            alert("Your Message Sent Successfully...");
        })
        .catch((err) => console.log(err));
}

document.addEventListener('DOMContentLoaded', function() {
    const skillSection = document.getElementById('skills-section');
    const skillBars = document.querySelectorAll('.range-bar-fill');

    function animateBars() {
        const sectionPosition = skillSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            skillBars.forEach(bar => {
                const finalWidth = bar.getAttribute('data-width');
                bar.style.width = finalWidth;
            });
            // Remove the event listener after animation to prevent it from re-triggering
            window.removeEventListener('scroll', animateBars);
        }
    }

    window.addEventListener('scroll', animateBars);
});
