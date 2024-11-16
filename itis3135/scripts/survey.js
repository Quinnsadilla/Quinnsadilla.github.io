document.addEventListener("DOMContentLoaded", () => {
    let courseCount = 0; // Declare once

    // Function to load image preview
    function loadImage() {
        const image = document.getElementById("image").files[0];
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            document.getElementById("load-image").innerHTML = `<img src="${imageUrl}" alt="Preview">`;
        } else {
            alert("Please select an image to load.");
        }
    }

    // Reset the form function
    function resetForm() {
        document.querySelector("form").reset();
        document.getElementById("course-container").innerHTML = "";
        document.getElementById("load-image").innerHTML = "";
    }

    // Function to dynamically add course fields
    function addCourseField() {
        courseCount++;
        const courseDiv = document.createElement("div");
        courseDiv.id = `course-${courseCount}`;
        courseDiv.classList.add("course-entry");
        courseDiv.innerHTML = `
            <label>Course Title:</label>
            <input type="text" placeholder="Course Title ${courseCount}" required>
            <label>Course Description:</label>
            <input type="text" placeholder="Course Description ${courseCount}" required>
            <button type="button" onclick="removeCourseField(${courseCount})">Delete</button>
        `;
        document.getElementById("course-container").appendChild(courseDiv);
    }

    // Function to remove a course field
    function removeCourseField(id) {
        const courseDiv = document.getElementById(`course-${id}`);
        if (courseDiv) courseDiv.remove();
    }

    // Function to display the form data after submission
    function displayFormData() {
        const imageFile = document.getElementById("image").files[0];
        if (!imageFile) {
            alert("Please upload an image.");
            return;
        }

        const formData = {
            name: document.getElementById("name").value,
            mascot: document.getElementById("mascot").value,
            imageCaption: document.getElementById("image-caption").value,
            personal: document.getElementById("personal").value,
            professional: document.getElementById("professional").value,
            academic: document.getElementById("academic").value,
            webDev: document.getElementById("web-development").value,
            platform: document.getElementById("computer-platform").value,
            courses: [], // Empty array to hold course details
            funny: document.getElementById("funny").value,
            anythingElse: document.getElementById("anything-else").value
        };

        // Add the first course (before dynamic ones) to the course list
        const firstCourseTitle = document.getElementById("course").value;
        const firstCourseDescription = document.getElementById("course-description").value;
        if (firstCourseTitle && firstCourseDescription) {
            formData.courses.push({ title: firstCourseTitle, description: firstCourseDescription });
        }

        // Gather course titles and descriptionsS
        const courseDivs = document.querySelectorAll("#course-container .course-entry");
        courseDivs.forEach((courseDiv) => {
            const courseTitle = courseDiv.querySelector("input[placeholder*='Course Title']").value;
            const courseDescription = courseDiv.querySelector("input[placeholder*='Course Description']").value;
            formData.courses.push({ title: courseTitle, description: courseDescription });
        });

        const outputHTML = `
            <h2>Introduction</h2>
                <h3 style="text-align: center;">${formData.name}||${formData.mascot}</h3>
            <figure>
                <img src="${URL.createObjectURL(imageFile)}" alt="${formData.imageCaption}">
                <figcaption>${formData.imageCaption}</figcaption>
            </figure>
            <ul>
                <li><b>Personal Background:</b> ${formData.personal}</li>
                <li><b>Professional Background:</b> ${formData.professional}</li>
                <li><b>Academic Background:</b> ${formData.academic}</li>
                <li><b>Web Development Background:</b> ${formData.webDev}</li>
                <li><b>Primary Computer Platform:</b> ${formData.platform}</li>
                <li><b>Courses:</b>
                    <ul>${formData.courses.map((course) => `<li><b>${course.title}:</b> ${course.description}</li>`).join('')}</ul>
                </li>
                <li><b>Funny thing:</b> ${formData.funny}</li>
                <li><b>Anything else:</b> ${formData.anythingElse}</li>
            </ul>
        `;

    // Display the form data in the main section
    document.querySelector("main").innerHTML = outputHTML;

    // Create and append the reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.onclick = () => location.reload(); // Reset the form
    document.querySelector("main").appendChild(resetButton);
    }

    // Set up form submission handler
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        displayFormData();
    };

    // Set up image load button click handler
    document.getElementById("load-image-btn").addEventListener("click", loadImage);

    // Set up add course button click handler
    document.getElementById("add-course-btn").addEventListener("click", addCourseField);
});