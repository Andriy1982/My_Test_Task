"use strict"

const sliderRef = document.querySelector('.slider') // основный элемент блока
const sliderWrapper = sliderRef.querySelector('.slider__wrapper') // обертка для .slider-item
const sliderItems = sliderRef.querySelectorAll('.slider__item') // элементы (.slider-item)
// _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
 const sliderControlLeft = sliderRef.querySelector('.slider__control_left') // кнопка "LEFT"
 const sliderControlRight = sliderRef.querySelector('.slider__control_right') // кнопка "RIGHT"
const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width) // ширина обёртки
const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width) // ширина одного элемента
let positionLeftItem = 0 // позиция левого активного элемента
 let transform = 0 // значение трансформации .slider_wrapper
let step = itemWidth / wrapperWidth * 100 // величина шага (для трансформации)

const items = [];

// наполнение массива элементами .slider__item
sliderItems.forEach(function (item, index) {
  items.push({ item: item, position: index, transform: 0 });
});

console.log(items);
// console.log(itemWidth);
// console.log( wrapperWidth);

const position = {
    getItemMin: function () {
      let indexItem = 0;
      items.forEach(function (item, index) {
        if (item.position < items[indexItem].position) {
          indexItem = index;
        }
      });
      console.log( "getItemMin",indexItem);
      return indexItem;
    },
    getItemMax: function () {
      var indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position > items[indexItem].position) {
            indexItem = index;
          }
        });
        console.log( "getItemMax",indexItem);
      return indexItem;
    },
    getMin: function () {
        console.log("getMin", items[position.getItemMin()].position);
      return items[position.getItemMin()].position;
    },
    getMax: function () {
        console.log("getMax", items[position.getItemMin()].position);
      return items[position.getItemMax()].position;
    }
  }

  const transformItem = function (direction) {
    let nextItem;
    if (direction === 'right') {
      positionLeftItem++;
      console.log("fff", positionLeftItem + wrapperWidth / itemWidth - 1);
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
    console.log(items);
    sliderWrapper.style.transform = 'translateX(' + transform + '%)';
  }

  const cycle = function (direction) {
    // if (!config.isCycling) {
    //   return;
    // }
     setInterval(function () {
      transformItem(direction);
    }, 1000);
  }

//   cycle('right')

sliderControlLeft.addEventListener('click', (e) =>  {
    e.preventDefault()
     transformItem('left')} )
sliderControlRight.addEventListener('click', (e) =>  {
    e.preventDefault()
    transformItem('right') })