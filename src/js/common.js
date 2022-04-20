/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event, item=null) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;

    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');

    currentDropDownButton.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) { // on 'esc' close menu
            currentDropDownButton.setAttribute('aria-expanded', 'false')
            currentDropDownMenu.classList.remove('show');
        }
        if (event.keyCode === 32) { // on 'space' open menu
            currentDropDownButton.setAttribute('aria-expanded', 'true')
            currentDropDownMenu.classList.add('show');
        }
    })
    for (var j = 0; j < dropDownMenus.length; j++) {
        currentDropDownButton.setAttribute('aria-expanded', 'false')
        dropDownMenus[j].classList.remove('show');
    }
    if (!isOpen) {
        currentDropDownButton.setAttribute('aria-expanded', 'true');
        currentDropDownMenu.classList.add('show');
    }

}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
            dropDownToggles[i].addEventListener('keydown', function (event) {
                if (event.keyCode === 32) {
                    openMenu(event)
                }
            });
            dropDownToggles[i].addEventListener('click', openMenu, false);
        }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);

