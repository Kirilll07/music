let menuToggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

let menuToggle2 = document.querySelector('.toggle2');
let nav2 = document.querySelector('.nav2');

let menuToggle3 = document.querySelector('.toggle3');
let nav3 = document.querySelector('.nav3');

menuToggle.onclick = function() {
  if (last.pause && last !== this)
  last.pause()
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}

menuToggle2.onclick = function() {
  if (last.pause && last !== this)
  last.pause()
    menuToggle2.classList.toggle('active');
    nav2.classList.toggle('active');
}

menuToggle3.onclick = function() {
  if (last.pause && last !== this)
      last.pause()
    menuToggle3.classList.toggle('active');
    nav3.classList.toggle('active');
}

let last = {};
document.querySelectorAll('audio').forEach(function(el){
  el.addEventListener('playing', function(){
    if (last.pause && last !== this)
      last.pause()
    last = this
  }); 
})