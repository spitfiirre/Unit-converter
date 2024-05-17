
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const unitsOne = document.getElementById("units-one")
const unitsTwo = document.getElementById("units-two")
const unitsThree = document.getElementById("units-three")

convertBtn.addEventListener("click", function() {
    
    unitsOne.innerHTML =
    `<p>
     ${inputEl.value} meters = ${(inputEl.value*3.2808).toFixed(3)} feet /  ${inputEl.value} feet = ${(inputEl.value/3.2808).toFixed(3)} meters
     </p>
    `
  unitsTwo.innerHTML = 
  `<p>
    ${inputEl.value} liters = ${(inputEl.value*0.264172).toFixed(3)} gallons /  ${inputEl.value} gallons = ${(inputEl.value/0.264172).toFixed(3)} liters
    </p>
  `
  unitsThree.innerHTML = 
  `<p>
    ${inputEl.value} kilos = ${(inputEl.value*2.20462).toFixed(3)} pounds /  ${inputEl.value} pounds = ${(inputEl.value/2.20462).toFixed(3)} kilos
    </p>
  `
  })
