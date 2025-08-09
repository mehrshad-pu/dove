function setupSearchToggle(btnId, inputId) {
    document.getElementById(btnId).addEventListener("click", function() {
        const input = document.getElementById(inputId);
        input.classList.toggle("active");
        if (input.classList.contains("active")) {
            input.focus();
        }
    });
}

setupSearchToggle("searchBtn", "searchInput");
setupSearchToggle("searchBtnDesktop", "searchInputDesktop");