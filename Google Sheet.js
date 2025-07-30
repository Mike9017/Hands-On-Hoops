const scriptURL = 'https://script.google.com/macros/s/AKfycbztsLFh2XiKxJviAg4Ud0iYcZlwEAv4KbHkdmysdYFMNMoJU6_jrK6Vq1qubFAx5lrKrw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error ('Error!', error.message))
})