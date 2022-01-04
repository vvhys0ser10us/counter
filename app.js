function getElement(element) {
  const selection = document.querySelector(element)
  return selection
}

class Counter {
  constructor(element, initialValue) {
    this.value = element.querySelector('.value')
    this.value.textContent = initialValue
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.resetBtn = element.querySelector('.reset')

    // this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)

    this.increaseBtn.addEventListener('click', () => {
      this.value.textContent++
    })
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset)
  }

  // increase() {
  //   this.value.textContent++
  // }
  decrease() {
    this.value.textContent--
  }
  reset() {
    this.value.textContent = 0
  }
}

const counter1 = new Counter(getElement('.counter-1'), 0)
const counter2 = new Counter(getElement('.counter-2'), 0)
