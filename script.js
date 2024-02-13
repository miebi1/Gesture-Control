   // Initialize Hammer on the menu container
   var hammer = new Hammer(document.body);

   // Index to keep track of the currently visible menu item
   var currentMenuItem = 0;

   // Recognize swipe gestures for the first menu item
   hammer.on('swiperight swipeleft', function(event) {
       if (currentMenuItem === 0) {
           if (event.direction === Hammer.DIRECTION_LEFT) {
               navigateMenu('next');
           } 
       }
   });

   // Recognize single tap for the second menu item
   hammer.on('tap', function() {
       if (currentMenuItem === 1) {
           navigateMenu('next');
       }
   });

   // Recognize long press for the third menu item
   hammer.on('press', function() {
       if (currentMenuItem === 2) {
           navigateMenu('beginning');
       }
   });

   function navigateMenu(direction) {
       const menuContainer = document.querySelector('.menu-container');
       const menuWidth = document.body.clientWidth;

       if (direction === 'next') {
           currentMenuItem = (currentMenuItem + 1) % 3;
       } else if (direction === 'prev') {
           currentMenuItem = (currentMenuItem - 1 + 3) % 3;
       } else if (direction === 'beginning') {
           currentMenuItem = 0;
       }

       const translateValue = -currentMenuItem * menuWidth;
       menuContainer.style.transform = `translateX(${translateValue}px)`;
   }