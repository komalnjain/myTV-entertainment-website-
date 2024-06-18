let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
    image: "images/slider 2.png"
  },
  {
    name: "Loki",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
    image: "images/slider 4.png"
  },
  {  
     name: "luca",
     des:
      "Loren ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
     image: "images/slider 5.png"
   }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;//track the current slide

const createSlide = () => {
if (slideIndex >= movies.length) {
  slideIndex = 0;
}

//create DOM element
let slide = document.createElement('div');
var imgElement = document.createElement('img');
let content = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

//attaching all elements

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
carousel.appendChild(slide);

//setting up images

imgElement.src = movies[slideIndex].image;
slideIndex++

//setting element class name

slide.className = 'slider';
content.className = 'slider-content';
h1.className = 'movie-title';
p.className = 'movie-des';

sliders.push(slide);

if (sliders.length) {
  sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
    30 * (sliders.length - 2)}px)`;
  }
};

for (let i = 0; i < 3; i++) {
createSlide();
}

setInterval(()=>{
  createSlide();
 }, 3000);


const videoCards = [...document.querySelectorAll('video-card')];

videoCards.forEach((item) => {
item.addEventListener('mouseover', () => {
  const video = item.children[1];
  video.play();
});

item.addEventListener('mouseleave', () => {
  const video = item.children[1];
  video.pause();
});
});

const cardContainers = [...document.querySelectorAll('.card-container')];
const preBtns = [...document.querySelectorAll('.pre-btn')];
const nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
const containerDimensions = item.getBoundingClientRect();
const containerWidth = containerDimensions.width;

nxtBtns[i].addEventListener('click', () => {
  item.scrollLeft += containerWidth - 200;
});

preBtns[i].addEventListener('click', () => {
  item.scrollLeft -= containerWidth + 200;
});
});





