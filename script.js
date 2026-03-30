function meg() {
    document.querySelector(".haver").classList.toggle("red");

    document.querySelectorAll(".elso").forEach(el => {
        el.classList.toggle("show");
    });
}

