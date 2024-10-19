const inputElt = document.getElementById("number");
const convertBn = document.getElementById("convert-btn");
const outputElt = document.getElementById("output");


const romanNumeralConverter = () => {
  const input = parseInt(inputElt.value);
  if( isNaN(input) || input === 0) {
    outputElt.textContent = "Please enter a valid number";
  } 
  else if(input < 1) {
    outputElt.textContent = "Please enter a number greater than or equal to 1";
  }
  else if(input > 3999) {
    outputElt.textContent = "Please enter a number less than or equal to 3999";
  }
  else {
     outputElt.textContent = convertToRoman(input); 
  }
  inputElt.value = "";
}

const convertToRoman = (num) => {
  const romanNum = [
       ["M", 1000],
       ["CM", 900],
       ["D", 500],
       ["CD", 400],
       ["C", 100],
       ["XC", 90],
       ["L", 50],
       ["XL", 40],
       ["X", 10],
       ["IX", 9],
       ["V", 5],
       ["IV", 4],
       ["I", 1]
  ];
  let result = "";

  for (let [roman, value] of romanNum) {
       while(num >= value) {
            result += roman;
            num -= value;
       }
  }
  return result;
}
convertBn.addEventListener("click", romanNumeralConverter)

inputElt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    romanNumeralConverter();
  }
});