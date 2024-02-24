// get .visits and initialize element
const visitsElement = document.querySelector(".visits");

// getting current day
let currentDate = new Date();
let today = Date.now();

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

// get the num of visits in the local storage if exists or (||) assign it to 0
let lastVisit = Number(window.localStorage.getItem('lastVisitLocal')) || currentDate;
//let lastVisit = new Date(lastVisitDay).getTime();

//getting the time since last visit
let daysSinceLastVisit = (today - lastVisit)/msToDays;


//display the num of visits or a message if is the first visit of the user
if(daysSinceLastVisit == 0){
    visitsElement.textContent = "Welcome! Let us know if you have any questions.";
}
else if ((daysSinceLastVisit > 0) && (daysSinceLastVisit < 1)){
    visitsElement.textContent = "Back so soon! Awesome!";
}
else{
    daysSinceLastVisit = Math.floor(daysSinceLastVisit);
    visitsElement.textContent = `You last visited ${daysSinceLastVisit} days ago`
}

localStorage.setItem('lastVisitLocal', today);

