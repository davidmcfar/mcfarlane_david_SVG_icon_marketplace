
(() => {
  console.log("hello from JS!");

const axe = document.querySelector('#axe');
	  bat = document.querySelector('#bat');
	  blackcat = document.querySelector('#blackcat');
	  ghost = document.querySelector('#ghost');
	  mummy = document.querySelector('#mummy');
	  pumpkin = document.querySelector('#pumpkin');
	  scythe = document.querySelector('#scythe');
	  spider = document.querySelector('#spider');
	  tomb = document.querySelector('#tomb');
	  witchhat = document.querySelector('#witchhat');

function logSVG() {
  console.log(this.id);
}

function toggleSelected() {
this.classList.toggle("selected");
}


axe.addEventListener("click", toggleSelected);
bat.addEventListener("click", toggleSelected);
blackcat.addEventListener("click", toggleSelected);
ghost.addEventListener("click", toggleSelected);
mummy.addEventListener("click", toggleSelected);
pumpkin.addEventListener("click", toggleSelected);
scythe.addEventListener("click", toggleSelected);
spider.addEventListener("click", toggleSelected);
tomb.addEventListener("click", toggleSelected);
witchhat.addEventListener("click", toggleSelected);

axe.addEventListener("click", logSVG);
bat.addEventListener("click", logSVG);
blackcat.addEventListener("click", logSVG);
ghost.addEventListener("click", logSVG);
mummy.addEventListener("click", logSVG);
pumpkin.addEventListener("click", logSVG);
scythe.addEventListener("click", logSVG);
spider.addEventListener("click", logSVG);
tomb.addEventListener("click", logSVG);
witchhat.addEventListener("click", logSVG);
})();

