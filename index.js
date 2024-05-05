/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


btnEl = document.getElementById("btn")
inputEl = document.getElementById("input")
lengthEl = document.getElementById("length-el")
volumeEl = document.getElementById("volume-el")
massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGalon = 0.264
const kilogramToPound = 2.204

btnEl.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value)
    lengthEl.innerHTML = `
    <p>
    ${baseValue} meter = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue / meterToFeet}
    </p>
    `
    volumeEl.innerHTML = `
    <p>
    ${baseValue} meter = ${baseValue * literToGalon} feet | ${baseValue} feet = ${baseValue / literToGalon}
    </p>
    `
    massEl.innerHTML = `
    <p>
    ${baseValue} meter = ${baseValue * kilogramToPound} feet | ${baseValue} feet = ${baseValue / kilogramToPound}
    </p>
    `
})

