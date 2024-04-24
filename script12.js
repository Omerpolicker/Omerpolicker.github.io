// JavaScript code
function displayBrick() {
  var img = document.getElementById("gameImage");
  img.outerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=GbMafIEZ6eM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  // Show the popup after video ends
  document.getElementById("popup").style.display = "block";
  // Hide the popup after a delay
  setTimeout(function() {
    document.getElementById("popup").style.display = "none";
  }, 5000); // Adjust the delay (in milliseconds) as needed
}

function displayWood() {
  var img = document.getElementById("gameImage");
  img.outerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=Ectv47c0FbY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  // Show the popup after video ends
  document.getElementById("popup").style.display = "block";
  // Hide the popup after a delay
  setTimeout(function() {
    document.getElementById("popup").style.display = "none";
  }, 5000); // Adjust the delay (in milliseconds) as needed
}

function displayStraw() {
  var img = document.getElementById("gameImage");
  img.outerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=oK52qGcpdzo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  // Show the popup after video ends
  document.getElementById("popup").style.display = "block";
  // Hide the popup after a delay
  setTimeout(function() {
    document.getElementById("popup").style.display = "none";
  }, 5000); // Adjust the delay (in milliseconds) as needed
}
