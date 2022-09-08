const previousDisplay = document.getElementById("previous")
const currentDisplay = document.getElementById("current")
// const buttons = {...document.getElementsByTagName("button")}
const buttons = document.querySelectorAll("#buttons_container button")
console.log(buttons);

class calculator {

}

buttons.forEach((btn) => {
   btn.addEventListener("click",(event) => {
   const value = event.target.innerText;
   console.log(value);
   /*if (+value >= 0 || value === ',') {

   }*/
   }) 
   
})