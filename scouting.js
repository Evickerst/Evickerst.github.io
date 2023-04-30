const teamSelected = document.querySelector("#selected-team");
const teamButtonList = document.querySelectorAll("#team-button-wrapper > button");
teamButtonList.forEach( button => {
    button.addEventListener("click", () => {
       teamSelected.innerHTML = "Selected: " + button.innerHTML;
    });
});

const autoDrivingSelected = document.querySelector("#selected-auto-driving");
const autoDrivingButtons = document.querySelectorAll("#auto-wrapper > button");
autoDrivingButtons.forEach( button => {
    button.addEventListener("click", () => {
        autoDrivingSelected.innerHTML = "Selected: " + button.innerHTML;
    });
});


