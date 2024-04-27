function visitPig(chosenPig) {
    console.log("Visit Pig function called with chosenPig: " + chosenPig);

    // Hide the initial story text
    document.getElementById("story-text").style.display = "none";

    // Show the hidden part of the story based on the chosen pig
    if (chosenPig === 1) {
        console.log("Showing hidden story 1");
        document.getElementById("hidden-story").style.display = "block";
        document.getElementById("hidden-story2").style.display = "none"; // Hide other hidden story

        // Add item to inventory based on chosen pig (straw)
        var inventoryList = document.getElementById("inventory-list");
        var itemToAdd = "<li><img src='https://static.vecteezy.com/system/resources/previews/008/513/979/original/red-drinking-straw-illustration-png.png' alt='Straw'> Straw</li>";
        inventoryList.innerHTML += itemToAdd;
    } else if (chosenPig === 2) {
        console.log("Showing hidden story 2");
        document.getElementById("hidden-story2").style.display = "block";
        document.getElementById("hidden-story").style.display = "none"; // Hide other hidden story

        // Add item to inventory based on chosen pig (sticks)
        var inventoryList = document.getElementById("inventory-list");
        var itemToAdd = "<li><img src='https://w7.pngwing.com/pngs/92/860/png-transparent-liquorice-stick-bundle-of-sticks-others-photography-root-spice.png' alt='Sticks'> Sticks</li>";
        inventoryList.innerHTML += itemToAdd;
    }
    
    // Replace the placeholder with the name of the chosen pig
    var chosenPigName = chosenPig === 1 ? "Pig 1" : "Pig 2";
    document.getElementById("chosen-pig").innerText = chosenPigName;

    // Update the text for the unchosen pig
    var unchosenPigName = chosenPig === 1 ? "Pig 2" : "Pig 1";
    document.getElementById("unchosen-pig").innerText = unchosenPigName;

    // Add the unchosen pig's button
    var unchosenPigButtonPlaceholder = document.getElementById("unchosen-pig-button-placeholder");
    unchosenPigButtonPlaceholder.innerHTML = ""; // Clear previous button if any
    var unchosenPigButton = document.createElement("button");
    unchosenPigButton.innerHTML = chosenPig === 1 ? "<img src='https://i.etsystatic.com/14036568/r/il/0675f9/3407921765/il_fullxfull.3407921765_cf6n.jpg' alt='Pig 2'> Pig 2" : "<img src='https://premiumpaintbynumbers.com/wp-content/uploads/2022/04/aesthetic-Pig-with-watermelon-paint-by-number.jpg' alt='Pig 1'> Pig 1";
    unchosenPigButton.onclick = function() {
        // Hide the story text
        document.getElementById("story-text").style.display = "none";

        // Hide both hidden stories
        document.getElementById("hidden-story").style.display = "none";
        document.getElementById("hidden-story2").style.display = "none";

        // Show hidden story based on the unchosen pig
        if (chosenPig === 1) {
            document.getElementById("hidden-story2").style.display = "block";
            // Add sticks to inventory
            var inventoryList = document.getElementById("inventory-list");
            var itemToAdd = "<li><img src='https://w7.pngwing.com/pngs/92/860/png-transparent-liquorice-stick-bundle-of-sticks-others-photography-root-spice.png' alt='Sticks'> Sticks</li>";
            inventoryList.innerHTML += itemToAdd;
        } else if (chosenPig === 2) {
            document.getElementById("hidden-story").style.display = "block";
            // Add straw to inventory
            var inventoryList = document.getElementById("inventory-list");
            var itemToAdd = "<li><img src='https://static.vecteezy.com/system/resources/previews/008/513/979/original/red-drinking-straw-illustration-png.png' alt='Straw'> Straw</li>";
            inventoryList.innerHTML += itemToAdd;
        }
    };
    unchosenPigButtonPlaceholder.appendChild(unchosenPigButton);
}

// Add an event listener to the range input
document.querySelector('.slider input[type="range"]').addEventListener('input', function() {
    var sliderValue = parseInt(this.value);
    if (sliderValue >= 60) {
        // If the slider value is at least 20, show hidden-story3
        document.getElementById("hidden-story2").style.display = "none";
        document.getElementById("hidden-story3").style.display = "block";
    }
});

