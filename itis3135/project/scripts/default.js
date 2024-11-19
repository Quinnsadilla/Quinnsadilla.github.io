document.getElementById("nav-link").addEventListener("click", function(event) { //for hq page
    // Show a confirmation alert
    let confirmLeave = confirm("Are you sure you want to leave this page? You will be directed the the offical GWC website.");
    if (!confirmLeave) {
        // Prevent navigation if the user cancels
        event.preventDefault();
    }
});

function validateForm() { //join submit message
    document.getElementById("form-message").textContent = "Thank you!";
    return false; 
}