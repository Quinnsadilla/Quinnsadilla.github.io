document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("date");

    // Display current date and time
    const now = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const formattedDate = `Today is ${now.toLocaleString('en-US', options)}`;
    dateElement.innerHTML = formattedDate;
});

// Greet user function
function greetUser() {
    const name = document.getElementById("name").value;
    const feeling = document.getElementById("feeling").value;

    const greeting = `Quirky Marmot welcomes you, ${name}! We're glad you are doing ${feeling}!`;
    document.getElementById("greeting").innerText = greeting;
}

// Get polygon name function
function getPolygonName(sides) {
    const polygonNames = [
        "monogon",   // 0 sides
        "monogon",   // 1 side
        "digon",     // 2 sides
        "trigon",    // 3 sides
        "tetragon",  // 4 sides
        "pentagon",  // 5 sides
        "hexagon",   // 6 sides
        "heptagon",  // 7 sides
        "octagon",   // 8 sides
        "enneagon",  // 9 sides
        "decagon"    // 10 sides
    ];

    return polygonNames[sides];
}

// Favorite number function
function favoriteNumber() {
    const favoriteNumberInput = document.getElementById("favorite-number").value;

    let favoriteNumber = Math.abs(parseFloat(favoriteNumberInput));
    favoriteNumber = Math.round(favoriteNumber);

    if (favoriteNumber <= 10){
        const polygonName = getPolygonName(favoriteNumber);

        alert(`A polygon with ${favoriteNumber} sides is called a ${polygonName}`);
    } else {
        alert("Please enter a number between 0 and 10");
    }
}

// Add event listeners after all functions are defined
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("greet-button").addEventListener("click", greetUser);
    document.getElementById("favorite-number-button").addEventListener("click", favoriteNumber);
});