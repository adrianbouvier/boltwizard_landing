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
        });
        item.addEventListener('touchstart', function() {
            closeDropdown();
        });
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            closeDropdown();
        }
    });
});