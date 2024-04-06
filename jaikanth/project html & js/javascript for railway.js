class Login {
  constructor() {
    this.loginForm = document.getElementById("loginForm");
    this.errorMessage = document.getElementById("errorMessage");
    this.loginForm.addEventListener("submit", this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "user" && password === "user123") {
      window.location.href = "railway reservation.html";
    }
    else if (username === "admin" && password === "admin123") {
      window.location.href = "admin.html";
    } else {
      this.errorMessage.innerText = "Invalid username or password.";
    }
  }
}
window.addEventListener("DOMContentLoaded", () => {
  new Login();
});



function bookTicket(trainNumber) {
  alert("Ticket booked for Train Number: " + trainNumber);
}
