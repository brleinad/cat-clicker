class CatListView {
    constructor(cats, catHerder) {
        this.render(cats)
        this.catHerder = catHerder;
        for (let selectedCat of cats) {
            //this.createDisplayEventListener(cat, cats)();
            document.querySelector(`#${selectedCat.name}-link`).addEventListener('click', (function(selectedCat) {
                return (event => {
                event.preventDefault();
                for (let cat of cats) {
                    if (cat != selectedCat) {
                        catHerder.hideCat(cat.name);
                    } else {
                        catHerder.showCat(cat.name);
                    }
                }

                });
            })(selectedCat))
        }
    }

    createDisplayEventListener(selectedCat, cats) {
        return function() {
            console.log('BOB: ', selectedCat.name);
            document.querySelector(`#${selectedCat.name}-link`).addEventListener('click', event => {
                event.preventDefault();
                for (let cat of cats) {
                    if (cat != selectedCat) {
                        this.catHerder.hideCat(cat.name);
                    } else {
                        this.catHerder.showCat(cat.name);
                    }
                }
            })
        }
    }

    render(cats) {
        const catList = document.querySelector('#cat-list');
        for (let cat of cats) {
            const catLI = document.createElement('li');
            const catLink = document.createElement('a');
            catLink.setAttribute('href', `#${cat.name}-div`);
            catLink.setAttribute('id', `${cat.name}-link`);
            catLink.textContent = cat.name;
            catLI.appendChild(catLink);
            catList.appendChild(catLI);
        }
    }
}

class CatView {
    constructor(cat, catHerder) {
        this.cat = cat;
        this.catHerder = catHerder;
        this.catDiv = this.render();
        //this.createClickEventListeners()();
        document.querySelector(`#${cat.name}`).addEventListener('click', (catName => {
            return (event => {
                catHerder.clickCat(catName);
            });
        })(cat.name));
    }

    createClickEventListeners(cat) {
        return function() {
            document.querySelector(`#${cat.name}`).addEventListener('click', () => {
                this.catHerder.countClicks(cat);
                });
        }
    }

    updateCat(cat) {
        this.cat = cat;
        const catCounter = document.querySelector(`#click-counter-${this.cat.name}`);
        catCounter.textContent = `Clicks: ${this.cat.clicks}`;
    }

    render() {
        const catDiv = document.createElement('div');
        catDiv.setAttribute('id', `${this.cat.name}-div`);
        catDiv.setAttribute('class', 'cat');

        const catTitle = document.createElement('h2');
        catTitle.textContent = this.cat.name;

        const catCounter = document.createElement('p');
        catCounter.setAttribute('id', `click-counter-${this.cat.name}`);
        catCounter.textContent = `Clicks: ${this.cat.clicks}`;

        const catPicture = document.createElement('img');
        catPicture.setAttribute('id', this.cat.name);
        catPicture.setAttribute('alt', `${this.cat.name} the cat`);
        catPicture.setAttribute('src', `./images/cats/${this.cat.name}.jpg`);

        catDiv.appendChild(catTitle);
        catDiv.appendChild(catCounter);
        catDiv.appendChild(catPicture);
        catDiv.style.display =  'none';

        const catContainer = document.querySelector('#cats')
        catContainer.appendChild(catDiv)

        this.display = false;
        return catDiv;
    }

    showCat() {
        if (!this.display) {
            this.display = true;
            this.catDiv.style.display =  'block';
        }
    }

    hideCat() {
        if (this.display) {
            this.display = false;
            this.catDiv.style.display =  'none';
        }
    }
}