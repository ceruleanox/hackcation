const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5
const cls = ['theme-1', 'theme-2', 'theme-3']

breatheAnimation()
changeTheme()
function breatheAnimation() {
    text.innerHTML = 'Breathe In'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}
function changeTheme() {
    document.getElementById("theme-1-btn").addEventListener('click', function() {
    document.body.classList.remove(...cls);
    document.body.classList.add('theme-1');
    document.getElementById("video").src = "darkSkies.mp4"

  })
    document.getElementById("theme-2-btn").addEventListener('click', function() {
      document.body.classList.remove(...cls);
      document.body.classList.add('theme-2');
      document.getElementById("video").src = "water.mp4"
    })
    document.getElementById("theme-3-btn").addEventListener('click', function() {
      document.body.classList.remove(...cls);
      document.body.classList.add('theme-3');
      document.getElementById("video").src = "auroraBorealis.mp4"

    })
}

setInterval(breatheAnimation, totalTime)
