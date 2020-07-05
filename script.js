const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5
const cls = ['theme-1', 'theme-2', 'theme-3']
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
          if (cancel ==0) {


            document.getElementById("text").innerHTML = 'Breathe Out'
            container.className = 'container shrink'
          }
        }, holdTime)
    }, breatheTime)
  }
}
function buttons() {
    document.getElementById("theme-1-btn").addEventListener('click', function() {
    document.body.classList.remove(...cls);
    document.body.classList.add('theme-1');
    document.getElementById("video").src = "darkSkies.mp4";

  })
    document.getElementById("theme-2-btn").addEventListener('click', function() {
      document.body.classList.remove(...cls);
      document.body.classList.add('theme-2');
      document.getElementById("video").src = "water.mp4";
    })
    document.getElementById("theme-3-btn").addEventListener('click', function() {
      document.body.classList.remove(...cls);
      document.body.classList.add('theme-3');
      document.getElementById("video").src = "auroraBorealis.mp4";

    })
    document.getElementById("breathe-btn").addEventListener('click', function() {
      cancel = 0;

      //quotes[Math.floor(Math.random()*quotes.length)];
    })
    document.getElementById("quotes-btn").addEventListener('click', function() {
      cancel = 1;
      document.getElementById("text").innerHTML = quotes[Math.floor(Math.random()*quotes.length)];

      //quotes[Math.floor(Math.random()*quotes.length)];
    })
    document.getElementById("text").addEventListener('click', function() {
      if (cancel == 1) {
        document.getElementById("text").innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
      }
    })
}

setInterval(breatheAnimation, totalTime)
buttons()
