const previousDisplay = document.getElementById("previous")
const currentDisplay = document.getElementById("current")
const buttons = querySelector("#buttons button")

class calculator {

}

buttons.forEach((btn) => {
   btn.addEventListener("click",(e) => {
    const value = e.target.innerText;
    if (+value >= 0 || value === ',')
   }) 
})