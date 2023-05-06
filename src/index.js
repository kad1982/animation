const heroTitle = document.querySelector('.hero__title');
const heroDescr = document.querySelector('.hero__descr');
const heroBtn = document.querySelector('.hero__btn');
const images = document.querySelector('.photos-wrap');
const autor = document.querySelector('.photos__author');


const tl = new TimelineMax();
tl
  .fromTo([heroTitle, heroBtn], {
    y: 1024,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    ease: "power1"
  })
  .fromTo(heroDescr, {
    opacity: 0
  }, {
    opacity: 1,
    ease: "power1"
  })
  .fromTo(images.children[0], {
    opacity: 0,
    scale: 0
  }, {
    opacity: 1,
    scale: 1,
    ease: "power1"
  })
  .fromTo(images.children[1], {
    opacity: 0,
    scale: 0
  }, {
    opacity: 1,
    scale: 1,
    ease: "power1"
  })
  .fromTo(images.children[2], {
    opacity: 0,
    scale: 0
  }, {
    opacity: 1,
    scale: 1,
    ease: "power1"
  })
  .fromTo(autor, {
    opacity: 0
  }, {
    opacity: 1,
    ease: "power1"
  })

// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');
// burger.addEventListener('click', (e) => {
//   e.preventDefault();
//   menu.classList.add('menu--open');
//   const menuNav = document.querySelector('.menu__nav');
//   const menuRight = document.querySelector('.menu__right');
//   const social = document.querySelector('.social');
//   const t2 = new TimelineMax();
//   t2
//     .fromTo(menuNav, {
//       y: 1024,
//       opacity: 0
//     }, {
//       y: 0,
//       opacity: 1,
//       ease: "power1"
//     })
//     .fromTo([menuRight, social], {
//       y: 1024,
//       opacity: 0
//     }, {
//       y: 0,
//       opacity: 1,
//       ease: "power1"
//     })
//   const btnCloseBurger = document.querySelector('.close');

//   btnCloseBurger.addEventListener('click', (e) => {
//     e.preventDefault();
//     t2.reverse();
//     window.setTimeout(() => {
//           menu.classList.remove('menu--open');
//     }, 1000)
//   })
// })

const burgerOpen = gsap.timeline()
.pause()
.set('.menu',  { display: 'block'})
.fromTo('.menu__nav', { opacity: 0, y: 800 }, { opacity: 1, y: 0, duration: .5, ease: "power1" })
.fromTo(['.menu__right','.social'], { opacity: 0, y: 800 }, { opacity: 1, y: 0, duration: 0.7, ease: "power1" }, '-=0.2')

document.querySelector('.burger').addEventListener('click', () => {
burgerOpen.play()
})

document.querySelector('.close').addEventListener('click', () => {
burgerOpen.reverse()
})
