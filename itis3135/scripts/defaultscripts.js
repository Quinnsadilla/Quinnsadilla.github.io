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

// hiking time calculator
function hikingTimeCalculator() {
    // Get the input values
    const miles = parseFloat(document.getElementById("miles").value);
    const elevationGain = parseFloat(document.getElementById("elevation-gain").value);
    
    // make sure that feild are filled in with positive number
    if (isNaN(miles) || isNaN(elevationGain) || miles <= 0 || elevationGain < 0) {
        document.getElementById("time-calculator").textContent = "Please enter valid positive values for miles and elevation gain.";
        return;
    }

    // Calculate the base time, elevation time, and break time
    const baseTime = miles / 2; // 2 miles per hour
    const elevationTime = elevationGain / 1000; // 1 hour per 1000 feet
    const breakTime = 0.25 * (baseTime + elevationTime); // 15 minutes per hour

    // Calculate total time
    const totalTime = baseTime + elevationTime + breakTime;

    // Convert total time to hours and minutes
    const hours = Math.floor(totalTime);
    const minutes = Math.round((totalTime - hours) * 60);

    // Display the result
    document.getElementById("time-calculator").textContent = 
        `Estimated hiking time: ${hours} hours and ${minutes} minutes.`;
}

//meal finder
function getMeals(mealIndex) {
    const mealIdeas = [
        "Red beans and rice, with summer sausage, cheese, and Doritos", 
        "Pasta with tomato sauce, canned chicken, and spinach", 
        "Stir fry: canned chicken, broccoli, peas, carrots, soy sauce, garlic, rice, other vegetables, and seasonings",
        "Ramen with broccoli and carrots",
        "Instant mashed potatoes with canned corn and green beans",
        "Greek bowls: quinoa, feta cheese, balsamic vinegar, and cucumber",
        "Pizza: sandwich thins, tomato sauce, pepperoni, mozzarella cheese, spinach",
        "Tuna wraps: flavored tuna packs, tortillas, sliced cheese, pickles"
    ];

    // Ensure the index is within bounds
    if (mealIndex >= 1 && mealIndex <= 5) {
        return mealIdeas[mealIndex - 1]; // Convert to zero-based index
    } else {
        return "Please select a number between 1 and 5.";
    }
}

// number selection for meal
function meal() {
    const mealInput = document.getElementById("meal").value;
    const mealOutput = document.getElementById("meal-finder");

    // Validate input
    const mealNumber = parseInt(mealInput, 10);
    if (isNaN(mealNumber)) {
        mealOutput.textContent = "Please enter a valid number.";
        return;
    }

    // Get meal suggestion
    const mealSuggestion = getMeals(mealNumber);
    mealOutput.textContent = mealSuggestion;
}

function calculateTrailDistance() {
    const input = document.getElementById("trail-segments").value;
    const distances = input.split(",").map((segment) => parseFloat(segment.trim()));

    // Validate input
    if (distances.some(isNaN)) {
        document.getElementById("trail-distance-result").textContent = 
            "Please enter valid numbers separated by commas.";
        return;
    }

    // Calculate total distance
    const totalDistance = distances.reduce((sum, segment) => sum + segment, 0);

    // Display result
    document.getElementById("trail-distance-result").textContent = 
        `Total trail distance: ${totalDistance.toFixed(2)} miles`;
}

function checkWaterSupply() {
    const hikingHours = parseInt(document.getElementById("hiking-hours").value, 10);
    const waterSupply = parseFloat(document.getElementById("water-supply").value);
    const waterRequired = hikingHours * 0.5; // Assume 0.5 liters per hour

    const waterOutput = document.getElementById("water-check-result");
    if (isNaN(hikingHours) || isNaN(waterSupply)) {
        waterOutput.textContent = "Please enter valid numbers.";
        return;
    }

    if (waterSupply >= waterRequired) {
        waterOutput.textContent = `You're good to go! You have enough water for ${hikingHours} hours of hiking.`;
    } else {
        waterOutput.textContent = `Warning! You need at least ${waterRequired.toFixed(1)} liters of water for ${hikingHours} hours of hiking, but you only have ${waterSupply.toFixed(1)} liters.`;
    }
}

// Add event listeners after all functions are defined
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("greet-button").addEventListener("click", greetUser);
    document.getElementById("favorite-number-button").addEventListener("click", favoriteNumber);
    document.getElementById("time-calculator-button").addEventListener("click", hikingTimeCalculator);
    document.getElementById("meal-finder-button").addEventListener("click", meal);
    document.getElementById("calculate-distance-button").addEventListener("click", calculateTrailDistance);
    document.getElementById("check-water-button").addEventListener("click", checkWaterSupply);
});