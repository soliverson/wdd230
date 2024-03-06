// In the links.js file, create a baseURL variable that references your root wdd230 repository,
// GitHub pages URL
const baseURL = "https://soliverson.github.io/wdd230/";
// Next, add a variable named linksURL that references your links.json data file
const linksURL = "https://soliverson.github.io/wdd230/data/links.json";

// Write an asynchronous function to get the links data in the links.json data file.
async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    //In the getLinks function, add a new line of code at the end that calls 
    //a function that will build out the available activity links from the data response.
    displayLinks(data.lessons);

}
//Create the displayLinks() function and name the function's single parameter weeks.
// Remember from the json data that you wrote and tested that the data is an array of 
// objects representing weeks of the term.
function displayLinks(lessons){
    const list = document.querySelector(".links");
      
    lessons.forEach((lesson) => { 
        //create li element and add title as text content
        const listElement = document.createElement('li');
        listElement.textContent = `${lesson.lesson}`;
        //iterate through each link in links property to create a element       
        lesson.links.forEach((link, i) =>{
            let aElement = document.createElement('a');
            aElement.setAttribute("href", link.url);
            //verify if it is the last link so it has no | after it
            if (i === lesson.links.length - 1){
                aElement.textContent = `${link.title}`;
            }else{
                aElement.textContent = `${link.title} | `;
            }
            // add aElement (the link with title) to li element 
            //(if links array has more than one link it will add each one of them)
            listElement.appendChild(aElement); 
        })  
        // add li element to the ul element
        list.appendChild(listElement);      
    });
    
}
getLinks();