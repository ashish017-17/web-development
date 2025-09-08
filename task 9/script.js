const itemList = document.getElementById("itemList");
const sortAZBtn = document.getElementById("sortAZ");
const sortZABtn = document.getElementById("sortZA");

// Function to sort list
function sortList(order) {
  let items = Array.from(itemList.getElementsByTagName("li"));
  
  items.sort((a, b) => {
    let textA = a.textContent.toLowerCase();
    let textB = b.textContent.toLowerCase();
    return order === "asc" ? textA.localeCompare(textB) : textB.localeCompare(textA);
  });

  // Clear and re-append sorted items
  itemList.innerHTML = "";
  items.forEach(item => itemList.appendChild(item));
}

// Event listeners
sortAZBtn.addEventListener("click", () => sortList("asc"));
sortZABtn.addEventListener("click", () => sortList("desc"));
