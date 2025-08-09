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
// بستن منوی dropdown بعد از کلیک در نسخه موبایل
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        const dropdown = this.closest('.dropdown');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
      }
    });
  });