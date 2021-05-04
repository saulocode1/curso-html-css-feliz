const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputText = document.getElementById('message');

inputName.addEventListener('focus', () => {
    inputName.style.borderColor = '#918EF4';
})

inputName.addEventListener('blur', () => {
    inputName.style.borderColor = '';
})

inputEmail.addEventListener('focus', () => {
    inputEmail.style.borderColor = '#918EF4';
})

inputEmail.addEventListener('blur', () => {
    inputEmail.style.borderColor = '';
})

inputText.addEventListener('focus', () => {
    inputText.style.borderColor = '#918EF4';
})

inputText.addEventListener('blur', () => {
    inputText.style.borderColor = '';
})