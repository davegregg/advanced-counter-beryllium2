/* The Advanced Counter object should have the following property and methods:

  count: a number which represents the current count, initial value 0

  render(): when this function runs, the DOM will be updated to display the current state of the counter

  next(): increment the counter by 1, then render()

  prev(): decrement the counter by 1, then render()

  reset(): reset the counter to 0, then render()

  skipForward(): increment the counter by 10, then render()

  skipBackward(): increment the counter by 10, then   render()

  startTimer(): start a timer and render() every second

  stopTimer(): stop the timer, then render()
*/

/*
  Object-Oriented Programming:
    - Objects & Methods: Bundle data and related functions together (encapsulation).
    - Polymorphism: ...

  "Method": a function which is a property on an object.
  
  "this": is the context in which the function was CALLED - not necessarily the context in which it was written.
  
  What is the "calling context"? It is (usually) whatever is to the left of the dot when you call the function: counter.next() - in this case, the counter object.
*/

const counter = {
  count: 0,
  countView: document.querySelector("#count"),
  timerId: null,

  render: function render () {
    this.countView.replaceChildren(this.count)
    console.log(this.count)
  },

  next: function () {
    this.count += 1
    this.render()
  },

  prev: function prev () {
    this.count -= 1
    this.render()
  },
  
  reset: function reset () {
    this.count = 0
    this.render()
  },
  
  skipForward: function skipForward () {
    this.count += 10
    this.render()
  },
  
  skipBackward: function skipBackward () {
    this.count -= 10
    this.render()
  },

  startTimer: function startTimer () {
    this.timerId = window.setInterval(() => this.next(), 1000)
  },

  stopTimer: function stopTimer () {
    window.clearInterval(this.timerId)
  },
}


const newsletterCounter = {
  count: 500,
  countView: document.querySelector("#newsletter-count"),

  render: counter.render,
  next: counter.next,
  prev: counter.prev,
  reset: counter.reset,
  skipForward: counter.skipForward,
  skipBackward: counter.skipBackward,
}



document
  .querySelector("#controls")
  .addEventListener("click", event => {
    const clickedElement = event.target

    switch (clickedElement.id) {
      case "next": counter.next()
      break

      case "prev": counter.prev()
      break

      case "reset": counter.reset()
      break

      case "skip-forward": counter.skipForward()
      break

      case "skip-backward": counter.skipBackward()
      break

      case "start-timer": counter.startTimer()
      break

      case "stop-timer": counter.stopTimer()
      break
    }
  })
