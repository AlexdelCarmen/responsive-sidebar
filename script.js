const buttons = document.querySelectorAll("button");
const sidebar = document.getElementById("sidebar");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    sidebar.classList.toggle("hide"); 
  });
});
