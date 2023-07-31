// Function to toggle the dropdown on hover
const dropdown = document.querySelector(".relative");
const dropdownMenu = dropdown.querySelector(".hidden");

dropdown.addEventListener("mouseenter", () => {
    dropdownMenu.classList.remove("hidden");
});

dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.classList.add("hidden");
});

dropdown.addEventListener("mouseleave", (event) => {
    // Check if the mouse is leaving the .relative element or its children
    if (!dropdown.contains(event.relatedTarget)) {
        dropdownMenu.classList.add("hidden");
    }
});

// Function to toggle the edit form
$(document).ready(function() {
    $('#editButton').click(function() {
        $('#myForm').toggle();
    });
});

// Function to handle changing the profile image
$(document).ready(function() {
    // Use a flag to prevent multiple image change triggers
    let isChangingImage = false;

    $('#editImageButton').click(function() {
        if (!isChangingImage) {
            isChangingImage = true;
            $('#imageInput').click();
        }
    });

    $('#imageInput').change(function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#profileImage').attr('src', e.target.result);
            isChangingImage = false; // Reset the flag after the image has been changed
        }

        reader.readAsDataURL(file);
    });


    // Update the table data when the form is submitted
    $('#myForm').submit(function(event) {
        event.preventDefault();

        // Retrieve form input values
        var name = $('#name').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var role = $('#role').val();
        var availability = $('#availability').val();
        var age = $('#age').val();
        var experience = $('#exp').val();

        // Update the table data with form input values
        $('.changeable').eq(0).text(name);
        $('.changeable').eq(3).text(role);
        $('.changeable').eq(4).text(address);
        $('.changeable').eq(1).text(availability);
        $('.changeable').eq(2).text(age);
        $('.changeable').eq(5).text(experience);
        $('.changeable').eq(6).text(email);

        // Hide the form after updating the table
        $('#myForm').hide();

        // Show an alert indicating the form was successfully submitted
        alert("Form submission and data replacement was successful!");
    });
});

// Update date and time function
function updateDateTime() {
    var currentDate = new Date();
    var dateString = currentDate.toDateString();
    var timeString = currentDate.toLocaleTimeString();
    document.getElementById("date").innerHTML = dateString;
    document.getElementById("time").innerHTML = timeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
