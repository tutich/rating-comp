const cont = document.querySelectorAll(".container");
const sub = document.querySelector(".sub")
const thank = document.querySelector(".thank-you");

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
    console.log("container")
})