function loadFooter(containerId) {
    const footerContainer = document.getElementById(containerId);

    // Create an HR element
    const footerSeparator = document.createElement("hr");

    // Create the footer content
    const footerContent = document.createElement("p");
    footerContent.innerHTML = `Page built by <a href="../migliaccio.co/index.html" target="_blank">migliaccio.co &copy; 2024</a>. All rights reserved.`;

    // Append the HR and the content to the footer
    footerContainer.appendChild(footerSeparator);
    footerContainer.appendChild(footerContent);
}

document.addEventListener("DOMContentLoaded", function () {
    loadFooter("footer");
});