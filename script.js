document.addEventListener('DOMContentLoaded', function () {
  // Change location functionality
  const changeLocationBtn = document.getElementById('changeLocationBtn');
  const locationElement = document.getElementById('location');

  if (changeLocationBtn && locationElement) {
    changeLocationBtn.addEventListener('click', function (event) {
      event.preventDefault();
      let currentLocation = locationElement.innerText.split(',')[0].trim(); // Get current location without country
      let newLocation = prompt('Enter your delivery location:', currentLocation); // Prompt with current location as default
      if (newLocation) {
        locationElement.innerText = `${newLocation}, Kenya`; // Update only the location
      }
    });
  }

  // Navigation functionality for "Shop by brand" section
  const brandDealsContainer = document.getElementById('brandDealsContainer');
  if (brandDealsContainer) {
    window.moveBrandLeft = function () {
      brandDealsContainer.scrollBy({ left: -250, behavior: 'smooth' });
    };

    window.moveBrandRight = function () {
      brandDealsContainer.scrollBy({ left: 250, behavior: 'smooth' });
    };
    console.log("Shop by brand navigation functions are set up.");
  } else {
    console.error("Element with ID 'brandDealsContainer' not found.");
  }

  // Navigation functionality for "Most Popular" section
  const popularDealsContainer = document.getElementById('popularDealsContainer');
  if (popularDealsContainer) {
    window.movePopularLeft = function () {
      popularDealsContainer.scrollBy({ left: -250, behavior: 'smooth' });
    };

    window.movePopularRight = function () {
      popularDealsContainer.scrollBy({ left: 250, behavior: 'smooth' });
    };
  } else {
    console.error("Element with ID 'popularDealsContainer' not found.");
  }

  // Navigation functionality for "Deals of the Week" section
  const dealsOfTheWeekContainer = document.getElementById('dealsOfTheWeekContainer');
  if (dealsOfTheWeekContainer) {
    window.moveDealsLeft = function () {
      dealsOfTheWeekContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    window.moveDealsRight = function () {
      dealsOfTheWeekContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };
  } else {
    console.error("Element with ID 'dealsOfTheWeekContainer' not found.");
  }

  // Navigation functionality for "Top Sellers" section
  const topSellersContainer = document.getElementById('topSellersContainer');
  if (topSellersContainer) {
    window.moveTopsellersLeft = function () {
      topSellersContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    window.moveTopsellersRight = function () {
      topSellersContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };
  } else {
    console.error("Element with ID 'topSellersContainer' not found.");
  }

  // Navigation functionality for "Perfect Pour" section
  const perfectPourContainer = document.getElementById('perfectPourContainer');
  if (perfectPourContainer) {
    window.movePerfectLeft = function () {
      perfectPourContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    window.movePerfectRight = function () {
      perfectPourContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };
  } else {
    console.error("Element with ID 'perfectPourContainer' not found.");
  }

  // Navigation functionality for "Electronics" section
  const electronicDealsContainer = document.getElementById('electronicDealsContainer');
  if (electronicDealsContainer) {
    window.moveElectronicsLeft = function () {
      electronicDealsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    window.moveElectronicsRight = function () {
      electronicDealsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };
  } else {
    console.error("Element with ID 'electronicDealsContainer' not found.");
  }

  // Navigation functionality for "Cleaning" section
  const cleaningDealsContainer = document.getElementById('cleaningDealsContainer');
  if (cleaningDealsContainer) {
    window.moveCleaningLeft = function () {
      cleaningDealsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    window.moveCleaningRight = function () {
      cleaningDealsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };
  } else {
    console.error("Element with ID 'cleaningDealsContainer' not found.");
  }

  // Navigation functionality for "Featured Products" section
  const dealsFeaturedContainer = document.getElementById('dealsFeaturedContainer');
  if (dealsFeaturedContainer) {
    window.moveFeaturedLeft = function () {
      dealsFeaturedContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    window.moveFeaturedRight = function () {
      dealsFeaturedContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };
    console.log("Featured Products navigation functions are set up.");
  } else {
    console.error("Element with ID 'dealsFeaturedContainer' not found.");
  }

  // Navigation functionality for "Scrollable Banners" section
  const bannerContainer = document.getElementById('bannerContainer');
  if (bannerContainer) {
    window.moveBannersLeft = function () {
      bannerContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    window.moveBannersRight = function () {
      bannerContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };
  } else {
    console.error("Element with ID 'bannerContainer' not found.");
  }

  console.log("Page loaded and all navigation functions are set up.");
});
