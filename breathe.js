const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5
var cancel = 0;

breatheAnimation()

function breatheAnimation() {
  if (cancel == 0) {
    document.getElementById("text").innerHTML = 'Breathe In'
    container.className = 'container grow'

    setTimeout(() => {
      if (cancel == 0) {
        document.getElementById("text").innerHTML = 'Hold'
      }
        setTimeout(() => {
          if (cancel == 0) {
            document.getElementById("text").innerHTML = 'Breathe Out'
            container.className = 'container shrink'
          }
        }, holdTime)
    }, breatheTime)
  }
}

setInterval(breatheAnimation, totalTime)

