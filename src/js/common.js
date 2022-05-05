/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    const currentDropDownButton = event.target;
    const currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    const isOpen = currentDropDownMenu.classList.contains('show');
    const dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');

    currentDropDownButton.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) { // on 'esc' close menu
            currentDropDownButton.setAttribute('aria-expanded', 'false')
            currentDropDownMenu.classList.remove('show');
        }
    })

    for (let j = 0; j < dropDownMenus.length; j++) {
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

    const content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

    for (let i = 0; i < dropDownToggles.length; i++) {
            dropDownToggles[i].addEventListener('click', openMenu, false);
        }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);

/**
 * when key is pressed
 * if 'SPACE' key is pressed click target link
 */
$(document).keydown(function(event) {
    if (event.which === 32) { // SPACE event
        if (event.target.href) { // if has link, click
            event.target.click()
        }
    }
});

/**
 * close menu if 'TAB' key outside of expanded menu
 * remove 'show' from all drop down menus and set aria expanded to false on the toggles
 */
$(document).keyup(function(event) {
    if (event.which === 9) {
        if(!event.target.parentNode.parentNode.classList.contains('show')) {
            let j;
            const dropDownMenus =
                document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
            for (j = 0; j < dropDownMenus.length; j++) {
                dropDownMenus[j].classList.remove('show');
            }

            const dropDownToggles =
                document.querySelectorAll('#nav-bar-content .dropdown .dropdown-toggle');
            for (j = 0; j < dropDownToggles.length; j++) {
                dropDownToggles[j].ariaExpanded = 'false';
            }
        }
    }
});

const fontIncreaseButton = document.getElementById('font-increase-button');
const fontDecreaseButton = document.getElementById('font-decrease-button');
const rootHtml = document.getElementById('root');
const style = window.getComputedStyle(rootHtml, null).getPropertyValue('font-size');
let fontSize = parseFloat(style);

/**
 * increase font size when clicking on font increase button
 */
fontIncreaseButton.addEventListener('click', function (event) {
    fontSize += 1
    rootHtml.style.fontSize = fontSize + 'px';
})

/**
 * decrease font size when clicking on font decrease button
 */
fontDecreaseButton.addEventListener('click', function (event) {
    fontSize -= 1
    rootHtml.style.fontSize = fontSize + 'px';
})

