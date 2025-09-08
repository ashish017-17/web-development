// Get input and list
const searchInput = document.getElementById("searchInput");
const nameList = document.getElementById("nameList");
const names = nameList.getElementsByTagName("li");

// Event listener for input
searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();

  for (let i = 0; i < names.length; i++) {
    let text = names[i].textContent.toLowerCase();

    if (text.includes(filter)) {
      names[i].style.display = "";
    } else {
      names[i].style.display = "none";
    }
  }
});
