function loadMenu(jsonFile, containerId) {
    fetch(jsonFile)
        .then((response) => response.json())
        .then((data) => {
            const menuContainer = document.getElementById(containerId);

            // Add the H1 element
            const heading = document.createElement("h1");
            heading.textContent = "Girls Who Code Charlotte";
            menuContainer.appendChild(heading);

            // Add the nav element
            const nav = document.createElement("nav");

            data.forEach((item, index) => {
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                nav.appendChild(menuItem);

                // Add separator if not the last item
                if (index < data.length - 1) {
                    const separator = document.createElement("span");
                    separator.innerHTML = " &#x1F49C; ";
                    nav.appendChild(separator);
                }
            });

            menuContainer.appendChild(nav);

            // Add the HR element
            const separatorLine = document.createElement("hr");
            menuContainer.appendChild(separatorLine);
        })
        .catch((error) => console.error(`Error loading ${jsonFile}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadMenu("components/header.json", "main-menu");
});