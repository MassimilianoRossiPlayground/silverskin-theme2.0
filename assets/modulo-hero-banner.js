(function(document) {

    let selectors = {
        heroBanners: '.section-hero-banner'
    };
  

    let heroBanners = document.querySelectorAll(selectors.heroBanners)

    window.addEventListener("load", (event) => {
        
        heroBanners.forEach((heroBanner,i) => {

            heroBanner.classList.add('section-hero-banner-' + i);

            let heroBanner_height = heroBanner.offsetHeight

            let heroScrollDown = heroBanner.querySelector('.hero-scroll-down')
            let heroScrollDown_it_to_scroll = heroScrollDown.getAttribute("data-scroll")
            
            if (heroScrollDown_it_to_scroll) {
                heroBanner_height = document.querySelector(heroScrollDown_it_to_scroll).offsetHeight
            }

            if (heroScrollDown) {
                heroScrollDown.addEventListener("click", function(){
                    window.scrollTo({ left: 0, top: heroBanner_height, behavior: "smooth" });
                })
            }
            
        })
    })


    


})(document);
  