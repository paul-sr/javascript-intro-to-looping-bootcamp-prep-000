function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
      console.log("i is 1")
    } else {
      console.log(i)
      array.push("I am ${i} strange loops.")
    }
  }
  return array
}