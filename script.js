let leaf1 = document.getElementById("leaf1");
let leaf2 = document.getElementById("leaf2");
let farMountain = document.getElementById("farMountain");
let nearMountain = document.getElementById("nearMountain");
let duck = document.getElementById("duck");
let boat = document.getElementById("boat");
let water = document.getElementById("water");
let stars = document.getElementById("stars");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    let maxScroll;
    if (window.innerWidth < 768) {
        maxScroll = 250; 
    } else {
        maxScroll = 900;
        water.style.bottom = value* 0.10 + 'px';
    }
    if (value>maxScroll) {
        value = maxScroll;
    }
    leaf1.style.left = value * 1.2 + 'px';
    leaf2.style.left = -value * 1.2 + 'px';
    farMountain.style.bottom = value * -0.50 + 'px';
    nearMountain.style.bottom = value * -0.30 + 'px';
    duck.style.left = -value * 0.1 + 'px';
    stars.style.top = value * 0.1 + 'px';
})