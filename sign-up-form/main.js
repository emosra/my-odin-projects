const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submitBtn = document.querySelector('.submit-btn')
const matchPassword = document.createElement('div')
const signUpForm = document.querySelector('form')

submitBtn.addEventListener('click', (e) => {
    
    if (password.value !== confirmPassword.value) {
        e.preventDefault()
        matchPassword.textContent = 'Passwords MUST be matching'
        matchPassword.style.color = 'red'
        signUpForm.appendChild(matchPassword)
        return
    }
})