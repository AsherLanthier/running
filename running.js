var form = document.getElementById('sheetdb-form');
var full_date = new Date();
var today = full_date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
})
var date_display = document.getElementById('date_input');
date_display.value = today;

form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        
    });

    alert('Your miles for today have been recorded.');
});