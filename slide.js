const a = document.querySelectorAll("a");

a.forEach(e => {
    e.addEventListener("click", (e) => {
        console.log(e.target.classList);
        a.forEach(e => {
            e.classList.remove("active");
        })
        if (!(e.target.classList.contains("active"))) {
            e.target.classList.add("active");
        }
    });
});


