function validateEmail() {
    var emailInput = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailField = document.getElementById("email");
    var emailError = document.getElementById("emailError");
  
    if (emailPattern.test(emailInput)) {
      emailField.classList.remove("is-invalid");
      emailField.classList.add("is-valid");
      emailError.style.display = "none";
    } else {
      emailField.classList.remove("is-valid");
      emailField.classList.add("is-invalid");
      emailError.style.display = "block";
    }
  }
  
  function validateName() {
    var nameInput = document.getElementById("name").value;
    var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var nameField = document.getElementById("name");
    var nameError = document.getElementById("nameError");
  
    if (namePattern.test(nameInput)) {
      nameField.classList.remove("is-invalid");
      nameField.classList.add("is-valid");
      nameError.style.display = "none";
    } else {
      nameField.classList.remove("is-valid");
      nameField.classList.add("is-invalid");
      nameError.style.display = "block";
    }
  }

  function validateComment() {
    var commentInput = document.getElementById("comment").value;

    var words = commentInput.split(/\s+/);
    var commentField = document.getElementById("comment");
    var commentError = document.getElementById("commentError");

    var validWords = words.filter(word => word.trim() !== "");

    if (validWords.length >= 10) {
        commentField.classList.remove("is-invalid");
        commentField.classList.add("is-valid");
        commentError.style.display = "none";
    } else {
        commentField.classList.remove("is-valid");
        commentField.classList.add("is-invalid");
        commentError.style.display = "block";
    }
}

  
  function val() {
      alert ("Feedback Submitted Successfully");
  }
  
  function validateForm() {
       validateEmail(); 
       validateName(); 
       validateComment();
  
    var invalidInputs = document.querySelectorAll(".is-invalid");
  
    if (invalidInputs.length > 0) {
      var modal = document.getElementById("myModal");
      var modalMessage = document.getElementById("modalMessage");
      modal.style.display = "block";
      modalMessage.innerHTML = "Enter valid input(s)";
      var closeBtn = document.getElementsByClassName("close")[0];
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };
  
      return false;
    }
  
    return val()
  }
  
  document.getElementById("email").addEventListener("input", validateEmail);
  document.getElementById("name").addEventListener("input", validateName);
  document.getElementById("comment").addEventListener("input", validateComment);

