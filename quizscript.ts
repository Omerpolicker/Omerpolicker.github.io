document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menuItem");
    const questions = document.querySelectorAll(".question");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    let currentPage = 0;

    // Show initial page
    showPage(currentPage);

    // Event listeners for menu items
    menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener("click", () => {
            currentPage = index;
            showPage(currentPage);
        });
    });

    // Event listener for previous button
    prevButton.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // Event listener for next button
    nextButton.addEventListener("click", () => {
        if (currentPage < questions.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Function to show/hide pages
    function showPage(index) {
        questions.forEach((question, i) => {
            if (i === index) {
                question.style.display = "block";
            } else {
                question.style.display = "none";
            }
        });

        // Show/hide navigation buttons
        if (index === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "inline-block";
        }

        if (index === questions.length - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "inline-block";
        }
    }
});