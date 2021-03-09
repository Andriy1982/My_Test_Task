"use strict"

const sliderRef = document.querySelector('.slider')
const sliderWrapper = sliderRef.querySelector('.slider__wrapper') 
const sliderItems = sliderRef.querySelectorAll('.slider__item')
const sliderControlLeft = sliderRef.querySelector('.slider__control_left')
const sliderControlRight = sliderRef.querySelector('.slider__control_right')
const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width)
const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width)
let positionLeftItem = 0 
 let transform = 0 
let step = itemWidth / wrapperWidth * 100
const items = [];

sliderItems.forEach(function (item, index) {
  items.push({ item: item, position: index, transform: 0 });
});

const position = {
    getItemMin: function () {
      let indexItem = 0;
      items.forEach(function (item, index) {
        if (item.position < items[indexItem].position) {
          indexItem = index;
        }
      });
      return indexItem;
    },
    getItemMax: function () {
      var indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position > items[indexItem].position) {
            indexItem = index;
          }
        });
      return indexItem;
    },
    getMin: function () {
      return items[position.getItemMin()].position;
    },
    getMax: function () {
      return items[position.getItemMax()].position;
    }
  }

  const transformItem = function (direction) {
    let nextItem;
    if (direction === 'right') {
      positionLeftItem++;
      if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
        nextItem = position.getItemMin();
        items[nextItem].position = position.getMax() + 1;
        items[nextItem].transform += items.length * 100;
        items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
      }
      transform -= step;
    }
    if (direction === 'left') {
      positionLeftItem--;
      if (positionLeftItem < position.getMin()) {
        nextItem = position.getItemMax();
        items[nextItem].position = position.getMin() - 1;
        items[nextItem].transform -= items.length * 100;
        items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
      }
      transform += step;
    }
    sliderWrapper.style.transform = 'translateX(' + transform + '%)';
  }

  const cycle = function (direction) {
     setInterval(function () {
      transformItem(direction);
    }, 4000);
  }

  cycle('right')

sliderControlLeft.addEventListener('click', (e) =>  {
    e.preventDefault()
     transformItem('left')} )
sliderControlRight.addEventListener('click', (e) =>  {
    e.preventDefault()
    transformItem('right') })