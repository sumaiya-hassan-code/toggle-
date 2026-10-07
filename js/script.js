const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {

    toggle.classList.toggle("night");

    if (toggle.classList.contains("night")) {

        document.body.style.background = "black"

        document.body.style.color = "white"

    } else {


        document.body.style.background = "white"

        document.body.style.color = "black"

    }

});