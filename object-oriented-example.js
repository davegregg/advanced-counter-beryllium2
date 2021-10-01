const ObjectOrientedApproach = function () {

/*
  Object-Oriented Programming (a.k.a. "Message-Oriented Programming"):
    - POLYMORPHISM: Similar objects share functions or at least function names in common, without sharing data - a common "interface."
      + "Message-oriented" means "when you send the same message to two objects, they respond differently." For example:
        When I tell the neighborhood kids it is time to go home, I have provided the same instruction to each of them, but they each interpret what that means for them. Each will go to their OWN home, taking whatever distinct path they need to accomplish that task.
    - ENCAPSULATION (Objects with Methods): Bundle data and related functions together.
    

  "Method": a function which is also a property on an object.
  
  "this": is the context in which the function was CALLED - not necessarily the context in which it was written.
  
  What is the "calling context"? It is (usually) whatever is to the left of the dot when you call the function.

  For example, when running `counter.next()`, the "counter" object will be the meaning of `this` inside next(), because "counter" is the execution context this time.

  And when running `advertisingCounter.next()`, the "advertisingCounter" object will be the meaning of `this` inside next(), because "advertisingCounter" is the execution context this time.
*/

/*
  // Here is our original Object-Oriented approach from Thursday.
  // We are creating these two different counter objects manually:

  const counter = {
    count: 0,
    countView: document.querySelector("#count"),
    timerId: null,

    render: function () {
      this.countView.replaceChildren(this.count)
      console.log(this.count)
    },

    next: function () {
      this.count += 1
      this.render()
    },

    prev: function () {
      this.count -= 1
      this.render()
    },
    
    reset: function () {
      this.count = 0
      this.render()
    },
    
    skipForward: function () {
      this.count += 10
      this.render()
    },
    
    skipBackward: function () {
      this.count -= 10
      this.render()
    },

    startTimer: function () {
      this.stopTimer()
      this.timerId = window.setInterval(this.next.bind(this), 1000)
    },

    stopTimer: function () {
      window.clearInterval(this.timerId)
    },
  }

  const newsletterCounter = {
    count: 500,
    countView: document.querySelector("#newsletter-count"),

    render: counter.render,
    next: function () {
      this.count += 2
      this.render()
    },
    prev: counter.prev,
    reset: counter.reset,
    skipForward: counter.skipForward,
    skipBackward: counter.skipBackward,
    startTimer: counter.startTimer,
    stopTimer: counter.stopTimer,
  }
*/

// A Class Constructor Function allows you to
// automate the building of new counter objects!
function Counter (element, startingCount = 0) {
  // this = {}

  this.count = startingCount
  this.countView = element
  this.timerId = null

  this.render = function () {
    this.countView.replaceChildren(this.count)
    console.log(this.count)
  }

  this.render()


  this.next = () => {
    this.count += 1
    this.render()
  }

  this.prev = function () {
    this.count -= 1
    this.render()
  }
  
  this.reset = function () {
    this.count = 0
    this.render()
  }
  
  this.skipForward = function () {
    this.count += 10
    this.render()
  }
  
  this.skipBackward = function () {
    this.count -= 10
    this.render()
  }

  this.startTimer = function () {
    this.stopTimer()
    this.next()
    // this.timerId = window.setInterval(() => this.next(), 1000)
    this.timerId = window.setInterval(this.next.bind(this), 1000)
  }

  this.stopTimer = function () {
    window.clearInterval(this.timerId)
  }

  // return this
}



const countElement = document.querySelector("#count")

// INSTANCE of Counter class    = Counter CLASS CONSTRUCTOR
// ----------------------------   ------------------------------- 
// const animationCounter       = new Counter(countElement)
const carInsuranceAdvertCounter = new Counter(countElement, -100)
// const newsletterCounter      = new Counter(countElement, 50)


// CLICK EVENT LISTENER ####################################
document
  .querySelector("#controls")
  .addEventListener("click", event => {
    const clickedElement = event.target

    switch (clickedElement.id) {
      case "next": carInsuranceAdvertCounter.next()
      break

      case "prev": carInsuranceAdvertCounter.prev()
      break

      case "reset": carInsuranceAdvertCounter.reset()
      break

      case "skip-forward": carInsuranceAdvertCounter.skipForward()
      break

      case "skip-backward": carInsuranceAdvertCounter.skipBackward()
      break

      case "start-timer": carInsuranceAdvertCounter.startTimer()
      break

      case "stop-timer": carInsuranceAdvertCounter.stopTimer()
      break
    }
  })



}