let movies =  [
    {
      name: "falcon and the winter soldier",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
      image: "images/sports1.jpg"
    },
    {
      name: "Loki",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
      image: "images/sports2.jpg"
    },
    {
      name: "wanda vision",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
      image: "images/sports3.jpg"
    },
    {
      name: "raya and the last dragon",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
      image: "images/sports4.jpg"
    },
    {  
       name: "luca",
       des:
        "Loren ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam except",
       image: "images/sports5.jpg"
     }
  ];
  
  
//   const carousel = document.querySelector('.carousel'); // Get reference to carousel element
//   let sliders = []; // Array to store created slides
//   let slideIndex = 0; // Track the current slide
  
//   const createSlide = () => {
//     if (slideIndex >= movies.length) {
//       slideIndex = 0;
//     }
  
//     // Create DOM element for slide
//     let slide = document.createElement('div');
//     var imgElement = document.createElement('img');
  
//     // Attaching image element to slide
//     slide.appendChild(imgElement);
  
//     // Appending slide to carousel container
//     carousel.appendChild(slide);
  
//     // Setting up image source based on current slide index
//     imgElement.src = movies[slideIndex].image;
//     slideIndex++;
  
//     // Setting element class names for slide and image
//     slide.className = 'slider';
//     imgElement.className = 'slider-img';
  
//     sliders.push(slide); // Add created slide to the sliders array
//   };
  
//   // Create initial slides (you can adjust the number)
//   for (let i = 0; i < 3; i++) {
//     createSlide();
//   }
  
//   // Function to automatically create and display new slides
//   const startSlideShow = () => {
//     setInterval(() => {
//       createSlide(); // Create a new slide
//     }, 3000); // Change interval time for slide change (in milliseconds)
//   };
  
//   // Start the slideshow
//   startSlideShow();
  
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




