const productList = [{
        name: `Любительская селфи-палка`,
        cost: `500`,
        url: 'catalog%20img/item-1.jpg'

    },
    {
        name: `Профессиональная <br> селфи-палка`,
        cost: `1500`,
        url: `catalog%20img/item-2.jpg`
    },
    {
        name: `Непотопляемая селфи-палка`,
        cost: `2500`,
        url: `catalog%20img/item-3.jpg`
    },
    {
        name: `Селфи-палка <br> «Следуй за мной»`,
        cost: `4900`,
        url: `catalog%20img/item-4.jpg`
    },
];

const generateTenplate = (card) => {

    const { name, cost, url } = card;

    return (`<li class="catalog-list-item">
    <div>
        <img src="${url}" alt="${name}">
        <button type="button" name="button">в корзину</button>
        <button type="button" name="button">Добавить к сравнению</button>
    </div>
    <span>${name}</span>
    <b>${cost} руб</b>`)

};

const createElement = (template) => {

    const newElement = document.createElement(`div`);

    newElement.innerHTML = template;

    return newElement.firstChild

};


class ProductCard {
    constructor() {
        this._element = null;
    }

    getTemplate(card) {
        return generateTenplate(card)
    }

    getElement(card) {
        if (!this._element) {
            this._element = createElement(this.getTemplate(card))
        }
        return this._element
    }
};

const board = document.querySelector(`.catalog-list`);

const render = (element, container, newClass1) => {

    const newElement1 = newClass1;


    container.append(newElement1.getElement(element));


};


productList.map((it) => render(it, board, new ProductCard()))