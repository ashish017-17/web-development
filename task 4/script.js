const image = document.getElementById("myImage");

// Toggle zoom on double click
image.addEventListener("dblclick", function() {
  image.classList.toggle("zoomed");
});
