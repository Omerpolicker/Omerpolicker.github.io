// script.js
console.log("Script loaded"); // Check script load

function divClicked() {
    alert("Div clicked"); // Ensure function runs

    var dorothyDiv = document.getElementById('dorothy'); // Get the dorothy div
    dorothyDiv.style.left = '300px'; // Change left attribute
    dorothyDiv.style.top = '400px'; // Change top attribute
}

