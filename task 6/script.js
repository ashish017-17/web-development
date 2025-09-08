const colorBtn = document.getElementById("colorBtn");

function getRandomColor() {
  // Generate random hex color
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});
