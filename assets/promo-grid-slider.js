(function() {
  
  const promoSliderFunction = () => {
    let selectors = {
        sectionPromo: '.promo-grid-slider-container'
    };

    let sectionPromotions = document.querySelectorAll(selectors.sectionPromo);

    sectionPromotions.forEach((promotion,i) => {
  
      promotion.classList.add('section-promotion-' + i);
  
      let promotionSlider = promotion.querySelector('.promotion-grid-slider')
  
      var promotion_swiper = new Swiper(promotionSlider, {
          
          slidesPerView: 3,
          spaceBetween: 30,
          loop: false,
          navigation: {
            nextEl: ".section-bestsellers-" + i + " .swiper-button-next",
            prevEl: ".section-bestsellers-" + i + " .swiper-button-prev",
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              centeredSlides: true,
              slidesPerView: 1.3,
              spaceBetween: 15
            },
            // when window width is >= 640px
            991: {
              centeredSlides: false,
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded")
    promoSliderFunction();
    document.addEventListener("shopify:section:load", function () {
      console.log("section-load");
      promoSliderFunction();
    });
  });
})();