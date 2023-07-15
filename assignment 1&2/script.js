//main.html
    function updateDateTime() {
        var currentDate = new Date();
        var dateString = currentDate.toDateString();
        var timeString = currentDate.toLocaleTimeString();
        document.getElementById("date").innerHTML = dateString;
        document.getElementById("time").innerHTML = timeString;
    }

    // Update the date and time every second
    setInterval(updateDateTime, 1000);


//FPwBootstrap.html
    //edit button function
    $(document).ready(function() {
        $('#editButton').click(function() {
            $('#myForm').toggle();
        });
    });


    //edit image button function
    $(document).ready(function() {
        $('#editImageButton').click(function() {
            $('#imageInput').click();
        });

        $('#imageInput').change(function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#profileImage').attr('src', e.target.result);
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
        });
    });
