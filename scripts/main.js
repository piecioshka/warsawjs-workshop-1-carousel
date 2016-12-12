const INTERVAL = 2000;

let Slider = {
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

    hideAllPhotos: function () {
        Array.from(this.$list).forEach(($item) => {
            this.hidePhoto($item);
        });
    },

    setupInterval: function () {
        this.interval = setInterval(() => {
            this.displayNextPhoto();
        }, INTERVAL);
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

Slider.setup();
