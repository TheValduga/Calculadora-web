const previousDisplay = document.getElementById("previous");
const currentDisplay = document.getElementById("current");
const buttons = document.querySelectorAll("#buttons_container button");

class calculator {
   constructor(previousDisplay,currentDisplay) {
      this.previousDisplay = previousDisplay;
      this.currentDisplay = currentDisplay;
      this.currentOperation = '';
   }

   addDigit(digit) {
      if(digit === ',' && this.currentDisplay.innerText.includes(',')) {
         return;
      }
      this.currentOperation = digit;
      this.updateScreen();
   }

   processOperation(operation) {
      let operationValue;
      const previous = +this.previousDisplay.innerText;
      const current = +this.currentDisplay.innerText;

      switch(operation) {
         case '+':
            operationValue = previous + current;
            this.updateScreen
      }
   }

   updateScreen(
      operationsValue = null, 
      operation = null, 
      current = null, 
      previous = null
      ) {
   this.currentDisplay.innerText += this.currentOperation;
   }
}

const calc = new calculator(previousDisplay,currentDisplay)

buttons.forEach((btn) => {
   btn.addEventListener("click",(event) => {
      const value = event.target.innerText;
      
      if (+value >= 0 || value === ',') {
         calc.addDigit(value);
      } else {
         calc.processOperation(value);
      }
   }) 
   
})