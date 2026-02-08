let timerEle = document.getElementById("timer");
let quoteDisplayEle = document.getElementById("quoteDisplay");
let resultEle = document.getElementById("result");
let quoteInputEle = document.getElementById("quoteInput");
let submitBtnEle = document.getElementById("submitBtn");
let resetBtnEle = document.getElementById("resetBtn");
let spinnerEle = document.getElementById("spinner");

let contentQuote = null;
let url = "https://apis.ccbp.in/random-quote/";
let options = {
    method: "GET"
};
spinnerEle.classList.remove("d-none");
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        contentQuote = jsonData.content;
        //console.log("jsonDataContent:", contentQuote);
        quoteDisplayEle.textContent = contentQuote;
        spinnerEle.classList.add("d-none");
    });

let intervalId;
let timeInterval;

function timerStart() {
    timeInterval = 0;
    timerEle.textContent = "0 seconds";
    intervalId = setInterval(function() {
        timeInterval = timeInterval + 1;
        timerEle.textContent = timeInterval + " seconds";
    }, 1000);
}
timerStart();

submitBtnEle.addEventListener("click", function() {
    let textareaInputValue = quoteInputEle.value;
    if (textareaInputValue !== "") {
        if (textareaInputValue === contentQuote) {
            clearInterval(intervalId);
            resultEle.textContent = "You typed in" + timeInterval + "seconds";
        } else {
            resultEle.textContent = "You typed incorrect sentence";
        }
    }
});

resetBtnEle.addEventListener("click", function() {
    clearInterval(intervalId);
    quoteInputEle.value = " ";
    resultEle.textContent = "";
    timerStart();
});