var auto = false

// TRAFFIC LIGHT
const redLight = document.getElementsByClassName("redTrafficLight")[0]
const yellowLight = document.getElementsByClassName("yellowTrafficLight")[0]
const greenLight = document.getElementsByClassName("greenTrafficLight")[0]

// SELECT BUTTONS
const redButton = document.getElementsByClassName("redButton")[0]
const yellowButton = document.getElementsByClassName("yellowButton")[0]
const greenButton = document.getElementsByClassName("greenButton")[0]

// AUTO BUTTON
const autoButton = document.getElementsByClassName("autoButton")[0]

// SET DEFALT AUTOMATIC TIME
var redTime = 3
var yellowTime = 1
var greenTime = 5

// RED BUTTON
function redButtonClick() { //Red button has clicked
	if (auto == false) {
		setRedLightOn()
		setRedButtonColor()
	} else {
		setAutoFalse()
		redButtonClick()
	}	
}


function setRedButtonColor() { // Set red button color
	redButton.style.background = "red"
	yellowButton.style.background = "#464600"
	greenButton.style.background = "#003e00"
}

greenButtonClick()

// YELLOW BUTTON
function yellowButtonClick() { //Yellow button has clicked
	if (auto == false) {
		setYellowLightOn()
		setYellowButtonColor()
	} else {
		setAutoFalse()
		yellowButtonClick()
	}
}

function setYellowButtonColor() { //Set yellow button color
	redButton.style.background = "#5a0000"
	yellowButton.style.background = "yellow"
	greenButton.style.background = "#003e00"
}

// GREEN BUTTON
function greenButtonClick() { //Green button has clicked
	if (auto == false) {
		setGreenLightOn()
		setGreenButtonColor()
	} else {
		setAutoFalse()
		greenButtonClick()
	}
	setGreenButtonColor()
}

function setGreenButtonColor() { // Set green button color
	redButton.style.background = "#5a0000"
	yellowButton.style.background = "#464600"
	greenButton.style.background = "#00ca00"
}

// AUTO BUTTON 
function autoButtonClick() { //Auto button has clicked
	if (auto == false) {
		setAutoTrue()
	} else if (auto == true) {
		setAutoFalse()
	}
}

function setAutoTrue() { //Set automatic mode TRUE
	auto = true
	autoButton.style.background = "#89de7d"
	startAutoCicle()
	redButton.style.background = "#5a0000"
	yellowButton.style.background = "#464600"
	greenButton.style.background = "#003e00"

}

function setAutoFalse() { //set automatic mode FALSE
	auto = false
	autoButton.style.background = "#de7d7d"
	greenButtonClick()
}

// AUTO FUNCITON

function startAutoCicle() { //start automatic semaphore
	// Capture time data
	inputTimeRed = document.querySelector("input.inputTimeRed").value;
	inputTimeYellow = document.querySelector("input.inputTimeYellow").value;
	inputTimeGreen = document.querySelector("input.inputTimeGreen").value;

	if (inputTimeRed.length > 0) {
		redTime = Number(inputTimeRed)
	}

	if (inputTimeYellow.length > 0) {
		yellowTime = Number(inputTimeYellow)
	}

	if (inputTimeGreen.length > 0) {
		greenTime = Number(inputTimeGreen)
	}

	const sleep = time => new Promise(resolve => { // Create function sleep
		setTimeout(resolve, time)
	})

	const automaticCicle = async() => { // Start semaphore sicle
		while (auto === true){
			setGreenLightOn()
			await sleep(greenTime * 1000)
			if (auto === false) {
				break
			}
			setYellowLightOn()
			await sleep(yellowTime * 1000)
			if (auto === false) {
				break
			}
			setRedLightOn()
			await sleep(redTime * 1000)
			if (auto === false) {
				break
			}
		}
	}
	automaticCicle()
}

// SEMAPHORE STATE

function setRedLightOn() { //Set red light on
	redLight.style.background = "red"
	yellowLight.style.background = "#464600"
	greenLight.style.background = "#003e00"
}

function setYellowLightOn() { //Set yellow light on
	redLight.style.background = "#5a0000"
	yellowLight.style.background = "yellow"
	greenLight.style.background = "#003e00"
}

function setGreenLightOn() { //Set green light on
	redLight.style.background = "#5a0000"
	yellowLight.style.background = "#464600"
	greenLight.style.background = "#00ca00"
}