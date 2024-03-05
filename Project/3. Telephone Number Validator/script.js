document.getElementById("check-btn").addEventListener("click", function () {
  validatePhoneNumber();
});

document.getElementById("clear-btn").addEventListener("click", function () {
  clearResults();
});

function validatePhoneNumber() {
  var userInput = document.getElementById("user-input").value.trim();
  var resultsDiv = document.getElementById("results-div");

  if (userInput === "") {
    alert("Please provide a phone number");
  } else {
    var isValid = isValidPhoneNumber(userInput);
    displayResults(isValid, userInput);
  }
}

function isValidPhoneNumber(phoneNumber) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return regex.test(phoneNumber);
}

function displayResults(isValid, phoneNumber) {
  var resultsDiv = document.getElementById("results-div");

  if (isValid) {
    resultsDiv.textContent = "Valid US number :" + phoneNumber;
  } else {
    resultsDiv.textContent = "Invalid US number :" + phoneNumber;
  }
}

function clearResults() {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").textContent = "";
}
