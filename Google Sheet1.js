const scriptURL = 'https://script.google.com/macros/s/AKfycbzuTj0d0Dl4u959lKKYQqgBa8aQaAcWnYLcp4nT6ZO9Ph-oWEEn4g03U2GuL0g3bewX/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error ('Error!', error.message))
})