function loadMenu(jsonFile, containerId) {
    fetch(jsonFile)
        .then((response) => response.json())
        .then((data) => {
            const menuContainer = document.getElementById(containerId);

            data.forEach((item, index) => {
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                menuContainer.appendChild(menuItem);

                // Add separator if not the last item
                if (index < data.length - 1) {
                    const separator = document.createTextNode(" || ");
                    menuContainer.appendChild(separator);
                }
            });
        })
        .catch((error) => console.error(`Error loading ${jsonFile}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadMenu("components/nav_main.json", "main-menu");
    loadMenu("components/nav_submenu.json", "sub-menu");
});

function loadFooterContent(jsonFile) {
    fetch(jsonFile)
        .then((response) => response.json())
        .then((data) => {
            const footer = document.querySelector("footer");
            const footerItems = data.footerContent;

            footerItems.forEach((item, index) => {
                if (item.type === "link") {
                    // Create and append link
                    const link = document.createElement("a");
                    link.textContent = item.name;
                    link.href = item.url;
                    link.target = "_blank";
                    footer.appendChild(link);

                    // Add separator only if it's not the last link
                    if (index < footerItems.length - 1 && footerItems[index + 1].type === "link") {
                        footer.appendChild(document.createTextNode(" || "));
                    }
                } else if (item.type === "text") {
                    // Add plain text or HTML content
                    const textContainer = document.createElement("p");
                    textContainer.innerHTML = item.content; // Safe because it's controlled content
                    footer.appendChild(textContainer);
                } else if (item.type === "italic") {
                    // Add italicized "Explore More"
                    const italicContainer = document.createElement("p");
                    italicContainer.innerHTML = `<i>${item.content}</i>`;
                    footer.appendChild(italicContainer);
                } else if (item.type === "certifications") {
                    // Add certifications with prefix
                    const certificationsContainer = document.createElement("p");
                    const prefix = item.prefix ? `${item.prefix} ` : "";
                    certificationsContainer.innerHTML = prefix + 
                        item.content
                            .map((cert) => `<i><a href="${cert.url}" target="_blank">${cert.text}</a></i>`)
                            .join(", ");
                    footer.appendChild(certificationsContainer);
                }
            });
        })
        .catch((error) => console.error(`Error loading footer content:`, error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadFooterContent("components/nav_footer.json");
});


// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
    window.open("https://www.google.com/webmasters/tools/mobile-friendly/", "_blank");
}