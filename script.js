document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Simple validation
  if (name === "" || email === "" || password === "") {
    message.textContent = "⚠️ All fields are required!";
    message.style.color = "red";
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "📧 Please enter a valid email address!";
    message.style.color = "red";
    return;
  }

  // Password length check
  if (password.length < 6) {
    message.textContent = "🔑 Password must be at least 6 characters long!";
    message.style.color = "red";
    return;
  }

  // If everything is valid
  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";

  // Optionally reset form
  document.getElementById("userForm").reset();
});
