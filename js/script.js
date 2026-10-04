const toggle = document.querySelector(".toggle");
const button = document.querySelector("#toggleBtn");

toggle.addEventListener("click", function () {

    toggle.classList.toggle("night");

    if (toggle.classList.contains("night")) {

        button.textContent = "Switch to Day";
        document.body.style.background = "black"

        document.body.style.color = "white"

    } else {

        button.textContent = "Switch to Night";

        document.body.style.background = "white"

        document.body.style.color = "black"

    }

});