// Snowflakes animation
function createSnowflakes() {
    const snowflakesContainer = document.getElementById("snowflakes");
    const numOfSnowflakes = 50;

    for (let i = 0; i < numOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerText = "❄️";

        // Set random horizontal position, size, and animation duration
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflakesContainer.appendChild(snowflake);
    }
}

// Show message on button click
function showMessage() {
    alert("Желаю вам процветания и счастливого Нового года!");
}

// Initialize snowflakes
createSnowflakes();