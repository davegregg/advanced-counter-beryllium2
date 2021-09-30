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

const countView = document.querySelector("#count")
let count = 0

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




