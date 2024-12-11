let countDownDate = new Date();
// countDownDate = new Date(countDownDate.getFullYear() + 1, countDownDate.getMonth() - 6, 1);
countDownDate = new Date(countDownDate.getFullYear(), countDownDate.getMonth() + 1, 1);

let x = setInterval(() => {
    let now = new Date()
    let diff = countDownDate - now

    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
    // let days = Math.floor((diff / (1000 * 60 * 60 * 24)) - (months * 30))
    // let hours = Math.floor((diff / (1000 * 60 * 60)) - (months * 30 * 24 + days * 24))
    // let minutes = Math.floor((diff / (1000 * 60)) - (months * 30 * 24 * 60 + days * 24 * 60 + hours * 60))
    // let seconds = Math.floor((diff / (1000)) - (months * 30 * 24 * 60 * 60 + days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60))
    let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / (1000));

    document.getElementById("months").innerText = months.toString().padStart(2, "0");
    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}, 1000);


// disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()