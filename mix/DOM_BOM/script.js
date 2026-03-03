// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").innerText =
      "The button was clicked!";
  });

// example 2
let firstElement = document.getElementById("citiesList").firstElementChild;
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    firstElement.classList.add("highlight");
  });

// example 3
let coffeeType = document.getElementById("coffeeType");

document.getElementById("changeOrder").addEventListener("click", function () {
  coffeeType.textContent = "Espresso";
});

// example 4
let newList = document.createElement("li");
newList.textContent = "Eggs";
document.getElementById("addNewItem").addEventListener("click", function () {
  document.getElementById("shoppingList").appendChild(newList);
});

// example 5
let lastChild = document.getElementById("taskList").lastElementChild;
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    // one way
    // document.getElementById("taskList").removeChild(lastChild);

    // second way
    document.getElementById("taskList").lastElementChild.remove();
  });

// example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Hello");
  });

// example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedbackInput = document.getElementById("feedbackInput");
    let feedbackDisplay = document.getElementById("feedbackDisplay");
    feedbackDisplay.textContent = feedbackInput.value;
  });

// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let description = document.getElementById("descriptionText");
    description.classList.toggle("highlight");
  });
