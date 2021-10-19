export default class Section {
    constructor({items, renderer}, selectorContainer){
        this._items = items;
        this._renderer = renderer;
        this._container = selectorContainer;
    }

    renderItem() { 
        this._items.forEach((data) => {
            this._renderer(data)
        });
    }

    addItem(element){ 
        this._container.prepend(element);
    }
}