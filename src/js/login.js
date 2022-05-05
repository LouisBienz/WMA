/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasEmailError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasEmailError = true;
    } else {
        setInvalid(email);
        hasEmailError = true;
    }

    if (hasEmailError) {
        document.getElementById("login-email-error").classList.remove('d-none');
    } else {
        document.getElementById("login-email-error").classList.add('d-none');
    }

    var hasPasswordError = false;

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password);
        hasPasswordError = true;
    } else {
        setValid(password);
    } 

    if (hasPasswordError) {
        document.getElementById("login-password-error").classList.remove('d-none');
    } else {
        document.getElementById("login-password-error").classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
 function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasEmailError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasEmailError = true;
    } else {
        setInvalid(email);
        hasEmailError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasEmailError) {
        document.getElementById("login-email-error").classList.remove('d-none');
    } else {
        document.getElementById("login-email-error").classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    /**validate First Name */
    var hasFirstNameError = false;

    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        hasFirstNameError = true;
    } else if (firstName.validity.valid) {
        setValid(firstName);
    }

    if (hasFirstNameError) {
        document.getElementById('register-first-name-error').classList.remove('d-none');
    } else {
        document.getElementById('register-first-name-error').classList.add('d-none');
    }


    /**validate Last Name */
    var hasLastNameError = false;

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        hasLastNameError = true;
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    if (hasLastNameError) {
        document.getElementById('register-last-name-error').classList.remove('d-none');
    } else {
        document.getElementById('register-last-name-error').classList.add('d-none');
    }

    /**validate Email */
    var hasEmailError = false;

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasEmailError = true;
    } else {
        setInvalid(email);
        hasEmailError = true;
    }

    if (hasEmailError) {
        document.getElementById("register-email-error").classList.remove('d-none');
    } else {
        document.getElementById("register-email-error").classList.add('d-none');
    }

    /**validate Password */
    var hasPasswordError = false;

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        hasPasswordError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        hasPasswordError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        hasPasswordError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        hasPasswordError = true;
    } else {
        setValid(password);
    }

    if (hasPasswordError) {
        document.getElementById("register-password-error").classList.remove('d-none');
    } else {
        document.getElementById("register-password-error").classList.add('d-none');
    }


    /**validate Programme */
    var hasProgrammeError = false;

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        hasProgrammeError = true;
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        hasProgrammeError = true;
    } else {
        setValid(programme);
    }

    if (hasProgrammeError) {
        document.getElementById('register-programme-error').classList.remove('d-none');
    } else {
        document.getElementById('register-programme-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);
