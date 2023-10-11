let input = document.getElementById("toDoInp")
let button = document.getElementById("butt")
let appendPar = document.querySelector(".newToDo")
let oldPar = document.getElementById("newPar")
 function noviParagraf(){
    let vrednost = input.value
    let newPar = document.createElement("p")
    newPar.textContent = vrednost
    newPar.classList.add("newPar2")
    appendPar.insertBefore(newPar, appendPar.firstChild)
    newPar.onclick = function (){
      removePar(this)
    }
    function removePar(par){
      appendPar.removeChild(par)
    }
    input.value = ""
 }
 button.addEventListener("click", noviParagraf)
 input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      noviParagraf();}})
