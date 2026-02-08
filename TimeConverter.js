let hoursInputEle = document.getElementById("hoursInput");
let minutesInputEle = document.getElementById("minutesInput");
let convertBtnEle = document.getElementById("convertBtn");
let timeInSecondsEle = document.getElementById("timeInSeconds");
let errorMsgEle = document.getElementById("errorMsg");

let hoursErrorMsg = "Please enter a valid number of Hours..";
let minuteErrorMsg = "Please enter a valid number of Minutes..";

//let userEnteredHoursInput = hoursInputEle.value;
//let userEnteredMinutesInput = minutesInputEle.value;

function validatingInputs() {
    let userEnteredHoursInput = hoursInputEle.value;
    let userEnteredMinutesInput = minutesInputEle.value;
    if (userEnteredHoursInput === "") {
        errorMsgEle.textContent = hoursErrorMsg;
        timeInSecondsEle.textContent = "";
        console.log(userEnteredHoursInput);
    } else if (userEnteredMinutesInput === "") {
        errorMsgEle.textContent = minuteErrorMsg;
        timeInSecondsEle.textContent = "";
        console.log(userEnteredMinutesInput);
    } else {
        let userEnteredHoursInputInt = parseInt(userEnteredHoursInput);
        let userEnteredMinutesInputInt = parseInt(userEnteredMinutesInput);
        let convertedTime = ((userEnteredHoursInputInt * 3600) + (userEnteredMinutesInputInt * 60));
        console.log("converted time", convertedTime);
        errorMsgEle.textContent = "";
        timeInSecondsEle.style.display = "block";
        timeInSecondsEle.textContent = convertedTime + "s";
    }
}
convertBtnEle.addEventListener("click", validatingInputs);