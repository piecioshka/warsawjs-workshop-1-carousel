const INTERVAL = 3000;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

let interval;

function setup() {
    interval = setInterval(displayNextPicture, INTERVAL);

    let $left = document.querySelector('#left-button');
    let $right = document.querySelector('#right-button');

    $left.addEventListener('click', onClickLeftHandler);
    $right.addEventListener('click', onClickRightHandler);

    document.addEventListener('keydown', onKeydownHandler);

    displayDots();
    setupDotsClick();
    markDot();
}

function displayNextPicture() {
    let $list = document.querySelector('ul');
    let $active = $list.querySelector('li.active');
    let $next = $active.nextElementSibling;

    if ($next === null) {
        $next = $list.firstElementChild;
    }

    $active.classList.remove('active');
    $next.classList.add('active');

    markDot();
}

function displayPrevPicture() {
    let $list = document.querySelector('ul');
    let $active = $list.querySelector('li.active');
    let $next = $active.previousElementSibling;

    if ($next === null) {
        $next = $list.lastElementChild;
    }

    $active.classList.remove('active');
    $next.classList.add('active');

    markDot();
}

function onClickLeftHandler() {
    clearInterval(interval);
    displayPrevPicture();
}

function onClickRightHandler() {
    clearInterval(interval);
    displayNextPicture();
}

function onKeydownHandler(evt) {
    let keyCode = evt.keyCode;
    switch (keyCode) {
        case LEFT_ARROW:
            onClickLeftHandler();
            break;

        case RIGHT_ARROW:
            onClickRightHandler();
            break;
    }
}

function displayDots() {
    let $dots = document.querySelector('#dots');
    let $fragment = document.createDocumentFragment();
    let $list = document.querySelector('ul');
    let index = 0;
    const uniqId = `radio-${Math.random()}`;
    for (let item of $list.children) {
        let $input = document.createElement('input');
        $input.setAttribute('type', 'radio');
        $input.setAttribute('name', uniqId);
        $input.dataset.index = index;
        $fragment.appendChild($input);
        index++;
    }
    $dots.appendChild($fragment);
}

function setupDotsClick() {
    let $dots = document.querySelector('#dots');
    $dots.addEventListener('click', function (evt) {
        let $item = evt.target;
        let itemName = $item.nodeName.toLowerCase();
        if (itemName !== 'input') {
            return;
        }
        let index = Number($item.dataset.index);
        clearInterval(interval);
        displayPictureByIndex(index);
    });
}

function displayPictureByIndex(pictureIndex) {
    let $list = document.querySelector('ul');
    let $active = $list.querySelector('li.active');
    let $next = $list.children[pictureIndex];
    $active.classList.remove('active');
    $next.classList.add('active');
}

function markDot() {
    let $dotsItems = document.querySelectorAll('#dots > input');
    let $items = document.querySelectorAll('ul > li');
    $items.forEach(function ($item, index) {
        if ($item.classList.contains('active')) {
            $dotsItems[index].checked = true;
        }
    });
}

window.addEventListener('DOMContentLoaded', setup);
