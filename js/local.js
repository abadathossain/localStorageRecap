const addLocalStorage = () => {
    const inputNameField = document.getElementById('name');
    const inputEmailField = document.getElementById('email');
    const inputNmae = inputNameField.value;
    const inputEmail = inputEmailField.value;


    if (inputNmae && inputEmail) {
        localStorage.setItem(inputNmae, inputEmail)
    }

    inputNameField.value = '';
    inputEmailField.value = '';

}