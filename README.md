# Advanced Counter: OOP vs FP vs Imperative Programming

The Advanced Counter should have the following:

  + `count`: a number which represents the current `count`, initial value `0`

  + `render()`: when this function runs, the DOM will be updated to display the current state of the `count`

  + `next()`: increment the `count` by `1`, then `render()`

  + `prev()`: decrement the `count` by `1`, then `render()`

  + `reset()`: reset the `count` to `0`, then `render()`

  + `skipForward()`: increment the `count` by `10`, then `render()`

  + `skipBackward()`: increment the `count` by `10`, then `render()`

  + `startTimer()`: start a timer which increments and calls `render()` once every second

  + `stopTimer()`: cancel the timer
