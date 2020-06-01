


function updateClickCounter(cat) {
    const clickCounter = document.querySelector(`#click-counter-${cat.name}`);
    clickCounter.textContent = `Clicks: ${cat.clicks}`;
}

function countClicks(cat) {
    cat.clicks++;
    console.log(`The cat ${cat.name} was clicked`)
    updateClickCounter(cat);
}



const catNames = ['bob', 'betty', 'kitties'];
catHerder = new CatHerder(catNames);

/*
function main() {
    let cats = [];
    let eventListeners = [];
    for (catName of catNames) {
        console.log('Creating cat ', catName);
        const cat = new Cat(catName);
        cats.push(cat);
        addCat2List(catName);
    }

    for (cat of cats) {
        eventListeners.push(createClickEventListeners(cat));
        eventListeners.push(createDisplayEventListener(cat, cats));
    }

    for (eventListener of eventListeners) {
        eventListener();
    }
    console.log(`There are ${eventListeners.length} event listeners`)
}
*/