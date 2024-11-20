function validateForm() { //join submit sucess message 
    document.getElementById("form-message").textContent = "Thank you!";
    return false; 
}

// rsvp button for events page
const rsvpButton = document.getElementById("fall-social-rsvp");
    if (rsvpButton) {
        rsvpButton.addEventListener("click", () => {
            window.location.href = "https://ninerengage.charlotte.edu/event/10629113";
        });
    }

    //index page, join now button
const joinNow = document.getElementById("join");
if (joinNow){
    joinNow.addEventListener("click", () => {
        window.location.href = "join.html";
    });
}

const ninerEngage = document.getElementById("niner-engage");
if (ninerEngage){
    ninerEngage.addEventListener("click", () => {
        window.location.href = "https://ninerengage.charlotte.edu/organization/gwcuncc";
    });
}

const joinForm = document.getElementById("join-form");
const formMessage = document.getElementById("form-message");

if (joinForm) {
    joinForm.addEventListener("submit", (event) => {
        // Custom validation logic if needed
        formMessage.textContent = "Thank you!";
        event.preventDefault(); // Prevent actual form submission for demonstration
    });
}

// Select all event sections
const eventSections = document.querySelectorAll(".event");

eventSections.forEach((section) => {
    section.addEventListener("click", () => {
        // Toggle the visibility of the corresponding event details
        const details = section.querySelector(".event-details");
        if (details) {
            details.style.display = details.style.display === "none" ? "block" : "none";
        }
    });
});

// Initially hide all event details
const eventDetails = document.querySelectorAll(".event-details");
eventDetails.forEach((details) => {
    details.style.display = "none";
});
