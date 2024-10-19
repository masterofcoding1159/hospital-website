document.getElementById('contactForm').addEventListener('submit', function (event) {
  // Prevent form submission
  event.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('messageError').innerText = '';

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate the form
  let valid = true;

  // Name validation
  if (name.trim() === '') {
      document.getElementById('nameError').innerText = 'Please enter your name';
      valid = false;
  }

  // Email validation
  if (!validateEmail(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address';
      valid = false;
  }

  // Message validation
  if (message.trim() === '') {
      document.getElementById('messageError').innerText = 'Please enter a message';
      valid = false;
  }

  // If valid, show success message
  if (valid) {
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset(); // Reset the form
  }
});

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}