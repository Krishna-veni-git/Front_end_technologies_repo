let searchInputEle = document.getElementById("searchInput");
let searchResultsEle = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner");

function createAndAppendBooks(result) {
    searchResultsEle.textContent = "";
    let {
        imageLink,
        author
    } = result;
    console.log("create and append function");
    let eachItemContainerEle = document.createElement("div");
    let imageEle = document.createElement("img");
    imageEle.src = imageLink;
    eachItemContainerEle.appendChild(imageEle);

    let paragraphEle = document.createElement("p");
    paragraphEle.textContent = author;
    eachItemContainerEle.appendChild(paragraphEle);
    searchResultsEle.appendChild(eachItemContainerEle);
}


function displayResults(searchResults) {
    console.log("display results function");
    spinnerEle.classList.add("d-none");
    //searchResultsEle.textContent = searchResults;
    if (searchResults.search_results.length === 0) {
        searchResultsEle.textContent = "No results found";
    } else {
        for (let result of searchResults.search_results) {
            createAndAppendBooks(result);
        }
    }
}
//json.search_results.lentgh===0
function searchBook(event) {
    let searchInputValue = searchInputEle.value;
    //console.log("0", searchInputValue);
    //console.log(event.key);
    if (event.key === "Enter") {
        spinnerEle.classList.remove("d-none");
        // console.log("1", searchInputValue);
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputValue;
        let options = {
            method: "GET"
        };
        //   console.log("before fetch");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                //let resultSet = jsonData;
                console.log(jsonData);
                displayResults(jsonData);
            });
    }
}

searchInputEle.addEventListener("keydown", searchBook);