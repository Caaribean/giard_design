window.addEventListener("load", function () {
    const formIds = ['search-form', 'search-input', 'search-button'];
    const searchInput = document.getElementById("search-input");
    const form = document.getElementById("search-form");

    window.addEventListener("click", function (event) {
        if (formIds.includes(event.srcElement.id)) {
            searchInput.classList.add("open");
            form.classList.add("open");
        } else {
            searchInput.classList.remove("open");
            form.classList.remove("open");
        }
    });
});