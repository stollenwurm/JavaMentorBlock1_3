const swiper = document.querySelector('.swiper-container')

let mySwiper

function mobileSlider () {
  if ((window.innerWidth < 768) && (swiper.dataset.mobile === 'false')) {
    mySwiper = new Swiper(swiper, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    
      grabCursor: true,
    
      slidesPerView: 1.25,
    
      // spaceBetween: 16,
      slideClass: 'brands-items__item',
    
      a11y: {
        enabled: true
      }
    })
  
    swiper.dataset.mobile = 'true'
  } 
  
  if (window.innerWidth >= 768) {
    swiper.dataset.mobile = 'false'

    if (swiper.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy()
    }
  }
}


let btn = document.querySelector('.section__button-container')
let swiperContainer = document.querySelector('.swiper-container')
let brandsItems = document.querySelector('.brands-items')
let brands = document.querySelector('.brands')
let img = btn.querySelector('.section__button-img')
let p = btn.querySelector('.section__button-text')

function resize () {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault()
    
    if (btn.classList.contains('section__button-container--open')) {
      btn.classList.remove('section__button-container--open')
      swiperContainer.classList.add('swiper-container--b')
      brandsItems.classList.add('brands-items--b')
      brands.classList.add('brands--b')
      img.src = 'img/icon-reverse.svg'
      p.textContent = 'Скрыть'
      p.style.width = '57px'
      btn.style.width = '88px'
    } else  {
      btn.classList.add('section__button-container--open')
      swiperContainer.classList.remove('swiper-container--b')
      brandsItems.classList.remove('brands-items--b')
      brands.classList.remove('brands--b')
      img.src = 'img/icon.svg'
      p.textContent = 'Показать все'
      p.style.width = '101px'
      btn.style.width = '101px'
    }
  })
}

mobileSlider()
resize()

window.addEventListener('resize', () => {
  mobileSlider()
})
