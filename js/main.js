let closeBtn = document.getElementById('closeBtn');
let menuBtn = document.getElementById('menuBtn');
let headerNav = document.getElementById('headerNav');

menuBtn.addEventListener('click', function(){
  headerNav.classList.add('show');
})
closeBtn.addEventListener('click', function(){
  headerNav.classList.remove('show');
})