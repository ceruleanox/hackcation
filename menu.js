
const cls = ['water', 'aurora', 'outerspace']


function buttons() {
    document.getElementById("water-btn").addEventListener('click', function() {
      document.body.classList.remove(...cls);
      document.body.classList.add('water');
      document.getElementById("video").src = "water.mp4";
    })
    document.getElementById("aurora-btn").addEventListener('click', function() {
      document.body.classList.remove(...cls);
      document.body.classList.add('aurora');
      document.getElementById("video").src = "auroraBorealis.mp4";
    })
    document.getElementById("outerspace-btn").addEventListener('click', function() {
        document.body.classList.remove(...cls);
        document.body.classList.add('outerspace');
        document.getElementById("video").src = "darkSkies.mp4";
//      cancel = 0;
      //quotes[Math.floor(Math.random()*quotes.length)];
    })

    /*
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
*/
}


buttons()
