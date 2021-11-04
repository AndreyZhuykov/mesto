export default class Section {
    constructor({renderer}, selectorContainer){
        this._renderer = renderer;
        this._container = selectorContainer;
    }

    renderItem(data) { 
        data.forEach((item) => {
            this._renderer(item)
        });
    }

    addItem(element){ 
        this._container.append(element);
    }

    addItemPrepend(element){ 
        this._container.prepend(element);
    }
}