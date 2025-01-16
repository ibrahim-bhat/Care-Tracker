document.addEventListener("DOMContentLoaded", function () {
  includeHTML("navbar", "components/navbar.html");
  includeHTML("header", "components/header.html");
  includeHTML("footer", "components/footer.html");
});

function includeHTML(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading HTML:", error);
    });
}
