// Add event listener to "Volunteer Now" button
document.getElementById('volunteer-btn').addEventListener('click', function() {
    // Display the form for users to input their contact information
    displayVolunteerForm();
});

// Function to display the volunteer form
function displayVolunteerForm() {
    // You can either create the form dynamically using JavaScript or toggle its visibility
    // For simplicity, I'll toggle its visibility here

    var form = document.getElementById('volunteer-form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// Add event listener to elements for enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
    var moreInfoElement = document.getElementById('more-info');

    // Example: Display additional charity details when hovering over certain elements
    moreInfoElement.addEventListener('mouseover', function() {
        // Display additional details or perform any desired action
        alert('More information about the charity!');
    });
});
