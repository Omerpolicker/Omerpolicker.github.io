// script13.js

// Function to handle visiting a pig
// Function to handle visiting a pig and adding item to inventory
function visitPig(chosenPig) {
    // Update the text for the unchosen pig (if necessary)
    var unchosenPig = chosenPig === 1 ? 2 : 1;
    var unchosenPigElements = document.getElementsByClassName("unchosen-pig");
    for (var i = 0; i < unchosenPigElements.length; i++) {
        unchosenPigElements[i].innerText = "Pig " + unchosenPig;
    }

    // Add item to inventory based on chosen pig
    var inventoryList = document.getElementById("inventory-list");
    var itemToAdd = "";
    switch(chosenPig) {
        case 1:
            itemToAdd = "<li><img src='https://static.vecteezy.com/system/resources/previews/008/513/979/original/red-drinking-straw-illustration-png.png' alt='Straw'> Straw</li>";
            break;
        case 2:
            itemToAdd = "<li><img src='https://w7.pngwing.com/pngs/92/860/png-transparent-liquorice-stick-bundle-of-sticks-others-photography-root-spice.png' alt='Sticks'> Sticks</li>";
            break;
        case 3:
            itemToAdd = "<li><img src='https://purepng.com/public/uploads/large/purepng.com-brickbuilding-materialbrickconstructionconcrete-materials-1421526461118aspkp.png' alt='Bricks'> Bricks</li>";
            break;
        default:
            break;
    }
    inventoryList.innerHTML += itemToAdd;

    // Log the chosen pig
    console.log("Visited Pig " + chosenPig);
}

function visitPig(chosenPig) {
    // Show the hidden part of the story
    document.getElementById("hidden-story").style.display = "block";
    
    // Replace the placeholder with the name of the chosen pig
    var chosenPigName = chosenPig === 1 ? "Pig 1" : "Pig 2";
    document.getElementById("chosen-pig").innerText = chosenPigName;

    // Update the text for the unchosen pig
    var unchosenPigName = chosenPig === 1 ? "Pig 2" : "Pig 1";
    document.getElementById("unchosen-pig").innerText = unchosenPigName;


    // Add item to inventory based on chosen pig
    var inventoryList = document.getElementById("inventory-list");
    var itemToAdd = "";
    switch(chosenPig) {
        case 1:
            itemToAdd = "<li><img src='https://static.vecteezy.com/system/resources/previews/008/513/979/original/red-drinking-straw-illustration-png.png' alt='Straw'> Straw</li>";
            break;
        case 2:
            itemToAdd = "<li><img src='https://w7.pngwing.com/pngs/92/860/png-transparent-liquorice-stick-bundle-of-sticks-others-photography-root-spice.png' alt='Sticks'> Sticks</li>";
            break;
        case 3:
            itemToAdd = "<li><img src='https://purepng.com/public/uploads/large/purepng.com-brickbuilding-materialbrickconstructionconcrete-materials-1421526461118aspkp.png' alt='Bricks'> Bricks</li>";
            break;
        default:
            break;
    }
    inventoryList.innerHTML += itemToAdd;

    // Log the chosen pig
    console.log("Visited Pig " + chosenPig);
}