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
    });
}





// Simulated function to update queue position and wait time
function updateQueueStatus(position, waitTime) {
    document.getElementById('queue-position').innerText = position;
    document.getElementById('wait-time').innerText = waitTime + ' minutes';
}

// Example usage
updateQueueStatus(3, 10);
