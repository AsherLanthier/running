var full_date = new Date();
var today = full_date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
})
var date_display = document.getElementById('date_display');
date_display.textContent = today;

function addData(){
    const URL = 'https://script.google.com/macros/s/AKfycbziytNllA4c_8J2BqD61LfVdkDSdnAXyV8VepliCVWkEDPiDuT0GJFTUL1J2uKbnHey6A/exec';
    var miles = document.getElementById('miles_input').value;

    let formData = new FormData();
    formData.append('Date', today);
    formData.append('Miles', miles);

    fetch(URL, {method:'POST', body: formData});
    alert("Your miles for today have been recorded.");
}