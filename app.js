const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
console.log('size=', size);

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

// Button listeners

nextBtn.addEventListener('click', () => {
  console.log('next clicked');
  console.log('counter=', counter);

  // This is in case you click too fast on the next button without giving time for the transaction to finish so it can make the jump to the first element.
  if (counter >= carouselImages.length - 1) return;

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
  console.log('prev clicked');
  console.log('counter=', counter);

  // This is in case you click too fast on the prev button without giving time for the transaction to finish so it can make the jump to the last element.
  if (counter <= 0) return;

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  // console.log('Fired');
  console.log(carouselImages[counter]);

  // If transition result we landing on the first element, img/1.jfif (2nd one in our list), don't do transition animation, jump directly to the last element, img/6.jfif  (the 2nd last element)
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none'; // if you comment out this line, you can see the ugly jump
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }

  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none'; // if you comment out this line, you can see the ugly jump
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});
