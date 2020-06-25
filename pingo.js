const pin1 = document.querySelector(`.pin-1`);
const pin2 = document.querySelector(`.pin-2`);
const pinLine = document.querySelector('.pin');

class Coordinate {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
};

pin1.addEventListener('mousedown', (evt) => {
    let CordPin1 = new Coordinate(evt.clientX)



    const onMouseMove = (moveEvt) => {
        moveEvt.preventDefault();

        let shift = {
            x: CordPin1.x - moveEvt.clientX,
        }

        CordPin1 = {
            x: moveEvt.clientX,
        }
        pin1.style.left = `${pin1.offsetLeft - shift.x}px`



        const LEFT_BORDER = 0;
        let RIGHT_BORDER = pin2.offsetLeft - 20;

        if (pin1.offsetLeft <= LEFT_BORDER) {
            pin1.style.left = `${LEFT_BORDER}px`
        }
        if (pin1.offsetLeft >= RIGHT_BORDER) {
            pin1.style.left = `${RIGHT_BORDER}px`
        }
        pinLine.style.backgroundImage = `linear-gradient(to right, #dbdbdb, #dbdbdb ${pin1.offsetLeft}px, #91c92f, #91c92f ${pin2.offsetLeft}px, #dbdbdb ${pin2.offsetLeft}px, #dbdbdb)`;
        let minValue = pin1.offsetLeft * (5000 / 200);
        const minCost = document.querySelector(`#cost-filter-min`);

        minCost.textContent = `от ${minValue}`

    };

    const onMouseUp = (upEvt) => {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);


    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
})

pin2.addEventListener('mousedown', (evt) => {
    let CardPin2 = new Coordinate(evt.clientX)

    const onMouseMove = (moveEvt) => {
        let shift = new Coordinate(CardPin2.x - moveEvt.clientX);

        CardPin2.x = moveEvt.x

        pin2.style.left = `${pin2.offsetLeft-shift.x}px`

        let LEFT_BORDER = pin1.offsetLeft + 20;
        const RIGHT_BORDER = 180;

        if (pin2.offsetLeft <= LEFT_BORDER) {
            console.log(pin2.offsetLeft)
            pin2.style.left = `${LEFT_BORDER}px`

        }
        if (pin2.offsetLeft >= RIGHT_BORDER) {
            pin2.style.left = `${RIGHT_BORDER}px`
        }

        pinLine.style.backgroundImage = `linear-gradient(to right, #dbdbdb, #dbdbdb ${pin1.offsetLeft}px, #91c92f, #91c92f ${pin2.offsetLeft}px, #dbdbdb ${pin2.offsetLeft}px, #dbdbdb)`;
        let maxValue = pin2.offsetLeft * (5000 / 180);
        const maxCost = document.querySelector(`#cost-filter-max`);

        maxCost.textContent = `от ${Math.round(maxValue)}`

    };

    const onMouseUp = (upEvt) => {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

})