const button = document.getElementById("click-button");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Hello! 🎉 You just made your first website work. Great job!";
});