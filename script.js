
// Get bookmarks from localStorage safely
function getBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // Validate: must be an array of objects with name, category, and url
    if (
      Array.isArray(bookmarks) &&
      bookmarks.every(b =>
        typeof b === "object" &&
        "name" in b &&
        "url" in b &&
        "category" in b
      )
    ) {
      return bookmarks;
    }
  } catch (e) {
    // Ignore parsing errors
  }
  return []; // Fallback to empty array
}

// Save bookmarks array to localStorage
function saveBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

//  Toggle form visibility (main <-> form)
function displayOrCloseForm() {
  document.getElementById("main-section").classList.toggle("hidden");
  document.getElementById("form-section").classList.toggle("hidden");
}

// Toggle category list visibility (main <-> list)
function displayOrHideCategory() {
  document.getElementById("main-section").classList.toggle("hidden");
  document.getElementById("bookmark-list-section").classList.toggle("hidden");
}

//  Handle "Add Bookmark" button click (show form)
document.getElementById("add-bookmark-button").addEventListener("click", () => {
  const selectedCategory = document.getElementById("category-dropdown").value;

  // Set category title inside form
  document.querySelectorAll(".category-name").forEach(el => {
    el.textContent = selectedCategory;
  });

  displayOrCloseForm(); // Toggle form
});

//  Handle "Go Back" in form
document.getElementById("close-form-button").addEventListener("click", () => {
  displayOrCloseForm(); // Return to main section
});

// Add new bookmark from form
document.getElementById("add-bookmark-button-form").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const url = document.getElementById("url").value.trim();
  const category = document.getElementById("category-dropdown").value;

  if (name && url) {
    const bookmarks = getBookmarks();
    bookmarks.push({ name, category, url });
    saveBookmarks(bookmarks); // Save to localStorage

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";

    displayOrCloseForm(); // Return to main section
  } else {
    alert("Please fill in both name and URL.");
  }
});

// View bookmarks by category (with fixes for #17 and #22)
document.getElementById("view-category-button").addEventListener("click", () => {
  const selectedCategory = document.getElementById("category-dropdown").value;

  // Set category title in list section
  document.querySelectorAll(".category-name").forEach(el => {
    el.textContent = selectedCategory;
  });

  const allBookmarks = getBookmarks();
  const categoryList = document.getElementById("category-list");

  //  Clear all previous DOM children before adding new ones
  categoryList.replaceChildren();

  // Filter bookmarks by selected category
  const bookmarks = allBookmarks.filter(b => b.category === selectedCategory);

  if (bookmarks.length === 0) {
    //  Add a real <p> element with "No Bookmarks Found"
    const noResults = document.createElement("p");
    noResults.textContent = "No Bookmarks Found";
    categoryList.appendChild(noResults);
  } else {
    // Create DOM elements for each bookmark
    bookmarks.forEach(bookmark => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "bookmark";
      radio.id = bookmark.name;
      radio.value = bookmark.name;

      const link = document.createElement("a");
      link.href = bookmark.url;
      link.target = "_blank";
      link.textContent = bookmark.name;

      const label = document.createElement("label");
      label.htmlFor = bookmark.name;
      label.appendChild(link);

      const wrapper = document.createElement("div");
      wrapper.appendChild(radio);
      wrapper.appendChild(label);

      categoryList.appendChild(wrapper);
    });
  }

  displayOrHideCategory(); // Show the category list
});

// Go back from category list to main
document.getElementById("close-list-button").addEventListener("click", () => {
  displayOrHideCategory();
});

// Delete selected bookmark
document.getElementById("delete-bookmark-button").addEventListener("click", () => {
  const selectedCategory = document.querySelector(".category-name").textContent;
  const selectedRadio = document.querySelector('input[name="bookmark"]:checked');

  if (!selectedRadio) {
    alert("Please select a bookmark to delete.");
    return;
  }

  const bookmarkNameToDelete = selectedRadio.value;

  // Filter out the selected bookmark
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(
    b => !(b.name === bookmarkNameToDelete && b.category === selectedCategory)
  );
  saveBookmarks(bookmarks); // Save updated list

  // Refresh category list view
  document.getElementById("view-category-button").click();
});

