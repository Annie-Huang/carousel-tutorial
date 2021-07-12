const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
// const size = carouselImages[0].clientWidth;
// const size = carouselImages[0].getBoundingClientRect().width;
const size = carouselImages[0].offsetWidth;
console.log('size=', size);

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

// Button listeners

nextBtn.addEventListener('click', () => {
  console.log('next clicked');
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
  console.log('prev clicked');

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  console.log('Fired');
});
