function getFormvalue() {
    console.log('getFormvalue called'); // Debug log
    
    // Get form by ID
    const form = document.getElementById('form1');
    
    // Get input values by name
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();
    
    // Validate inputs
    if (!firstName || !lastName) {
        alert('Please enter both first name and last name.');
        console.log('Validation failed: Empty fields');
        return;
    }
    
    // Alert first name and last name
    alert(`${firstName} ${lastName}`);
    console.log(`Alerted: ${firstName} ${lastName}`);
}

// Add event listener to prevent default submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form1');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default submission
            getFormvalue(); // Call the same function
        });
        console.log('Event listener attached to form');
    } else {
        console.error('Form with id "form1" not found');
    }
});