const INTERVAL = 2000;

let Carousel = {
    index: null,
    $list: null,
    interval: null,

    setup() {
        this.index = 0;
        this.$list = document.querySelectorAll('ul li');

        this.hideAllPhotos();
        this.displayPhoto(this.getCurrentPhoto());
        this.setupInterval();
    },

    hideAllPhotos() {
        Array.from(this.$list).forEach(($item) => {
            this.hidePhoto($item);
        });
    },

    setupInterval() {
        this.interval = setInterval(() => {
            this.displayNextPhoto();
        }, INTERVAL);
    },

    stopInterval() {
        clearInterval(this.interval);
    },

    getCurrentPhoto() {
        return this.$list[this.index];
    },

    hidePhoto($photo) {
        $photo.classList.add('hide');
    },

    displayPhoto($photo) {
        $photo.classList.remove('hide');
    },

    displayPreviousPhoto() {
        let $currentPhoto = this.getCurrentPhoto();
        this.hidePhoto($currentPhoto);

        this.index--;
        if (this.index === -1) {
            this.index = this.$list.length - 1;
        }

        let $nextPhoto = this.getCurrentPhoto();
        this.displayPhoto($nextPhoto);
    },

    displayNextPhoto() {
        let $currentPhoto = this.getCurrentPhoto();
        this.hidePhoto($currentPhoto);

        this.index++;
        if (this.index === this.$list.length) {
            this.index = 0;
        }

        let $nextPhoto = this.getCurrentPhoto();
        this.displayPhoto($nextPhoto);
    }
};

Carousel.setup();

document.querySelector('.left-arrow').addEventListener('click', (evt) => {
    evt.preventDefault();
    Carousel.stopInterval();
    Carousel.displayPreviousPhoto();
});

document.querySelector('.right-arrow').addEventListener('click', (evt) => {
    evt.preventDefault();
    Carousel.stopInterval();
    Carousel.displayNextPhoto();
});
