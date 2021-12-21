import Carousel from './carousel.js';
class SwipeCarousel extends Carousel {
  swipeStart(e) {
    this.swipeStartX = e.changedTouches[0].pageX;
  }

  swipeEnd(e) {
    this.swipeEndX = e.changedTouches[0].pageX;
    this.swipeStartX - this.swipeEndX > 100 && this.next();
    this.swipeStartX - this.swipeEndX < -100 && this.prev();
  }

  _initListeners() {
    super._initListeners();
    this.container.addEventListener('touchstart', this.swipeStart.bind(this));
    this.container.addEventListener('touchend', this.swipeEnd.bind(this));
  }
};

export default SwipeCarousel;