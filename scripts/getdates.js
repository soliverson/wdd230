const modified = new Date(document.lastModified).toString();
const year = new Date().getFullYear().toString();

document.querySelector('#copyright').innerHTML = `&copy;${year}`;
document.querySelector('#modified').textContent = modified;