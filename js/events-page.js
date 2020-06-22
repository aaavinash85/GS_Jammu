const btn2019 = document.getElementById("event-2019");
const page2019 = document.getElementById("page-2019");
const btn2020 = document.getElementById("event-2020");
const page2020 = document.getElementById("page-2020");

function displayNone() {
    page2019.style.display = "none";
    page2020.style.display = "none";
}

function removeFocus(i) {
    i.classList.remove("focused");
    i.classList.add("temp-hover");
}

function addFocus(i) {
    i.classList.add("focused");
    i.classList.remove("temp-hover");
}

btn2019.addEventListener("click", function() {
    displayNone();
    page2019.style.display = "grid";
    removeFocus(btn2020);
    addFocus(btn2019);
});

btn2020.addEventListener("click", function() {
    displayNone();
    page2020.style.display = "grid";
    removeFocus(btn2019);
    addFocus(btn2020);
});

