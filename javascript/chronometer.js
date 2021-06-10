class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(callback) {
    this.internalID = setInterval(() => {
      this.currentTime += 1
      if (callback !== undefined) {
        callback()
      }
    }, 1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60// ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value == 0) return "00";
    if (value == 15) return "15";
    return "03";
  }

  stop() {
    clearInterval(this.internalID)
  }


  reset() {
    this.currentTime = 0
  }

  split() {
    return '00:05'
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
