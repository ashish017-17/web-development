const itemList = document.getElementById("itemList");

// Add event listeners for edit & delete buttons
itemList.addEventListener("click", function(event) {
  if (event.target.classList.contains("deleteBtn")) {
    // Delete item
    event.target.parentElement.remove();
  }

  if (event.target.classList.contains("editBtn")) {
    let li = event.target.parentElement;
    let currentText = li.firstChild.textContent.trim();

    // If in edit mode → save changes
    if (li.querySelector(".editInput")) {
      let input = li.querySelector(".editInput");
      li.firstChild.textContent = input.value + " ";
      event.target.textContent = "Edit";
      input.remove();
    } else {
      // Switch to edit mode
      let input = document.createElement("input");
      input.type = "text";
      input.value = currentText;
      input.className = "editInput";

      // Insert input before the buttons
      li.insertBefore(input, event.target);
      li.firstChild.textContent = "";
      event.target.textContent = "Save";
    }
  }
});
