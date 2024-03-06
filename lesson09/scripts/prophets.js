const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


async function getProphetData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthdate = document.createElement('h4')
        let deathdate = document.createElement('h4')
        let birthPlace = document.createElement('h4')
        let portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', 340);
        portrait.setAttribute('heigth', 440);
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`
        deathdate.textContent = `Date of Death: ${prophet.death}`
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(deathdate);
        card.appendChild(birthPlace)
        card.appendChild(portrait);
        cards.appendChild(card);        
    });
}

getProphetData(url);