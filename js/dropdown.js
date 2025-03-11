document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('languageDropdown');
    var dropdownMenu = document.getElementById('dropdownMenu');
    var dropdownItems = document.querySelectorAll('.language-menu .dropdown-item');

    function toggleDropdown() {
        dropdownMenu.classList.toggle('show');
    }

    function closeDropdown() {
        dropdownMenu.classList.remove('show');
    }

    dropdown.addEventListener('click', toggleDropdown);
    dropdown.addEventListener('touchstart', toggleDropdown);

    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            closeDropdown();
            toggleDropdown(); // Ensure the dropdown menu is properly toggled off
        });
        item.addEventListener('touchstart', function() {
            closeDropdown();
            toggleDropdown(); // Ensure the dropdown menu is properly toggled off
        });
    });
});