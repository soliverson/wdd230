const now = new Date();
const currentYear = now.getFullYear();
let dateTime = document.lastModified;

const domCurrentYear = document.querySelector('#current-year');
domCurrentYear.innerText = currentYear;

const lastModified = document.querySelector('#current-date');
lastModified.innerText = dateTime