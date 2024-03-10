document.getElementById("openButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("popup").addEventListener("click", function(event) {
  if (event.target.classList.contains("close")) {
    document.getElementById("popup").style.display = "none";
  }
});

document.addEventListener("keydown", function(event) {
  document.getElementById("popup").style.display = "block";
});

let animationInterval;
document.getElementById("startAnimation").addEventListener("click", function() {
  let rotation = 0;
  animationInterval = setInterval(function() {
    rotation += 5;
    document.getElementById("popup").style.transform = `rotate(${rotation}deg)`;
  }, 100);
});

document.getElementById("stopAnimation").addEventListener("click", function() {
  clearInterval(animationInterval);
});