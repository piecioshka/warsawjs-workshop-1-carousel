const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

class TestCarousel {
    constructor(options) {
        this.settings = {
            name: 'no-name',
            $el: null,
            interval: 5000
        };
        Object.assign(this.settings, options);

        this.index = 0;
        this.clock = null;

        this.images = this.settings.$el.querySelectorAll('img');
        this.dots = null;
        this.$leftArrow = null;
        this.$rightArrow = null;

        this.setup();
    }

    setup() {
        this.setupWrapperSize();
        this.setupArrows();
        this.setupDots();
        this.setupClock();
        this.setupArrowsClickMechanism();
        this.setupKeyboardMechanism();
        this.setupDotsMechanism();
        this.displayCarousel();
        this.setImageByIndex(this.index);
    };

    setupWrapperSize() {
        const $firstImage = this.images[0];
        const $wrapper = this.settings.$el;
        $wrapper.style.width = $firstImage.width + 'px';
        $wrapper.style.height = $firstImage.height + 'px';
        $wrapper.style.overflow = 'hidden';
    };

    setupArrows() {
        const $leftArrow = document.createElement('button');
        $leftArrow.innerText = '<';
        $leftArrow.classList.add('left-arrow');
        $leftArrow.classList.add('arrow');
        this.$leftArrow = $leftArrow;

        const $rightArrow = document.createElement('button');
        $rightArrow.innerText = '>';
        $rightArrow.classList.add('right-arrow');
        $rightArrow.classList.add('arrow');
        this.$rightArrow = $rightArrow;

        const $wrapper = this.settings.$el;
        $wrapper.appendChild($leftArrow);
        $wrapper.appendChild($rightArrow);
    };

    setupDots() {
        const $wrapper = this.settings.$el;

        this.images.forEach(($img, i) => {
            const $dot = document.createElement('input');
            $dot.classList.add('dot');
            $dot.type = 'radio';
            $dot.name = this.settings.name + ' - dot';
            $wrapper.appendChild($dot);

            const left = parseInt(getComputedStyle($dot).left);
            $dot.style.left = left + (i * 20) + 'px';
        });

        this.dots = this.settings.$el.querySelectorAll('input[type="radio"]');
    };

    displayCarousel() {
        this.settings.$el.style.visibility = 'visible';
    };

    setupClock() {
        clearInterval(this.clock);
        this.clock = setInterval(() => {
            this.moveCarouselToRight();
        }, this.settings.interval);
    };

    moveCarouselToLeft() {
        this.index--;
        if (this.index < 0) {
            this.index = this.images.length - 1;
        }
        this.setImageByIndex(this.index);
    };

    moveCarouselToRight() {
        this.index++;
        if (this.index > this.images.length - 1) {
            this.index = 0;
        }
        this.setImageByIndex(this.index);
    };

    setImageByIndex(index) {
        Array.from(this.images).forEach(($img, i) => {
            if (i !== index) {
                $img.style.display = 'none';
            } else {
                $img.style.display = 'block';
            }
        });

        Array.from(this.dots).forEach(($dot, i) => {
            if (i === index) {
                $dot.checked = true;
            } else {
                $dot.checked = false;
            }
        });
    };

    navigateToLeft() {
        this.moveCarouselToLeft();
        this.setupClock();
    };

    navigateToRight() {
        this.moveCarouselToRight();
        this.setupClock();
    };

    setupArrowsClickMechanism() {
        this.$leftArrow.addEventListener('click', this.navigateToLeft.bind(this));
        this.$rightArrow.addEventListener('click', this.navigateToRight.bind(this));
    };

    setupKeyboardMechanism() {
        window.addEventListener('keydown', (event) => {
            const keyCode = event.keyCode;

            switch (keyCode) {
                case LEFT_KEY_CODE:
                    this.navigateToLeft();
                    break;

                case RIGHT_KEY_CODE:
                    this.navigateToRight();
                    break;
            }
        });
    };

    setupDotsMechanism() {
        Array.from(this.dots).forEach(($dot, i) => {
            $dot.addEventListener('click', () => {
                this.index = i;
                this.setImageByIndex(this.index);
                this.setupClock();
            });
        });
    };
}
