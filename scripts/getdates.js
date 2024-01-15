const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const yearSpan = document.getElementById("year");
const lastModifiedParagraph = document.getElementById("lastModified");

yearSpan.textContent = currentYear;

lastModifiedParagraph.textContent = `Last modified: ${lastModified.toLocaleString()}`;