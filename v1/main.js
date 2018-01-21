const $leftArrow = document.querySelector('#left-arrow');
const $rightArrow = document.querySelector('#right-arrow');
const $photo = document.querySelector('#photo');
const $dots = document.querySelector('#dots');

const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

let index = 0;
let clock = null; // interval

const photos = [
    'https://picsum.photos/400/200?image=0',
    'https://picsum.photos/400/200?image=10',
    'https://picsum.photos/400/200?image=20'
];

function setupDots() {
    const count = photos.length;

    for (let i = 0; i < count; ++i) {
        const $dot = document.createElement('input');
        $dot.type = 'radio';
        $dot.name = 'bullet';

        $dots.appendChild($dot);
    }
}

function updatePhoto(link) {
    $photo.setAttribute('src', link);

    const dot = $dots.children[index];
    dot.checked = true;
}

function leftClickHandler() {
    index--;
    if (index < 0) {
        index = photos.length - 1;
    }
    const link = photos[index];
    updatePhoto(link);
    setupClock();
}

function setupClock() {
    clearInterval(clock);
    clock = setInterval(function () {
        rightClickHandler();
    }, 3000);
}

function rightClickHandler() {
    index++;
    if (index > photos.length - 1) {
        index = 0;
    }
    const link = photos[index];
    updatePhoto(link);
    setupClock();
}

$leftArrow.addEventListener('click', leftClickHandler);

$rightArrow.addEventListener('click', function () {
    rightClickHandler();
});

window.addEventListener('keydown', function (event) {
    const keyCode = event.keyCode;

    switch (keyCode) {
        case LEFT_KEY_CODE:
            leftClickHandler();
            break;

        case RIGHT_KEY_CODE:
            rightClickHandler();
            break;
    }
});

$dots.addEventListener('click', function (event) {
    const $dot = event.target;
    if ($dot.tagName !== 'INPUT') {
        console.warn('Proszę kliknij w INPUT a nie w:', $dot);
        return;
    }

    index = Array.from($dots.children).indexOf($dot);
    updatePhoto(photos[index]);
    setupClock();
});

setupDots();
updatePhoto(photos[index]);
setupClock();
