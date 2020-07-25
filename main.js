document.addEventListener("DOMContentLoaded", function() {

    const body = document.getElementsByTagName('body')[0];
    const bgs = document.getElementsByClassName('bg');
    const texts = document.getElementsByClassName('text');

    const colorWhite = 'rgb(255, 255, 255)';
    const colorBlack = 'rgb(0, 0, 0)';

    let switchColor = function (color) {
        body.style.backgroundColor = color === 'white' ? colorWhite : colorBlack;

        for (let bg of bgs) {
            bg.style.backgroundColor = color === 'white' ? colorBlack : colorWhite;
        }

        for (let text of texts) {
            text.style.color = color === 'white' ? colorWhite : colorBlack;
        }
    };

    for (let text of texts) {
        text.addEventListener('click', function (event) {
            if (event.target.style.color === colorBlack) {
                switchColor('white');
            } else {
                switchColor('black');
            }
        });
    }

});