const filtersColor = [{
        color: `black`,
        name: `Черный`,
        isChecked: true
    },
    {
        color: `white`,
        name: `Белый`,
        isChecked: false
    },
    {
        color: `blue`,
        name: `Синий`,
        isChecked: true
    },
    {
        color: `red`,
        name: `Красный`,
        isChecked: false
    },
    {
        color: `pink`,
        name: `Розовый`,
        isChecked: true
    },
    {
        color: `pink`,
        name: `Розовый`,
        isChecked: true
    }

];

const generateFilterTemplate = (filter) => {
    const { color, name, isChecked } = filter;
    let checkedOn = ``;
    if (isChecked) {
        checkedOn = `checked`
    } else {
        checkedOn = ``
    }

    return (`<input class="visible" type="checkbox" name="color" value="${color}" id="${color}" ${checkedOn}>
    <label for="${color}">${name}</label>`)
};

const generateElement = (template) => {

    const newElement = document.createElement(`div`);

    newElement.innerHTML = template;

    return newElement.lastChild

};



class Filter {
    constructor() {
        this._element1 = null;
        this._element2 = null;
    }

    getTemplate(filter) {

        return generateFilterTemplate(filter)
    }

    getElement1(filter) {
        if (!this._element1) {
            this._element1 = createElement(this.getTemplate(filter))
        }
        console.log(this._element1)
        return this._element1
    }
    getElement2(filter) {
        if (!this._element2) {
            this._element2 = generateElement(this.getTemplate(filter))
        }
        console.log(this._element2)
        return this._element2
    }

}

const containerFilters = document.querySelector(`.fieldset-color`);
renderFilters = (element, container, newClass1) => {
    const newElement1 = newClass1;


    container.append(newElement1.getElement1(element));
    container.append(newElement1.getElement2(element));


}

filtersColor.map((it) => renderFilters(it, containerFilters, new Filter()))