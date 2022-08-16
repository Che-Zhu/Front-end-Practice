const meterToFeetRate = 3.281
const literToGallonRate = 0.264
const kilogramToPoundRate = 2.204

const lengthPara = document.getElementById("length")
const volumePara = document.getElementById("volume")
const mass = document.getElementById("mass")

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
    let inputValue = userInput.value
    inputValue = Number(inputValue)

    const feetValue = meterToFeet(inputValue).toFixed(3)
    const meterValue = feetToMeter(inputValue).toFixed(3)

    const gallonValue = literToGallon(inputValue).toFixed(3)
    const literValue = gallonToLiter(inputValue).toFixed(3)

    const poundValue = kilogramToPound(inputValue).toFixed(3)
    const kilogramValue = poundToKilogram(inputValue).toFixed(3)

    lengthPara.textContent = `${inputValue} meters = ${feetValue} feet | ${inputValue} feet = ${meterValue} meters`
    volumePara.textContent = `${inputValue} liters = ${gallonValue} gallons | ${inputValue} gallons = ${literValue} liters`
    mass.textContent = `${inputValue} kilos = ${poundValue} pounds | ${inputValue} pounds = ${kilogramValue} kilos`
})


function meterToFeet(value) {
    return value * meterToFeetRate
}

function feetToMeter(value) {
    return value / meterToFeetRate
}

function literToGallon(value) {
    return value * literToGallonRate
}

function gallonToLiter(value) {
    return value / literToGallonRate
}

function kilogramToPound(value) {
    return value * kilogramToPoundRate
}

function poundToKilogram(value) {
    return value / kilogramToPoundRate
}
