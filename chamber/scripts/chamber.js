
//declaring the date in the footer
const now = new Date();
const currentYear = now.getFullYear();
let dateTime = document.lastModified;

//declaring the current year in the footer
const domCurrentYear = document.querySelector('#current-year');
domCurrentYear.innerText = currentYear;

//declaring last modified date on footer
const lastModified = document.querySelector('#current-date');
lastModified.innerText = dateTime

//declaring navigation variables
const hamburgerElement = document.querySelector("#menu");
const navElements = document.querySelector(".navigation");

//declaring dark mode variables
const darkButton = document.getElementById('darkBtn');
const main = document.querySelector('main')

//adding class for open and close hamburguer menu
hamburgerElement.addEventListener('click', () => {
    navElements.classList.toggle('open');
    hamburgerElement.classList.toggle('open');  
})

//code for dark mode click
darkButton.addEventListener('click',() =>{
    main.classList.toggle('dark');
})

// get .visits and initialize element
const visitsElement = document.querySelector(".visits");

