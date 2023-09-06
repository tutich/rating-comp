const cont = document.querySelectorAll(".container");
const sub = document.querySelector(".sub")
const thank_section = document.querySelector(".thank_section");
const rating_section = document.querySelector(".rating_section");
const rate_point = document.getElementById("rate");

let rate = null;

cont.forEach(  function(rating){
rating.addEventListener("click", function(e) {
const active = document.querySelector(".checked");
if(active) {
    active.classList.remove("checked");
}
const card = e.target;
card.classList.add("checked");
rate = e.target.innerText;
});
});


sub.addEventListener("click", function(){
   if(rate) {
    rate_point.innerText = rate;
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
   }
    
});