(function(){

  // Function to move product-variant-color-container inside product-color-variants-container
  function moveContainers() {
    var variantColorContainer = document.querySelector('.product-variant-color-container');
    var colorVariantsContainer = document.querySelector('.product-color-variants-container');

    if (variantColorContainer && colorVariantsContainer) {
      colorVariantsContainer.appendChild(variantColorContainer);
    }
  }

  // Function to listen for section updates
  function watchForSectionUpdates() {
    document.addEventListener('shopify:section:load', function(event) {
      moveContainers();
    });
  }

  // Run the functions after the page has loaded
  document.addEventListener('DOMContentLoaded', function() {
    moveContainers();
    watchForSectionUpdates();
  });

})();