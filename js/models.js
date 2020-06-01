class CatModel {
    constructor(name) {
        this.name = name;
        this.clicks = 0;
    }
}

class CatHerdModel {
    constructor(catNames) {
        this.cats = [];
        this.catHerd = {}
        for (let catName of catNames) {
            const cat = new CatModel(catName);
            this.cats.push(cat);
            this.catHerd[catName] = cat;
        }
        console.log(this.catHerd)
    }

    countCatClick(catName) {
        //this.cats.find(cat => (cat.name == catName)).clicks++;
        const cat = this.catHerd[catName];
        console.log('Clicked on cat ', cat)
        this.catHerd[catName].clicks++;
    }

    getCatByName(catName) {
        return this.catHerd[catName];
    }

    get catArray() {
        return this.cats.slice();
    }

}