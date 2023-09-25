var btnOpen = document.querySelector(".open-model")
var model = document.querySelector(".model")
var iconClose = document.querySelector(".model_header i")
var btnClose = document.querySelector(".model_footer button")
function toggleModel(e){
    model.classList.toggle("hide")
}
btnOpen.addEventListener("click", toggleModel)
btnClose.addEventListener("click", toggleModel)
iconClose.addEventListener("click", toggleModel)
model.addEventListener("click", function(e){
    if(e.target == e.currentTarget){
        toggleModel();
    }
})