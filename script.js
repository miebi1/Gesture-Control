// Initialize Hammer on the menu container
var hammer = new Hammer(document.body);

// Index to keep track of the currently visible menu item
var currentMenuItem = 0;

// Recognize swipe gestures for the first menu item
hammer.on("swiperight swipeleft", function (event) {
  // Ensure current menu item is 0 (the first menu item)
  if (currentMenuItem === 0) {
    // Navigate to the next menu item for both swipe directions
    navigateMenu("next");
  }
});

// Recognize single tap for the second menu item
hammer.on("tap", function () {
  // Ensure current menu item is 1 (the second menu item)
  if (currentMenuItem === 1) {
    // Navigate to the next menu item
    navigateMenu("next");
  }
});

// Recognize long press for the third menu item
hammer.on("press", function () {
  // Ensure current menu item is 2 (the third menu item)
  if (currentMenuItem === 2) {
    // Navigate to the beginning of the menu
    navigateMenu("beginning");
  }
});

function navigateMenu(direction) {
  const menuContainer = document.querySelector(".menu-container");
  const menuWidth = document.body.clientWidth;

  if (direction === "next") {
    // Update the current menu item for the next menu
    currentMenuItem = (currentMenuItem + 1) % 3;
  } else if (direction === "prev") {
    // Update the current menu item for the previous menu
    currentMenuItem = (currentMenuItem - 1 + 3) % 3;
  } else if (direction === "beginning") {
    // Navigate to the beginning of the menu
    currentMenuItem = 0;
  }

  // Calculate the translation value based on the current menu item
  const translateValue = -currentMenuItem * menuWidth;
  // Apply the translation to smoothly transition between menu items
  menuContainer.style.transform = `translateX(${translateValue}px)`;
}
