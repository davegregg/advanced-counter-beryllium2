const ImperativeProceduralApproach = function () {

  /* 
    The Imperative-Procedural Paradigm Approach:
      - "Imperative" means "write commands"
      - "Procedural" means "write functions"
      Very few rules for organizing code. Simply use function statements, IF statements, FOR statements, etc., as normal. This approach tends toward unorganized code, except in small quantities.
      
      This is basically how you have been writing code. Most developers think of it as the style of code we will normally write when we aren't DELIBERATELY following (or FORCE to follow) a stricter approach to code organization, like the Object-Oriented or Functional approaches.
      
      This approach is best used in small doses WITHIN functions/methods.
  */

  const countView = document.querySelector("#count")
  let count = 0
  let timerId = null

  function render () {
    countView.replaceChildren(count)
    console.log(count)
  }

  function next () {
    count += 1
    render()
  }

  function prev () {
    count -= 1
    render()
  }

  function reset () {
    count = 0
    render()
  }

  function skipForward () {
    count += 10
    render()
  }

  function skipBackward () {
    count -= 10
    render()
  }

  function startTimer () {
    if (timerId !== null) {
      stopTimer() // We don't want it to be possible for two timers to be running at the same time for the same counter. So we will cancel a previous timer before starting a new one.
    }
    
    next() // Increment the count now, so that the user doesn't have to wait one full second before seeing proof that the button has done something.

    timerId = window.setInterval(() => {
      count += 1
      render()
    }, 1000)
  }

  function stopTimer () {
    clearInterval(timerId)
  }


  // CLICK EVENT LISTENER ####################################

  document
    .querySelector("#controls")
    .addEventListener("click", event => {
      const clickedElement = event.target

      switch (clickedElement.id) {
        case "next": next()
        break

        case "prev": prev()
        break

        case "reset": reset()
        break

        case "skip-forward": skipForward()
        break

        case "skip-backward": skipBackward()
        break

        case "start-timer": startTimer()
        break

        case "stop-timer": stopTimer()
        break
      }
    })

}