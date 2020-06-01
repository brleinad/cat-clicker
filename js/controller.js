class CatHerder {
    constructor(catNames) {
        this.catHerd = new CatHerdModel(catNames);

        const cats = this.catHerd.catArray;
        this.catListView = new CatListView(cats, this);
        this.catViews = {};
        for (let cat of cats) {
            this.catViews[cat.name] = new CatView(cat, this);
        }
    }

    showCat(catName) {
        console.log('These are the views ', this.catViews)
        this.catViews[catName].showCat();
    }

    hideCat(catName) {
        this.catViews[catName].hideCat();
    }

    clickCat(catName) {
        this.catHerd.countCatClick(catName);
        const cat = this.catHerd.getCatByName(catName);
        this.catViews[catName].updateCat(cat);
    }
}