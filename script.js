const button = document.getElementById("click-button");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Great job! You just updated your website.";
});
